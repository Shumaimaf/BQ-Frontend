export const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return { ...state, token: action.token };

        case 'LOGOUT':
            return { ...state, cart: [...state.cart, action.payload] };

        default:
            return state;
    }
};
