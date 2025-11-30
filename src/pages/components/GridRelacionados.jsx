


import { Box, Typography, Pagination, useTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";

import { MIN_CARD_WIDTH } from '../../utils/breakpoints';

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


    const allProducts = products;

    const handleChangePage = (event, value) => {
        setPage(value);

    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                px: { xs: 2, md: 4 },
                py: 2,
            }}
        >

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


            <Box
                sx={{

                    display: { xs: "flex", sm: "grid" },


                    overflowX: { xs: "scroll", sm: "visible" },
                    overflowY: "hidden",

                    flexWrap: { xs: "nowrap", sm: "wrap" },


                    "&::-webkit-scrollbar": { display: "none" },
                    msOverflowStyle: "none",


                    gap: { xs: 2, sm: 2 },

                    width: "100%",
                    maxWidth: "100%",
                    minWidth: 0,


                    gridTemplateColumns: {
                        xs: "none",
                        sm: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
                    },
                }}
            >

                {(window.innerWidth < theme.breakpoints.values.sm ? allProducts : productsPaginated).map((product) => (
                    <Box
                        key={product.id}
                        sx={{

                            flexShrink: { xs: 0, sm: 1 },
                            minWidth: { xs: MIN_CARD_WIDTH, sm: 'auto' },
                            maxWidth: { xs: MIN_CARD_WIDTH, sm: 'auto' },
                        }}
                    >
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>

          
            {pageCount > 1 && (
                <Box
                    sx={{
                     
                        display: { xs: "none", sm: "flex" },
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