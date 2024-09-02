/**
 * This function calculates total price of a new order
 * @param {array} products cardProduct: Array of Object
 * @returns {number} Total price
 */
export const TotalPrice = (products) =>
    products.reduce((sum, product) => sum + product.price, 0);