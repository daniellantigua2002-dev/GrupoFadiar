


// import { Box, Typography, useTheme } from "@mui/material";
// import { useNavigate } from 'react-router-dom'; 

// import RepartidorImage from "../assets/img/repartidor.webp";
// import { StatsCards, AppDownloadSection, GridRecientes } from "./components";
// import { useInventoryProducts } from "../hooks/useInventoryProducts";
// import { motion } from "framer-motion";

// export const AboutPage = () => {
//     const theme = useTheme();
//     const navigate = useNavigate(); 

//     const { data: productsInventory, isLoading, isError } = useInventoryProducts();
//     const products = productsInventory?.products || [];

//     const longText =
//         "Sit amet consectetur. At tristique est adipiscing pellentesque vel sit id at. Malesuada congue bibendum pretium faucibus orci sit urna. Turpis mattis tortor eget egestas diam natoque ultrices ornare lectus.";

//     const finalSentence = "Para más información consulte el siguiente sitio web: ";
//     const link = "www.fadiar.com";

//     const fullText =
//         `Grupo Fadiar ${longText} ${longText}\n\n` +
//         `${longText} ${longText}\n\n` +
//         `${longText} ${longText} ${longText}\n\n` +
//         finalSentence;

//     return (
//         <>
//             <Box
//                 sx={{
//                     // ⬅️ AJUSTE AQUÍ: Reducido de 'md: 5' a 'md: 3'
//                     p: { xs: 2, md: 0 }, 
//                     maxWidth: "1200px",
//                     margin: "auto",
//                 }}
//             >
//                 {/* RUTA (Breadcrumb) con useNavigate */}
//                 <Typography variant="caption" sx={{ color: "grey" }}>

//                     <Typography 
//                         component="span" 
//                         onClick={() => navigate('/')}
//                         variant="caption"
//                         sx={{ 
//                             color: "grey", 
//                             cursor: 'pointer',
//                             fontWeight: 400,
//                             '&:hover': { color: theme.palette.primary.main }
//                         }}
//                     >
//                         Home
//                     </Typography>
//                     {' > '}

//                     <Typography
//                         component="span"
//                         sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
//                         variant="caption"
//                     >
//                         About Us
//                     </Typography>
//                 </Typography>

//                 <Typography
//                     variant="h5"
//                     component="h1"
//                     sx={{
//                         mt: 1,
//                         mb: 4,
//                         fontWeight: 700,
//                         color: theme.palette.primary.main,
//                     }}
//                 >
//                     About Us
//                 </Typography>


//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexDirection: { xs: "column", sm: "row" },
//                         gap: 4,
//                         alignItems: "flex-start",
//                     }}
//                 >

//                     {/* TEXTO IZQUIERDA (70% de ancho) */}
//                     <Box
//                         sx={{
//                             flexGrow: 1,
//                             minWidth: { sm: "70%" },
//                             position: "relative",
//                         }}
//                     >
//                         <Typography
//                             variant="body1"
//                             sx={{ 
//                                 whiteSpace: "pre-line", 
//                                 lineHeight: 1.6,
//                                 fontWeight: 500, 
//                                 textAlign: 'justify' 
//                             }}
//                         >
//                             {fullText.split("\n").map((line, i) => (
//                                 <span key={i}>
//                                     {line}
//                                     <br />
//                                 </span>
//                             ))}
//                             <span style={{ color: "orange", fontWeight: 700 }}>
//                                 {link}
//                             </span>
//                         </Typography>
//                     </Box>

//                     {/* IMAGEN DERECHA ANIMADA (25% de ancho) */}
//                     <Box
//                         sx={{
//                             flexShrink: 0,
//                             width: { xs: "100%", sm: "30%" },
//                             maxWidth: { xs: "100%", sm: "600px" },
//                         }}
//                     >
//                         <Box
//                             component={motion.img}
//                             initial={{ opacity: 0, x: 80 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             sx={{
//                                 width: "100%",
//                                 height: { xs: 300, sm: 420, md: 420 },
//                                 objectFit: "cover",
//                                 borderRadius: 1,
//                                 boxShadow: 3,
//                                 display: "block",
//                             }}
//                             alt="Imagen representativa de la compañía: repartidor con un paquete."
//                             src={RepartidorImage}
//                         />
//                     </Box>
//                 </Box>

//                 {/* StatsCards */}
//                 <Box sx={{ mt: 6 }}>
//                     <StatsCards />
//                 </Box>

//                 {/* AppDownload */}
//                 <Box sx={{ mt: 6 }}>
//                     <AppDownloadSection />
//                 </Box>
//             </Box>

//             <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
//                 <GridRecientes products={products} />
//             </Box>
//         </>
//     );
// };


import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import RepartidorImage from "../assets/img/repartidor.webp";
import { StatsCards, AppDownloadSection, GridRecientes } from "./components";
import { useInventoryProducts } from "../hooks/useInventoryProducts";
import { motion } from "framer-motion";

export const AboutPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
      <Box
        sx={{
          p: { xs: 2, md: 0 },
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* RUTA (Breadcrumb) SIN funcionalidad de navegación en "Home" */}
        <Typography variant="caption" sx={{ color: "grey" }}>

          {/* ⬅️ Reemplazamos el componente Typography clickeable por un texto estático */}
          <Typography
            component="span"
            variant="caption"
            sx={{
              color: "grey",
              fontWeight: 400,
            }}
          >
            Home
          </Typography>
          {' > '}

          <Typography
            component="span"
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
            variant="caption"
          >
            About Us
          </Typography>
        </Typography>

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


        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
            alignItems: "flex-start",
          }}
        >

          {/* TEXTO IZQUIERDA (70% de ancho) */}
          <Box
            sx={{
              flexGrow: 1,
              minWidth: { sm: "70%" },
              position: "relative",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.6,
                fontWeight: 500,
                textAlign: 'justify'
              }}
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

          {/* IMAGEN DERECHA ANIMADA (30% de ancho) */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", sm: "30%" },
              maxWidth: { xs: "100%", sm: "600px" },
            }}
          >
            <Box
              component={motion.img}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                width: "100%",
                height: { xs: 300, sm: 420, md: 420 },
                objectFit: "cover",
                borderRadius: 1,
                boxShadow: 3,
                display: "block",
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