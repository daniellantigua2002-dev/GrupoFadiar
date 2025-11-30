

// GridProductsInventory.jsx
import { Box } from "@mui/material";
import { ProductCard } from "./ProductCard";

import { MIN_CARD_WIDTH } from '../../utils/breakpoints';

export const GridProductsInventory = ({ products = [] }) => {
    return (
        // El padding exterior está bien
        <Box sx={{ px: 3, py: 2 }}>

            <Box
                sx={{
                    // El display: "grid" es la clave para la cuadrícula responsiva.
                    display: "grid",

                    // El gap: 1 (8px) es un espacio razonable entre productos.
                    gap: 1,

                    // APLICAMOS LA LÓGICA RESPONSIVA AUTOMÁTICA
                    gridTemplateColumns: {
                        // Usamos la propiedad CSS Grid 'auto-fit' en todas las resoluciones
                        // para que se creen tantas columnas como sea posible, 
                      
                        xs: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
                    },

                    // Mantenemos este padding si es necesario
                    pb: { xs: 2, sm: 0 },
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            // Mantenemos las alturas mínimas si son necesarias para el diseño,
                            // aunque el grid se encargará del ancho.
                            minHeight: { sm: '400px', md: '450px' },
                        }}
                    >
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>

        </Box>
    );
};