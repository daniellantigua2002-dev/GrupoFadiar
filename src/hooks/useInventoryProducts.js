import { useQuery } from "@tanstack/react-query";

const fetchInventoryProducts = async () => {
    const res = await fetch("https://app.fadiar.com:444/prueba/api/inventory_manager", {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });

    if (!res.ok) throw new Error("Error al obtener inventario");
    return res.json();
};

export const useInventoryProducts = () => {
    return useQuery({
        queryKey: ["inventoryProducts"],
        queryFn: fetchInventoryProducts,
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
    });
};
