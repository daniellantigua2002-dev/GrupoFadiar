// // src/components/PaymentInfoBanner.jsx
// import { Box, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";

// // 🚨 Importa la imagen de dólares desde la ruta especificada
// import fotoDolares from "../../assets/img/dolares.png"; // Verifica la ruta

// export const PaymentInfoBanner = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", sm: "row" },
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: theme.palette.primary.main, // Fondo azul oscuro
//         color: "white",
//         // ❌ ELIMINAMOS borderRadius
//         boxShadow: 3,
//         overflow: "hidden", 
//         my: 4, 
//         px: 2, 
//         py: { xs: 3, sm: 2 }, 
//       }}
//     >
//       {/* Sección del texto */}
//       <Box 
//         sx={{ 
//           // 💡 REDUCIMOS el flexGrow para que el texto ocupe menos espacio
//           flexGrow: 0, 
//           width: { xs: "100%", sm: "60%" }, // Le damos el 60% al texto en desktop
//           textAlign: { xs: "center", sm: "left" }, 
//           mb: { xs: 2, sm: 0 }, 
//           pr: { xs: 0, sm: 2 } 
//         }}
//       >
//         <Typography 
//           variant="h5" 
//           component="h2" 
//           fontWeight={700} 
//           sx={{ 
//             // 🎨 COLOR NARANJA/DORADO DEL TEMA SECUNDARIO
//             color: theme.palette.secondary.main, 
//             fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }
//           }}
//           ml={10}
//         >
//           Pague de forma Segura
//         </Typography>
//         <Typography 
//           variant="h6" 
//           component="p" 
//           fontWeight={500} 
//           sx={{ 
//             color: 'white', 
//             fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' },
//             mt: 0.5
//           }}
//             ml={10}
//         >
//           Presencial y en efectivo
//         </Typography>
//       </Box>

//       {/* Sección de la imagen */}
//       <Box
//         sx={{
//           flexShrink: 0, 
//           // 💡 AUMENTAMOS el ancho de la imagen al 40% en desktop
//           width: { xs: "100%", sm: "50%" }, 
//           maxWidth: { xs: "300px", sm: "none" }, 
//           height: { xs: "auto", sm: "200px" }, 
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Box
//           component="img"
//           src={fotoDolares}
//           alt="Pague en Efectivo"
//           sx={{
//             width: "100%",
//             height: "100%",
//             objectFit: "contain", 
//             // ❌ ELIMINAMOS borderRadius aquí también
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// src/components/PaymentInfoBanner.jsx
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Importa la imagen de dólares
import fotoDolares from "../../assets/img/dolares.png"; 

export const PaymentInfoBanner = () => {
    const theme = useTheme();
    
    // El color secundario del tema para el color dorado/naranja
    const accentColor = theme.palette.secondary.main; 
    // El color primario del tema para el fondo azul
    const backgroundColor = theme.palette.primary.main; 

    return (
        <Box
            sx={{
                // ❌ ELIMINAMOS 'width: "100%"' para que se ajuste al contenedor padre.
                // Si el contenedor padre ya tiene un ancho, esto lo respeta.
                // Si necesitas un margen, añádelo con 'mx: "auto"'.
                backgroundColor: backgroundColor, // Fondo azul oscuro del tema
                color: "white",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: 3,

                // Padding seguro sin desbordar
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 3, md: 2 }, 

                mt: 4,
                mb: 4,
                // Garantizamos que el mínimo ancho sea 100% solo si es necesario,
                // pero **manteniendo el 'overflow: hidden'** para el banner.
                minHeight: { xs: 180, sm: 200 }, 
                position: "relative",
                overflow: "hidden", // ¡Clave para contener las formas!
            }}
        >

            {/* SECCIÓN DEL TEXTO */}
            <Box 
                sx={{ 
                    zIndex: 2, 
                    // Aseguramos que el texto no empuje demasiado la imagen
                    width: { xs: "100%", md: "55%" }, 
                    textAlign: { xs: "center", md: "left" },
                    pr: { xs: 0, md: 4 }
                }}
            >
                {/* Título Principal (Color Dorado/Naranja) */}
                <Typography
                    sx={{
                        fontSize: { xs: "2.2rem", sm: "2.5rem" },
                        fontWeight: "bold",
                        color: accentColor, 
                        lineHeight: 1.1,
                    }}
                    component="h2"
                >
                    Pague de forma Segura
                </Typography>

                {/* Subtítulo (Color Blanco) */}
                <Typography
                    sx={{
                        fontSize: { xs: "1.6rem", sm: "1.8rem" },
                        fontWeight: "bold",
                        mt: 0.3,
                    }}
                    component="p"
                >
                    Presencial y en efectivo
                </Typography>
            </Box>

            {/* SECCIÓN DE LA IMAGEN DE DÓLARES */}
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "45%" }, 
                    display: "flex",
                    justifyContent: "flex-end", 
                    alignItems: "center",
                    mt: { xs: 2, md: 0 },
                }}
            >
                <img
                    src={fotoDolares} 
                    alt="Pague en Efectivo"
                    style={{
                        // 🔥 CORRECCIÓN: Usamos un 'maxWidth' en la imagen 
                        // para que no exceda el espacio asignado por el Box padre (45%).
                        width: "100%", 
                        maxWidth: "350px", // Limita el tamaño de la imagen en desktop
                        objectFit: "contain",
                        zIndex: 3,
                        transform: "translateX(0)", 
                    }}
                />
            </Box>

            {/* FONDO AMARILLO GEOMÉTRICO */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "30%", 
                    backgroundColor: accentColor, 
                    zIndex: 1,
                    // 🔥 CORRECCIÓN: Ajustamos el clipPath para evitar que los puntos
                    // cercanos al 100% causen desbordamiento en el borde derecho.
                    clipPath: "polygon(0 40%, 40% 0, 100% 40%, 100% 100%, 0 100%)",
                }}
            />
        </Box>
    );
};