import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Inicializa el contexto global
export const Context = React.createContext(null);

// Función para inyectar el contexto en los componentes
const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        // Estado global
        const [state, setState] = useState(() =>
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState((prevState) => ({
                        store: { ...prevState.store, ...updatedStore }, // Evita la mutación directa
                        actions: { ...prevState.actions },
                    })),
            })
        );

        // useEffect solo se ejecuta una vez al montar el componente
        useEffect(() => {
            state.actions.getContactList();
        }, []); // Se pasa un array vacío para ejecutarse solo una vez

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;


