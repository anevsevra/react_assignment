const getCartItemById = (id, cartItems) => cartItems.find(elem => elem.id === id)

export default getCartItemById;
