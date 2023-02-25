import React from 'react'

const reducer = (state, action) => {


    if (action.type === "UpdateHomePage") {
        return {
            ...state,
            fname: action.payload.fname,
            image: action.payload.image,
        }
    }

    if (action.type === "UpdateAboutPage") {
        return {
            ...state,
            fname: action.payload.fname,
            image: action.payload.image,
        }

    }
    if (action.type === "UpdateServicesPage") {
        return {
            ...state,
            services: action.payload,
        }

    }

    return state;

}

export default reducer;