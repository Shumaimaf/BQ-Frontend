export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return { ...state, cart: [...state.cart, action.payload] };

        default:
            return state;
    }
};
