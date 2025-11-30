

import {
    Box,
    IconButton,
    Modal,
    Fade,
    Backdrop,
    useMediaQuery,
    Typography,
    Pagination,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Banner } from "../components"; // Ajusta la ruta si es necesario

import { useState, useContext, useMemo } from "react";
import { useTheme } from "@mui/material/styles";

import { useInventoryProducts } from "../hooks/useInventoryProducts"; // Ajusta la ruta si es necesario
import { FiltersProducts, GridProductsInventory } from "./components"; // Ajusta la ruta si es necesario
import { SortFilter } from "./components/SortFilter"; // ⬅️ Componente de Ordenamiento
import { filterProductsByName } from "../filters/filterProductByName"; // Ajusta la ruta si es necesario
import { filterProductsModal } from "../filters/filterProductsModal"; // Ajusta la ruta si es necesario
import { SearchContext, useFilters } from "../contexts"; // Ajusta la ruta si es necesario
import { PaymentInfoBanner } from "./components/PaymentInfoBanner"; // Ajusta la ruta si es necesario
import { GridRecientes } from "./components/GridRecientes"; // Ajusta la ruta si es necesario

export const ProductsPage = () => {
    const [openFilters, setOpenFilters] = useState(false);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const theme = useTheme();
    const accentColor = theme.palette.primary.main;

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { searchTerm } = useContext(SearchContext);

    // 1. OBTENCIÓN DEL ESTADO DE ORDENAMIENTO
    const { activeFilters, rawStates, setFilters } = useFilters();
    const { sortBy } = rawStates; // Estado actual
    const { setSortBy } = setFilters; // Función para actualizar el estado

    const { data: productsInventory, isLoading, isError } = useInventoryProducts();
    const products = productsInventory?.products || [];

    // 2. LÓGICA DE FILTRADO Y ORDENAMIENTO USANDO useMemo
    const productsFilter = useMemo(() => {
        let filteredBySearch = filterProductsByName(products, searchTerm);
        let finalFilteredProducts = filterProductsModal(filteredBySearch, activeFilters);

        // 🛠️ Lógica de Ordenamiento
        const productsToSort = [...finalFilteredProducts]; 

        if (sortBy === 'menor-precio') {
            productsToSort.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'mayor-precio') {
            productsToSort.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'con-rebaja') {
             // Asumiendo que 'onSale' es un booleano o similar
             productsToSort.sort((a, b) => (b.onSale - a.onSale)); 
        } else if (sortBy === 'sin-rebaja') {
             productsToSort.sort((a, b) => (a.onSale - b.onSale));
        }
        // Si sortBy es 'sin-ordenar', no se hace nada y se mantiene el orden de filtrado.

        return productsToSort;
    }, [products, searchTerm, activeFilters, sortBy]); // ⬅️ sortBy es la dependencia clave

    const pageCount = Math.ceil(productsFilter.length / itemsPerPage);
    const productsPaginated = productsFilter.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleChangePage = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Box
                sx={{
                    pl: { xs: 0, md: 2 },
                    pr: 0,
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                }}
            >
                {/* FILTROS DESKTOP */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "sticky",
                        top: 4,
                        height: 'calc(100vh - 4px)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        pr: 2,
                        zIndex: 50,
                        width: "300px",
                    }}
                >
                    <FiltersProducts />
                </Box>

                {/* GRID PRINCIPAL + BANNER */}
                <Box sx={{ flexGrow: 1 }}>
                    <Banner style={{ width: "100%", height: "auto", display: "block" }} />

                    {/* CONTENEDOR DE TÍTULO + FILTRO DE ORDENAMIENTO + BOTÓN FILTROS MOBILE */}
                    <Box
                        sx={{
                            mt: 5,
                            ml: 2,
                            mr: 2,
                            display: "flex",
                            justifyContent: "space-between", 
                            flexDirection: { xs: "row", md: "row" },
                            alignItems: { xs: "center", md: "center" },
                        }}
                    >
                        {/* 1. TÍTULO */}
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.4rem",
                                color: accentColor,
                            }}
                        >
                            Todas las categorías{" "}
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: "0.9rem",
                                    color: theme.palette.grey[600],
                                    fontWeight: "normal",
                                    ml: 1,
                                }}
                            >
                                ({productsFilter.length}{" "}
                                {productsFilter.length === 1 ? "producto" : "productos"} )
                            </Typography>
                        </Typography>

                        {/* 2. FILTRO DE ORDENAMIENTO + BOTÓN FILTROS MOBILE */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {/* Componente de Ordenamiento: RECIBE EL ESTADO Y LA FUNCIÓN */}
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                <SortFilter
                                    sortBy={sortBy} 
                                    setSortBy={setSortBy} 
                                />
                            </Box>

                            {/* BOTÓN FILTROS MOBILE */}
                            <Box
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    justifyContent: "flex-end",
                                }}
                            >
                                <IconButton
                                    onClick={() => setOpenFilters(true)}
                                    sx={{
                                        backgroundColor: "white",
                                        boxShadow: 2,
                                        zIndex: 20,
                                        color: accentColor,
                                        p: isMobile ? 0.5 : 1,
                                        "&:hover": {
                                            backgroundColor: accentColor,
                                            color: theme.palette.primary.contrastText,
                                        },
                                    }}
                                >
                                    <FilterListIcon fontSize={isMobile ? "small" : "medium"} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>

                    {/* LOADING / ERROR */}
                    {isLoading && (
                        <Typography sx={{ ml: 2, mt: 2, fontWeight: 600 }}>
                            Cargando productos...
                        </Typography>
                    )}
                    {isError && (
                        <Typography sx={{ ml: 2, mt: 2, color: "red" }}>
                            Error al cargar productos
                        </Typography>
                    )}

                    {/* GRID DE PRODUCTOS O MENSAJE DE VACÍO */}
                    <Box sx={{ ml: 0, mt: 3 }}>
                        {productsFilter.length === 0 ? (
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    fontWeight: 500,
                                    color: theme.palette.grey[600],
                                    textAlign: "center",
                                    mt: 4,
                                }}
                            >
                                No hay productos para mostrar con los filtros aplicados.
                            </Typography>
                        ) : (
                            <GridProductsInventory products={productsPaginated} />
                        )}
                    </Box>

                    {/* PAGINACIÓN */}
                    {pageCount > 1 && productsFilter.length > 0 && (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 4 }}>
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
            </Box>

            {/* BANNER DE PAGO */}
            <PaymentInfoBanner />

            {/* RECIENTES */}
            {products.length > 0 && (
                <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
                    <GridRecientes products={products} />
                </Box>
            )}

            {/* MODAL FILTROS MOBILE */}
            {isMobile && (
                <Modal
                    open={openFilters}
                    onClose={() => setOpenFilters(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 200 }}
                >
                    <Fade in={openFilters}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "90%",
                                maxHeight: "90vh",
                                bgcolor: "white",
                                boxShadow: 4,
                                p: 2,
                                overflowY: "auto",
                                borderRadius: 2,
                            }}
                        >
                            <FiltersProducts />
                        </Box>
                    </Fade>
                </Modal>
            )}
        </>
    );
};