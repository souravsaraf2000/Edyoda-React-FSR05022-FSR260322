const obj = {
    account:{},
    dashboard: {},
    product: {}
}

export const dashboardReducer = (state = obj.dashboard, action) => {
    if(action.type === 'UPDATE_DASHBOARD_DATA')
        return action.payload
    return state
}

export const accountReducer = ( state = obj.account, action) => {
    if(action.type === 'UPDATE_ACCOUNT_DATA')
        return action.payload
    return state
}

export const productReducer = (state = obj.product, action) => {
    if(action.type === 'UPDATE_PRODUCT_DATA')
        return action.payload
    return state
}