
export const initialState = () => {
    if (!localStorage.getItem("jwtoken"))
        return null;
}

export const reducer = (state, action) => {

    if (action.type === "USER") {
        return action.payload;
    }
    return state;
}


