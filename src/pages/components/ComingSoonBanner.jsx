
// import { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";

// import motoIMG from "../../assets/img/moto.png";

// export const ComingSoonBanner = () => {
//     const targetDate = new Date("2025-12-31T00:00:00");

//     const [timeLeft, setTimeLeft] = useState({
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const now = new Date();
//             const distance = targetDate - now;

//             if (distance <= 0) {
//                 clearInterval(interval);
//                 return;
//             }

//             setTimeLeft({
//                 days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
//                 minutes: Math.floor((distance / (1000 * 60)) % 60),
//                 seconds: Math.floor((distance / 1000) % 60),
//             });
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <Box
//             sx={{
//                 width: "92.6%",
//                 backgroundColor: "#022954",
//                 color: "white",
//                 display: "flex",
//                 flexDirection: { xs: "column", md: "row" },
//                 alignItems: "center",
//                 justifyContent: "space-between",

//                 /* 🔥 padding seguro sin desbordar */
//                 px: { xs: 2, sm: 3, md: 6 },
//                 py: { xs: 1.5, md: 2 },

//                 mt: 2,
//                 mb: 2,

//                 minHeight: { xs: 220, sm: 280 },
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >

//             {/* TEXTO */}
//             <Box sx={{ zIndex: 2 }}>
//                 <Typography
//                     sx={{
//                         fontSize: { xs: "2.4rem", sm: "2.7rem" },
//                         fontWeight: "bold",
//                         color: "#D4A017",
//                         lineHeight: 1,
//                     }}
//                 >
//                     Próximamente
//                 </Typography>

//                 <Typography
//                     sx={{
//                         fontSize: { xs: "2rem", sm: "2.2rem" },
//                         fontWeight: "bold",
//                         mt: 0.3,
//                     }}
//                 >
//                     en nuestra Tienda
//                 </Typography>

//                 {/* CONTADOR */}
//                 <Box
//                     sx={{
//                         mt: 1.5,
//                         display: "flex",
//                         gap: 1,
//                         flexWrap: "wrap",
//                     }}
//                 >
//                     {[
//                         { label: "días", value: timeLeft.days },
//                         { label: "horas", value: timeLeft.hours },
//                         { label: "minutos", value: timeLeft.minutes },
//                         { label: "segundos", value: timeLeft.seconds },
//                     ].map((item, index) => (
//                         <Box
//                             key={index}
//                             sx={{
//                                 backgroundColor: "#001328",
//                                 borderRadius: 1,
//                                 padding: "6px 10px",
//                                 minWidth: 50,
//                                 textAlign: "center",
//                             }}
//                         >
//                             <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
//                                 {String(item.value).padStart(2, "0")}
//                             </Typography>
//                             <Typography sx={{ fontSize: "0.7rem", color: "#c5c5c5" }}>
//                                 {item.label}
//                             </Typography>
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>

//             <Box
//                 sx={{
//                     position: "relative",
//                     width: { xs: "100%", md: "45%" },
//                     display: "flex",
//                     justifyContent: "center",
//                     mt: { xs: 2, md: 0 },
//                 }}
//             >
//                 <img
//                     src={motoIMG}
//                     alt="Moto principal"
//                     style={{
//                         width: "100%",           // 🔥 antes 120%
//                         maxWidth: 900,           // 🔥 controla tamaño sin romper contenedor
//                         objectFit: "contain",
//                         zIndex: 3,
//                         transform: "translateX(-5%)", // 🔥 antes -15%
//                     }}
//                 />
//             </Box>

//             {/* FONDO AMARILLO */}
//             <Box
//                 sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "18%",
//                     backgroundColor: "#D4A017",
//                     zIndex: 1,
//                     clipPath: "polygon(0 70%, 60% 0, 100% 70%, 100% 100%, 0 100%)",
//                 }}
//             />
//         </Box>
//     );
// };
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import motoIMG from "../../assets/img/moto.png";

/**
 * Componente de banner de "Próximamente" con contador de tiempo.
 * @param {object} props
 * @param {string} props.targetDateString - Fecha y hora objetivo en formato de cadena (ej: "2025-12-31T00:00:00").
 */
export const ComingSoonBanner = ({ targetDateString }) => {
    // Convierte la cadena de la prop a un objeto Date una sola vez.
    const targetDate = new Date(targetDateString);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (isNaN(targetDate)) {
            console.error("targetDateString no es una fecha válida.");
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate.getTime() - now.getTime();

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDateString]);

    // Función auxiliar para renderizar la caja del contador
    const CountdownBox = ({ value, label }) => (
        <Box
            sx={{
                backgroundColor: "#001328",
                borderRadius: 1,
                padding: "6px 10px",
                minWidth: 50,
                textAlign: "center",
            }}
        >
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                {String(value).padStart(2, "0")}
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: "#c5c5c5" }}>
                {label}
            </Typography>
        </Box>
    );

    return (
        <Box
            sx={{
                // ⬅️ AJUSTE 1: Cambiado a 100% para ocupar todo el ancho del contenedor.
                width: "100%",
                backgroundColor: "#022954",
                color: "white",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",

                // ⬅️ AJUSTE 2: MinHeight ajustado para coincidir con el Banner
                minHeight: { xs: 220, sm: 280 },

                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 1.5, md: 2 },
                mt: 2,
                mb: 2,
                position: "relative",
                overflow: "hidden",
            }}
        >

            {/* TEXTO */}
            <Box sx={{ zIndex: 2 }}>
                <Typography
                    sx={{
                        fontSize: { xs: "2.4rem", sm: "2.7rem" },
                        fontWeight: "bold",
                        color: "#D4A017",
                        lineHeight: 1,
                    }}
                >
                    Próximamente
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "2rem", sm: "2.2rem" },
                        fontWeight: "bold",
                        mt: 0.3,
                    }}
                >
                    en nuestra Tienda
                </Typography>

                {/* CONTADOR */}
                <Box
                    sx={{
                        mt: 1.5,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { label: "días", value: timeLeft.days },
                        { label: "horas", value: timeLeft.hours },
                        { label: "minutos", value: timeLeft.minutes },
                        { label: "segundos", value: timeLeft.seconds },
                    ].map((item, index) => (
                        <CountdownBox key={index} value={item.value} label={item.label} />
                    ))}
                </Box>
            </Box>

            {/* IMAGEN DE MOTO */}
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "45%" },
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 2, md: 0 },
                }}
            >
                <img
                    src={motoIMG}
                    alt="Moto principal"
                    style={{
                        width: "100%",
                        maxWidth: 900,
                        objectFit: "contain",
                        zIndex: 3,
                        transform: "translateX(-5%)",
                    }}
                />
            </Box>

            {/* FONDO AMARILLO */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "18%",
                    backgroundColor: "#D4A017",
                    zIndex: 1,
                    clipPath: "polygon(0 70%, 60% 0, 100% 70%, 100% 100%, 0 100%)",
                }}
            />
        </Box>
    );
};