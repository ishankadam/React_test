import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount:0,
    additem: (item) => {},
    remove: (id) => {},
    clearCart: () => {},
});

export default CartContext;