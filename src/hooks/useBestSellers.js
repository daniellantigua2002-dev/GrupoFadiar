// import { useQuery } from "@tanstack/react-query";
// import { apiURL } from "../utils/apiurl";



// const fetchProducts = async () => {
//     const res = await fetch(`${apiURL}/img_mas_vendido`);
//     if (!res.ok) throw new Error("Error al obtener datos");
//     return res.json();
// };

// export const useProducts = () => {
//     return useQuery({
//         queryKey: ["products"],
//         queryFn: fetchProducts,
//         staleTime: 1000 * 60 * 10,
//         refetchOnWindowFocus: false,
//     });
// };



import { useQuery } from "@tanstack/react-query";
import { apiURL } from "../utils/apiurl";

// Función que hace POST a /img_mas_vendido
const fetchBestSellers = async () => {
    const res = await fetch(`${apiURL}/img_mas_vendido`, {
        method: "POST",            // POST en lugar de GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),   // body vacío
    });

    if (!res.ok) throw new Error("Error al obtener datos");
    return res.json();
};

// Hook
export const useBestSellers = () => {
    return useQuery({
        queryKey: ["bestSellers"],   // QueryKey descriptiva
        queryFn: fetchBestSellers,
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
    });
};
