
import Fuse from "fuse.js";

export const filterProductsByName = (listProducts, nameFilter) => {
    if (!nameFilter || nameFilter.trim() === "") return listProducts;

    const fuse = new Fuse(listProducts, {
        keys: ["name"],     // ¿En qué campos buscar?
        threshold: 0.3,     // Precisión de coincidencia (0 = exacto, 1 = muy permisivo)
        includeScore: true, // Incluye puntuación para ordenar por relevancia
    });

    const result = fuse.search(nameFilter);

    return result.map(r => r.item); // Extrae solo el producto
};
