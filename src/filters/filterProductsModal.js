export const filterProductsModal = (products, activeFilters) => {
    const { categorias, marcas, rangoPrecio } = activeFilters;
    const [minPrice, maxPrice] = rangoPrecio;

    return products.filter(product => {
        const matchesCategory =
            categorias.length === 0 ||
            categorias.includes(product.categoria.name);

        const matchesBrand =
            marcas.length === 0 ||
            marcas.includes(product.brand);

        const matchesPrice =
            product.price >= minPrice &&
            product.price <= maxPrice;

        return matchesCategory && matchesBrand && matchesPrice;
    });
};
