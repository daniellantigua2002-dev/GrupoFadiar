// import { Box, Typography, useTheme } from "@mui/material";
// import { ProductCard } from "./";

// // Definimos el ancho mínimo de las tarjetas para el modo Grid (escritorio).
// const MIN_CARD_WIDTH = 220;

// export const GridMasVendido = ({ products = [] }) => {
//   const theme = useTheme();

//   // Mantenemos la lógica de mostrar solo 5 productos más vendidos
//   const topProducts = products.slice(-5);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "100%",
//         // Ya no necesitamos 'overflowX: "hidden"' si queremos scroll interno.
//         px: { xs: 2, md: 4 },
//         py: 2,
//       }}
//     >
//       {/* TÍTULOS */}
//       <Typography
//         variant="h5"
//         fontWeight={700}
//         sx={{
//           textAlign: "left",
//           mb: 0.5,
//           color: theme.palette.primary.main,
//         }}
//       >
//         Lo que le gusta a la gente!!!
//       </Typography>

//       <Typography
//         variant="h6"
//         fontWeight={700}
//         sx={{
//           textAlign: "left",
//           mb: 3,
//           color: theme.palette.secondary.main,
//         }}
//       >
//         Lo más vendido
//       </Typography>

//       {/* GRID / CARRUSEL MOVIL */}
//       <Box
//         sx={{
//           // CAMBIO 1: Usamos 'flex' en móvil (xs) y 'grid' a partir de tablet (sm).
//           display: { xs: "flex", sm: "grid" },

//           // CAMBIO 2: Habilitamos el scroll horizontal solo en móvil (xs).
//           overflowX: { xs: "scroll", sm: "visible" },
//           WebkitOverflowScrolling: "touch", // Para experiencia táctil
//           paddingBottom: { xs: 1, sm: 0 }, // Espacio para el scrollbar en móvil

//           // CAMBIO 3: Ajustamos el gap (separación) para ambas resoluciones
//           gap: { xs: 1.5, sm: 2 },

//           width: "100%",
//           maxWidth: "100%",
//           minWidth: 0,

//           // CAMBIO 4: Usamos auto-fit para el modo Grid (sm+) para eliminar el límite manual.
//           gridTemplateColumns: {
//             sm: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
//           },
//         }}
//       >
//         {topProducts.map((product) => (
//           <Box
//             key={product.id}
//             sx={{
//               // CAMBIO 5: En móvil (xs), definimos el ancho para que la tarjeta se deslice.
//               // Usamos 45% para que quepan dos tarjetas o 66% para una y media.
//               flex: { xs: "0 0 45%", sm: "none" },
//               minWidth: 0
//             }}
//           >
//             <ProductCard product={product} />
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };




import { Box, Typography, useTheme } from "@mui/material";
import { ProductCard } from "./";

import { MIN_CARD_WIDTH } from '../../utils/breakpoints';

export const GridMasVendido = ({ products = [] }) => {
  const theme = useTheme();

  // Mantenemos la lógica de mostrar solo 5 productos más vendidos
  const topProducts = products.slice(-5);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        px: { xs: 2, md: 4 },
        py: 2,
      }}
    >
      {/* TÍTULOS */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          textAlign: "left",
          mb: 0.5,
          color: theme.palette.primary.main,
        }}
      >
        Lo que le gusta a la gente!!!
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
        Lo más vendido
      </Typography>

      {/* GRID / CARRUSEL MOVIL */}
      <Box
        sx={{
          // 1. En móvil (xs), usamos Flex para la fila; en desktop (sm+), usamos Grid.
          display: { xs: "flex", sm: "grid" },

          // 2. Habilitamos el scroll horizontal.
          overflowX: { xs: "scroll", sm: "visible" },

          // 3. Mejoramos la experiencia táctil (funciona en iOS y Android/Chrome).
          WebkitOverflowScrolling: "touch",
          overflowScrolling: "touch", // Propiedad estándar (añadida por si acaso)

          // 4. Espacio compacto en móvil, espaciado normal en desktop.
          gap: { xs: 0.5, sm: 2 },
          paddingBottom: { xs: 1, sm: 0 },

          width: "100%",
          maxWidth: "100%",
          minWidth: 0,

          // 5. Grid dinámico para tablet/desktop.
          gridTemplateColumns: {
            sm: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
          },
        }}
      >
        {topProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              // 6. En móvil (xs), definimos el ancho de la tarjeta para el scroll (80% para ver la siguiente).
              flex: { xs: "0 0 80%", sm: "none" },
              minWidth: 0
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};