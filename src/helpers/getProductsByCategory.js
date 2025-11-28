
export const getProductsByCategory = (listProducts = [], productCategory, productID) => {
    return listProducts.filter(
        (product) =>
            product.categoria.id === productCategory &&
            product.id !== productID
    );
};
