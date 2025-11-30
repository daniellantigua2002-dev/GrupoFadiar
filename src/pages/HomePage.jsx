

// import { Box, Typography } from "@mui/material";
// import { useBestSellers } from "../hooks/useBestSellers";
// import { useTheme } from "@mui/material/styles";
// import { useContext, useMemo } from "react";
// import { SearchContext } from "../contexts/searchContext";
// import { filterProductsByName } from "../filters/filterProductByName";
// import { LoadingState, EmptyState, GridOfertas, ComingSoonBanner, GridRecientes, GridMasVendido } from "./components";
// import { Banner } from '.././components';
// import { useInventoryProducts } from "../hooks/useInventoryProducts";



// export const HomePage = () => {
//   const { searchTerm } = useContext(SearchContext);
//   const theme = useTheme();

//   const { data: bestSellers, isLoading, error } = useBestSellers();
//   const { data: productsInventory, isError } = useInventoryProducts();

//   const productsReciente = productsInventory?.products || [];
//   const products = bestSellers || [];

//   const productsFilter = useMemo(
//     () => filterProductsByName(products, searchTerm),
//     [products, searchTerm]
//   );

//   return (
//     <>
//       <Banner />

//       {isLoading && <LoadingState />}

//       {productsFilter.length > 0 && (
//         <Box sx={{ textAlign: "center", mt: 4 }}>
//           <Typography variant="h5" fontWeight={700}>
//             No pierdas la Oportunidad
//           </Typography>

//           <Typography
//             variant="h6"
//             fontWeight={700}
//             color={theme.palette.secondary.main}
//           >
//             Nuestros productos más vendidos
//           </Typography>
//         </Box>
//       )}

//       {productsFilter.length > 0 ? (
//         <GridOfertas products={productsFilter} />
//       ) : (
//         <EmptyState />
//       )}


//       <Box sx={{ mt: 6 }}>
//         <ComingSoonBanner />
//       </Box>


//       <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
//         <GridRecientes products={productsReciente} />
//       </Box>


//       <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
//         <GridMasVendido products={products} />
//       </Box>
//     </>
//   );
// };
// 


import { Box, Typography } from "@mui/material";
import { useBestSellers } from "../hooks/useBestSellers";
import { useTheme } from "@mui/material/styles";
import { useContext, useMemo } from "react";
import { SearchContext } from "../contexts/searchContext";
import { filterProductsByName } from "../filters/filterProductByName";
import { LoadingState, EmptyState, GridOfertas, ComingSoonBanner, GridRecientes, GridMasVendido } from "./components";
import { Banner } from '.././components';
import { useInventoryProducts } from "../hooks/useInventoryProducts";


export const HomePage = () => {
  const { searchTerm } = useContext(SearchContext);
  const theme = useTheme();

  const { data: bestSellers, isLoading, error } = useBestSellers();
  const { data: productsInventory, isError } = useInventoryProducts();

  const productsReciente = productsInventory?.products || [];
  const products = bestSellers || [];

  const productsFilter = useMemo(
    () => filterProductsByName(products, searchTerm),
    [products, searchTerm]
  );

  // Define la fecha objetivo para el componente ComingSoonBanner
  const targetDate = "2025-12-31T00:00:00";

  return (
    <>
      {/* El Banner ocupa el 100% */}
      <Banner />

      {isLoading && <LoadingState />}

      {productsFilter.length > 0 && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h5" fontWeight={700}>
            No pierdas la Oportunidad
          </Typography>

          <Typography
            variant="h6"
            fontWeight={700}
            color={theme.palette.secondary.main}
          >
            Nuestros productos más vendidos
          </Typography>
        </Box>
      )}

      {productsFilter.length > 0 ? (
        <GridOfertas products={productsFilter} />
      ) : (
        <EmptyState />
      )}

      {/* ---------------------------------------------------- */}
      {/* ⬅️ BANNER PRÓXIMAMENTE (Contenedor al 100% del width) */}
      {/* ---------------------------------------------------- */}
      <Box
        sx={{
          mt: 6,
          display: 'flex',
          justifyContent: 'center',
          // Aseguramos que el contenedor ocupe el 100% del espacio disponible
          width: '100%',
          // Si toda la página usa un contenedor de ancho fijo, 
          // elimina los márgenes laterales del padre para este Box.
        }}
      >
        {/* El componente ComingSoonBanner ahora usa width: 100% de su padre */}
        <ComingSoonBanner targetDateString={targetDate} />
      </Box>


      <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
        <GridRecientes products={productsReciente} />
      </Box>


      <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
        <GridMasVendido products={products} />
      </Box>
    </>
  );
};