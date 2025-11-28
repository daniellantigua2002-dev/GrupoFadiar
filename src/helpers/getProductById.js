export const getProductById = (listProducts, productId) => {
    return listProducts.find(product => product.id == productId);
};
