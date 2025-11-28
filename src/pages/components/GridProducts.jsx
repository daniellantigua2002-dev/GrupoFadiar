

// GridOfertas.jsx
import { Box } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const GridOfertas = ({ products = [] }) => {
    return (
        <Box sx={{ px: 3, py: 2 }}>

            {/* CONTENEDOR */}
            <Box
                sx={{
                    display: { xs: "flex", sm: "grid" },
                    overflowX: { xs: "scroll", sm: "visible" },
                    WebkitOverflowScrolling: "touch",
                    gap: 2,
                    gridTemplateColumns: {
                        sm: "repeat(2, 1fr)",
                        md: "repeat(5, 1fr)",
                    },
                    pb: { xs: 2, sm: 0 },
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            flex: { xs: "0 0 80%", sm: "none" },
                        }}
                    >
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
