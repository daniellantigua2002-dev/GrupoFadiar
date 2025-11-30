
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";

import { MIN_CARD_WIDTH } from '../../utils/breakpoints';

const ITEMS_PER_PAGE_DESKTOP = 24;

export const GridOfertas = ({ products = [] }) => {
    const theme = useTheme();


    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));


    const [page, setPage] = useState(1);


    const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE_DESKTOP);

    const productsToShow = useMemo(() => {

        if (!isDesktop) {
            return products;
        }


        const start = (page - 1) * ITEMS_PER_PAGE_DESKTOP;
        const end = page * ITEMS_PER_PAGE_DESKTOP;
        return products.slice(start, end);

    }, [products, page, isDesktop]);

    const handleChangePage = (event, value) => {
        setPage(value);

    };

    return (
        <Box sx={{ px: 3, py: 2 }}>


            <Box
                sx={{

                    display: { xs: "flex", sm: "grid" },


                    overflowX: { xs: "scroll", sm: "visible" },
                    WebkitOverflowScrolling: "touch",
                    overflowScrolling: "touch",
                    pb: { xs: 2, sm: 0 },


                    gap: { xs: 0, sm: 2 },

                    gridTemplateColumns: {
                        sm: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
                    },
                }}
            >
                {productsToShow.map((product) => (
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


            {isDesktop && pageCount > 1 && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 4,
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