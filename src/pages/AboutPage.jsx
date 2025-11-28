
import { Box, Typography, useTheme } from "@mui/material";
import RepartidorImage from "../assets/img/repartidor.webp";
import { StatsCards, AppDownloadSection, GridRecientes } from "./components";
import { useInventoryProducts } from "../hooks/useInventoryProducts";

export const AboutPage = () => {
  const theme = useTheme();
  const { data: productsInventory, isLoading, isError } = useInventoryProducts();
  const products = productsInventory?.products || [];

  const longText =
    "Sit amet consectetur. At tristique est adipiscing pellentesque vel sit id at. Malesuada congue bibendum pretium faucibus orci sit urna. Turpis mattis tortor eget egestas diam natoque ultrices ornare lectus.";

  const finalSentence = "Para más información consulte el siguiente sitio web: ";
  const link = "www.fadiar.com";

  const fullText =
    `Grupo Fadiar ${longText} ${longText}\n\n` +
    `${longText} ${longText}\n\n` +
    `${longText} ${longText} ${longText}\n\n` +
    finalSentence;

  return (
    <>
      {/* 🔵 CONTENEDOR PRINCIPAL */}
      <Box
        sx={{
          p: { xs: 2, md: 5 },
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Breadcrumb */}
        <Typography variant="caption" sx={{ color: "grey" }}>
          Home &gt;{" "}
          <Typography
            component="span"
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            About Us
          </Typography>
        </Typography>

        {/* Título */}
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mt: 1,
            mb: 4,
            fontWeight: 700,
            color: theme.palette.primary.main,
          }}
        >
          About Us
        </Typography>

        {/* Contenido */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* TEXTO IZQUIERDA */}
          <Box
            sx={{
              flexGrow: 1,
              minWidth: { sm: "60%" },
              position: "relative",
            }}
          >
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
            >
              {fullText.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span style={{ color: "orange", fontWeight: 700 }}>
                {link}
              </span>
            </Typography>
          </Box>

          {/* IMAGEN DERECHA */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", sm: "35%" },
              maxWidth: { xs: "100%", sm: "600px" },
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: { xs: 300, sm: 420, md: 420 },
                objectFit: "cover",
                borderRadius: 1,
                boxShadow: 3,
              }}
              alt="Imagen representativa de la compañía: repartidor con un paquete."
              src={RepartidorImage}
            />
          </Box>
        </Box>

        {/* StatsCards */}
        <Box sx={{ mt: 6 }}>
          <StatsCards />
        </Box>

        {/* AppDownload */}
        <Box sx={{ mt: 6 }}>
          <AppDownloadSection />
        </Box>
      </Box>

      <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
        <GridRecientes products={products} />
      </Box>


      
    </>
  );
};
