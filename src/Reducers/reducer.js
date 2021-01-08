const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_ONE":
            return state = state+1
        case "DECREMENT_ONE":
            return state = state-1
        case "RESET":
            return state = 0
        default : state = 0
    }
}  

export default reducer;