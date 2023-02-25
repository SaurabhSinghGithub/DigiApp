import React, { useContext } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import reducer from './reducer'
import { api } from './api'
import { useEffect } from 'react'



const AppContext = createContext()

const initialState = {
    fname: "",
    image: "",
    services: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const UpdateHomePage = () => {
        return dispatch(
            {
                type: "UpdateHomePage",
                payload: {
                    fname: "Saurabh Singh",
                    image: require("./images/hero1.png"),
                }
            }
        )
    }
    const UpdateAboutPage = () => {
        return dispatch(
            {
                type: "UpdateAboutPage",
                payload: {
                    fname: "Kabir Singh",
                    image: require("./images/hero2.png"),
                }
            }
        )
    }

    const UpdateServicesPage = (data) => {
        return dispatch(
            {
                type: "UpdateServicesPage",
                payload: data,
            }
        )
    }

    useEffect(() => {

        UpdateServicesPage(api)

    }, [])


    return (
        <>
            <AppContext.Provider value={{ ...state, UpdateHomePage, UpdateAboutPage }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

const useGlobalContext = () => {

    return (
        useContext(AppContext)
    )
}


export { AppContext, AppProvider, useGlobalContext };