const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {


			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContactList: async () => {

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/david97/contacts")
					console.log(response)
					const data = await response.json()
					console.log(data)
					setStore({ contacts: data.contacts })

				} catch (error) {
					console.log(error)
				}
			},

			createContact: async (newContact) => {
				try {
					const options = {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)

					}
					const response = await fetch("https://playground.4geeks.com/contact/agendas/david97/contacts", options)
					console.log(response)
					const data = await response.json()
					console.log(data)
					getActions().getContactList()

				} catch (error) {
					console.log(error)
				}

			},
			deleteContact: async (id) => {
				try {
					const opciones = {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					};

					const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/david97/contacts/${id}`, opciones);

					if (!respuesta.ok) {
						throw new Error(`Error HTTP! Código: ${respuesta.status}`);
					}

					console.log(`Contacto con ID ${id} eliminado correctamente`);

					getActions().getContactList(); // Actualiza la lista después de eliminar
				} catch (error) {
					console.error("Error al eliminar el contacto:", error);
				}
			},
			editContact: (id, contact) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/david97/contacts/${id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				})
					.then((response) => {
						if (response.ok) {
							return response.json()
						}
					})
					.then((data) => {
						if (data) {
							const updatedList = store.listContacts.map(contact => {
								if (contact.id == id) {
									contact = data
								}
								return contact
							})
							setStore({ listContacts: updatedList })
						}
					})
					.catch((error) => console.log(error));


			}
		}
	}
};

export default getState;
