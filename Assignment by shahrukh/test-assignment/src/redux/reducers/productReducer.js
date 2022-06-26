
const initialState = {
    products:[{
        id:1,
        title:"Shahrukh",
        category: "Programmer",
    }]
}

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case type.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}