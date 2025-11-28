


// GridRelacionados.jsx
import { Box, Typography, Pagination, useTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";

export const GridRelacionados = ({ products = [] }) => {
    const theme = useTheme();

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const pageCount = Math.ceil(products.length / itemsPerPage);

    const productsPaginated = useMemo(
        () =>
            products.slice(
                (page - 1) * itemsPerPage,
                page * itemsPerPage
            ),
        [products, page]
    );

    const handleChangePage = (event, value) => {
        setPage(value);
        // ❌ Ya NO hace scroll
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                overflowX: "hidden",
                px: { xs: 2, md: 4 },
                py: 2,
            }}
        >
            {/* TÍTULO PRINCIPAL */}
            <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                    textAlign: "left",
                    mb: 0.5,
                    color: theme.palette.primary.main,
                }}
            >
                También le puede interesar
            </Typography>

            {/* SUBTÍTULO */}
            <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                    textAlign: "left",
                    mb: 3,
                    color: theme.palette.secondary.main,
                }}
            >
                Productos Relacionados
            </Typography>

            {/* GRID DE PRODUCTOS */}
            <Box
                sx={{
                    display: "grid",
                    gap: 2,
                    width: "100%",
                    maxWidth: "100%",
                    minWidth: 0,
                    gridTemplateColumns: {
                        xs: "repeat(2, minmax(0, 1fr))",
                        sm: "repeat(2, minmax(0, 1fr))",
                        md: "repeat(5, minmax(0, 1fr))",
                    },
                }}
            >
                {productsPaginated.map((product) => (
                    <Box key={product.id} sx={{ minWidth: 0 }}>
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>

            {/* PAGINACIÓN */}
            {pageCount > 1 && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 3,
                        mb: 2,
                    }}
                >
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                        shape="rounded"
                        showFirstButton
                        showLastButton
                    />
                </Box>
            )}
        </Box>
    );
};

