





// import {
//   Box,
//   IconButton,
//   Modal,
//   Fade,
//   Backdrop,
//   useMediaQuery,
//   Typography,
//   Pagination,
// } from "@mui/material";

// import FilterListIcon from "@mui/icons-material/FilterList";
// import { Banner } from "../components";

// import { useState, useContext, useMemo } from "react";
// import { useTheme } from "@mui/material/styles";
// import { useInventoryProducts } from "../hooks/useInventoryProducts";
// import { FiltersProducts, GridProductsInventory } from "./components";
// import { filterProductsByName } from "../filters/filterProductByName";
// import { filterProductsModal } from "../filters/filterProductsModal";
// import { SearchContext, useFilters } from "../contexts";
// import { PaymentInfoBanner } from "./components/PaymentInfoBanner";
// import { GridRecientes } from "./components/GridRecientes";

// export const ProductsPage = () => {
//   const [openFilters, setOpenFilters] = useState(false);
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 16;
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { searchTerm } = useContext(SearchContext);

//   const { activeFilters } = useFilters();


//   const { data: productsInventory, isLoading, isError } = useInventoryProducts();
//   const products = productsInventory?.products || [];



//   const productsFilter = useMemo(() => {
//     const filteredBySearch = filterProductsByName(products, searchTerm);
//     const finalFilteredProducts = filterProductsModal(filteredBySearch, activeFilters);
//     return finalFilteredProducts;
//   }, [products, searchTerm, activeFilters]);


//   const pageCount = Math.ceil(productsFilter.length / itemsPerPage);
//   const productsPaginated = productsFilter.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const handleChangePage = (event, value) => {
//     setPage(value);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           pl: { xs: 0, md: 2 },
//           pr: 0,
//           pt: 2,
//           pb: 2,
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: 2,
//         }}
//       >
//         {/* FILTROS DESKTOP */}
//         <Box
//           sx={{
//             display: { xs: "none", md: "block" },
//             position: "sticky",
//             top: 10,
//             overflow: "visible",
//             height: "auto",
//             maxHeight: "none",
//             pr: 2,
//             zIndex: 50,
//             width: "300px",
//           }}
//         >
//           <FiltersProducts />
//         </Box>

//         {/* GRID PRINCIPAL + BANNER */}
//         <Box sx={{ flexGrow: 1 }}>
//           <Banner style={{ width: "100%", height: "auto", display: "block" }} />

//           {/* CONTENEDOR DE TÍTULO + BOTÓN DE FILTROS MOBILE */}
//           <Box
//             sx={{
//               mt: 5,
//               ml: 2,
//               mr: 2,
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: { xs: "row", md: "column" },
//               alignItems: { xs: "center", md: "flex-start" },
//             }}
//           >
//             {/* TÍTULO */}
//             <Typography
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: "1.4rem",
//                 color: theme.palette.primary.main,
//               }}
//             >
//               Todas las categorías{" "}
//               <Typography
//                 component="span"
//                 sx={{
//                   fontSize: "0.9rem",
//                   color: theme.palette.grey[600],
//                   fontWeight: "normal",
//                   ml: 1,
//                 }}
//               >
//                 ({productsFilter.length}{" "}
//                 {productsFilter.length === 1 ? "producto" : "productos"} )
//               </Typography>
//             </Typography>

//             {/* BOTÓN FILTROS MOBILE */}
//             <Box
//               sx={{
//                 display: { xs: "flex", md: "none" },
//                 justifyContent: "flex-end",
//               }}
//             >
//               <IconButton
//                 onClick={() => setOpenFilters(true)}
//                 sx={{
//                   backgroundColor: "white",
//                   boxShadow: 2,
//                   zIndex: 20,
//                   color: theme.palette.primary.main,
//                   p: isMobile ? 0.5 : 1,
//                   "&:hover": {
//                     backgroundColor: theme.palette.primary.main,
//                     color: theme.palette.primary.contrastText,
//                   },
//                 }}
//               >
//                 <FilterListIcon fontSize={isMobile ? "small" : "medium"} />
//               </IconButton>
//             </Box>
//           </Box>

//           {/* LOADING / ERROR */}
//           {isLoading && (
//             <Typography sx={{ ml: 2, mt: 2, fontWeight: 600 }}>
//               Cargando productos...
//             </Typography>
//           )}
//           {isError && (
//             <Typography sx={{ ml: 2, mt: 2, color: "red" }}>
//               Error al cargar productos
//             </Typography>
//           )}

//           {/* GRID DE PRODUCTOS */}
//           {productsPaginated.length > 0 && (
//             <Box sx={{ ml: 0, mt: 1 }}>
//               <GridProductsInventory products={productsPaginated} />
//             </Box>
//           )}

//           {/* PAGINACIÓN */}
//           {pageCount > 1 && (
//             <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 4 }}>
//               <Pagination
//                 count={pageCount}
//                 page={page}
//                 onChange={handleChangePage}
//                 color="primary"
//                 shape="rounded"
//                 showFirstButton
//                 showLastButton
//               />
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* BANNER DE PAGO */}
//       <PaymentInfoBanner />

//       {/* RECIENTES — sin texto */}
//       {products.length > 0 && (
//         <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
//           <GridRecientes products={products} />
//         </Box>
//       )}

//       {/* MODAL FILTROS MOBILE */}
//       {isMobile && (
//         <Modal
//           open={openFilters}
//           onClose={() => setOpenFilters(false)}
//           closeAfterTransition
//           BackdropComponent={Backdrop}
//           BackdropProps={{ timeout: 200 }}
//         >
//           <Fade in={openFilters}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "90%",
//                 maxHeight: "90vh",
//                 bgcolor: "white",
//                 boxShadow: 4,
//                 p: 2,
//                 overflowY: "auto",
//                 borderRadius: 2,
//               }}
//             >
//               <FiltersProducts />
//             </Box>
//           </Fade>
//         </Modal>
//       )}
//     </>
//   );
// };

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
import { Banner } from "../components";

import { useState, useContext, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { useInventoryProducts } from "../hooks/useInventoryProducts";
import { FiltersProducts, GridProductsInventory } from "./components";
import { filterProductsByName } from "../filters/filterProductByName";
import { filterProductsModal } from "../filters/filterProductsModal";
import { SearchContext, useFilters } from "../contexts";
import { PaymentInfoBanner } from "./components/PaymentInfoBanner";
import { GridRecientes } from "./components/GridRecientes";

export const ProductsPage = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { searchTerm } = useContext(SearchContext);

  const { activeFilters } = useFilters();

  const { data: productsInventory, isLoading, isError } = useInventoryProducts();
  const products = productsInventory?.products || [];

  const productsFilter = useMemo(() => {
    const filteredBySearch = filterProductsByName(products, searchTerm);
    const finalFilteredProducts = filterProductsModal(filteredBySearch, activeFilters);
    return finalFilteredProducts;
  }, [products, searchTerm, activeFilters]);

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
            top: 10,
            overflow: "visible",
            height: "auto",
            maxHeight: "none",
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

          {/* CONTENEDOR DE TÍTULO + BOTÓN FILTROS MOBILE */}
          <Box
            sx={{
              mt: 5,
              ml: 2,
              mr: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "row", md: "column" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: theme.palette.primary.main,
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
                  color: theme.palette.primary.main,
                  p: isMobile ? 0.5 : 1,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <FilterListIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
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
