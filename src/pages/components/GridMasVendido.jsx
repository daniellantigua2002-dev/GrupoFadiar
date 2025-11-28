


import { Box, Typography, useTheme } from "@mui/material";
import { ProductCard } from "./";

export const GridMasVendido = ({ products = [] }) => {
  const theme = useTheme();


  const topProducts = products.slice(-5);

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
        {topProducts.map((product) => (
          <Box key={product.id} sx={{ minWidth: 0 }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
