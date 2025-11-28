// LatestProducts.jsx
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductCard } from './ProductCard';
import { getLatestProducts } from '../api/products'; 

export const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLatestProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <Typography>Cargando productos...</Typography>;

    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Box>
    );
};
