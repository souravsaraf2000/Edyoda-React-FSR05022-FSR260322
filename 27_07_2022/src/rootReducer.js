const obj = {
    name: 'John',
    age: 35
}

export const rootReducer = (state = obj, action) => {
    console.log('I am the action from reducer', action)
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: action.payload
        }
    }
    if(action.type === 'UPDATE_AGE'){
        return {
            ...state,
            age: action.payload
        }
    }
    if(action.type === 'PROVIDE_YEAR'){
        return {
            ...state,
            year: action.payload
        }
    }
    return state
}