import { useState, useEffect } from "react";

const apiURL = "https://app.fadiar.com:444/prueba/api";

export const useFetchApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `${apiURL}/inventory_manager`;

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Error al obtener datos');
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

