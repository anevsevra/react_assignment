const getCartItemById = (id, cartItems) => cartItems.find(elem => elem.id === id);
const getIndexById = (id, cartItems) => cartItems.findIndex(elem => elem.id === id);

export { getCartItemById, getIndexById };
