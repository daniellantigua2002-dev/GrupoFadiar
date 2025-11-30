import { Box, Typography, useTheme } from "@mui/material";
import { ProductCard } from "./";

import { MIN_CARD_WIDTH } from '../../utils/breakpoints';

export const GridRecientes = ({ products = [] }) => {
  const theme = useTheme();


  const recentProducts = products.slice(0, 5);

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
          mb: 0.5,
          color: theme.palette.primary.main,
          textAlign: "left",
        }}
      >
        Más Recientes
      </Typography>

      <Typography
        variant="h6"
        fontWeight={700}
        sx={{
          mb: 3,
          color: theme.palette.secondary.main,
          textAlign: "left",
        }}
      >
        Últimos Productos
      </Typography>


      <Box
        sx={{

          display: { xs: "flex", sm: "grid" },


          overflowX: { xs: "scroll", sm: "visible" },
          WebkitOverflowScrolling: "touch",
          overflowScrolling: "touch",


          gap: { xs: 0, sm: 2 },
          paddingBottom: { xs: 1, sm: 0 },

          width: "100%",
          maxWidth: "100%",
          minWidth: 0,


          gridTemplateColumns: {
            sm: `repeat(auto-fit, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
          },
        }}
      >
        {recentProducts.map((product) => (
          <Box
            key={product.id}
            sx={{

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
