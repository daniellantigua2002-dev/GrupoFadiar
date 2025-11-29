// import {
//     Box,
//     Typography,
//     Avatar,
//     IconButton,
//     TextField,
//     Grid,
//     Divider,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Autorenew";
// import { useState } from "react";
// import { AppDownloadSection } from "./components";

// export const ProfilePage = () => {
//     const [phoneError, setPhoneError] = useState(false);

//     return (
//         <>
//             <Box
//                 sx={{
//                     maxWidth: "1100px",
//                     mx: "auto",
//                     px: { xs: 2, md: 4 },
//                     py: 4,
//                 }}
//             >
//                 <Grid container spacing={4}>
//                     {/* AVATAR */}
//                     <Grid item xs={12} md={3}>
//                         <Typography
//                             variant="h6"
//                             sx={{ fontWeight: 700, color: "#0B2B50", mb: 2 }}
//                         >
//                             Avatar
//                         </Typography>

//                         <Box sx={{ position: "relative", width: 150, height: 150 }}>
//                             <Avatar
//                                 src="/avatar-woman.png" // 👉 pon aquí tu imagen
//                                 alt="Avatar"
//                                 sx={{
//                                     width: 150,
//                                     height: 150,
//                                     borderRadius: "50%",
//                                     objectFit: "cover",
//                                 }}
//                             />

//                             {/* BOTÓN FLOTANTE PARA CAMBIAR FOTO */}
//                             <IconButton
//                                 sx={{
//                                     position: "absolute",
//                                     bottom: 10,
//                                     right: 10,
//                                     backgroundColor: "#FDC300",
//                                     color: "white",
//                                     width: 38,
//                                     height: 38,
//                                     "&:hover": { backgroundColor: "#e0ac00" },
//                                 }}
//                             >
//                                 <EditIcon />
//                             </IconButton>
//                         </Box>
//                     </Grid>

//                     {/* FORMULARIOS */}
//                     <Grid item xs={12} md={9}>
//                         {/* DATOS PERSONALES */}
//                         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography
//                                 variant="h6"
//                                 sx={{ fontWeight: 700, color: "#0B2B50" }}
//                             >
//                                 Datos personales
//                             </Typography>

//                             <Typography
//                                 sx={{
//                                     color: "#FDC300",
//                                     fontWeight: 600,
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Guardar
//                             </Typography>
//                         </Box>

//                         <Grid container spacing={3} sx={{ mt: 1 }}>
//                             {/* Nombre */}
//                             <Grid item xs={12} md={6}>
//                                 <Typography>Nombre</Typography>
//                                 <TextField
//                                     fullWidth
//                                     placeholder="Nombre"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                 />
//                             </Grid>

//                             {/* Apellidos */}
//                             <Grid item xs={12} md={6}>
//                                 <Typography>Apellidos</Typography>
//                                 <TextField
//                                     fullWidth
//                                     placeholder="Apellidos"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                 />
//                             </Grid>

//                             {/* Teléfono */}
//                             <Grid item xs={12} md={6}>
//                                 <Typography>Teléfono</Typography>

//                                 <TextField
//                                     fullWidth
//                                     placeholder="Teléfono"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                     onBlur={(e) => setPhoneError(e.target.value.trim() === "")}
//                                 />

//                                 {phoneError && (
//                                     <Typography sx={{ color: "red", mt: 1, fontSize: 13 }}>
//                                         El campo teléfono es requerido
//                                     </Typography>
//                                 )}
//                             </Grid>

//                             {/* Correo */}
//                             <Grid item xs={12} md={6}>
//                                 <Typography>Correo Electrónico</Typography>
//                                 <TextField
//                                     fullWidth
//                                     placeholder="Correo"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                 />
//                             </Grid>
//                         </Grid>

//                         <Divider sx={{ my: 4 }} />

//                         {/* DIRECCIÓN */}
//                         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography
//                                 variant="h6"
//                                 sx={{ fontWeight: 700, color: "#0B2B50" }}
//                             >
//                                 Dirección
//                             </Typography>

//                             <Typography
//                                 sx={{
//                                     color: "#FDC300",
//                                     fontWeight: 600,
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Guardar
//                             </Typography>
//                         </Box>

//                         <Typography sx={{ mt: 2 }}>Dirección</Typography>
//                         <TextField
//                             fullWidth
//                             multiline
//                             minRows={3}
//                             placeholder="Escriba su dirección"
//                             sx={{
//                                 mt: 1,
//                                 background: "#F5F7FA",
//                                 borderRadius: 3,
//                             }}
//                         />

//                         <Divider sx={{ my: 4 }} />

//                         {/* CONTRASEÑA */}
//                         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography
//                                 variant="h6"
//                                 sx={{ fontWeight: 700, color: "#0B2B50" }}
//                             >
//                                 Contraseña
//                             </Typography>

//                             <Typography
//                                 sx={{
//                                     color: "#FDC300",
//                                     fontWeight: 600,
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Actualizar
//                             </Typography>
//                         </Box>

//                         <Grid container spacing={3} sx={{ mt: 1 }}>
//                             <Grid item xs={12} md={6}>
//                                 <Typography>Contraseña actual</Typography>
//                                 <TextField
//                                     fullWidth
//                                     type="password"
//                                     placeholder="Contraseña actual"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} md={6}>
//                                 <Typography>Nueva contraseña</Typography>
//                                 <TextField
//                                     fullWidth
//                                     type="password"
//                                     placeholder="Nueva contraseña"
//                                     sx={{
//                                         mt: 1,
//                                         background: "#F5F7FA",
//                                         borderRadius: 3,
//                                     }}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>

//             </Box>
//             <Box sx={{ mt: 6 }}>
//                 <AppDownloadSection />
//             </Box>
//         </>
//     );
// };



import {
    Box,
    Typography,
    Avatar,
    IconButton,
    TextField,
    Grid,
    Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Autorenew";
import { useState, useRef } from "react";
import { AppDownloadSection } from "./components";

export const ProfilePage = () => {
    const [phoneError, setPhoneError] = useState(false);
    const [avatar, setAvatar] = useState("/avatar-woman.png");

    // Referencia al input de archivo oculto
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const imgUrl = URL.createObjectURL(file);
        setAvatar(imgUrl);
    };

    return (
        <>
            <Box
                sx={{
                    maxWidth: "1100px",
                    mx: "auto",
                    px: { xs: 2, md: 4 },
                    py: 4,
                }}
            >
                <Grid container spacing={4}>
                    {/* AVATAR */}
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "#0B2B50", mb: 2 }}
                        >
                            Avatar
                        </Typography>

                        <Box sx={{ position: "relative", width: 150, height: 150 }}>
                            <Avatar
                                src={avatar}
                                alt="Avatar"
                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />

                            {/* BOTÓN FLOTANTE PARA CAMBIAR FOTO */}
                            <IconButton
                                onClick={() => fileInputRef.current.click()}
                                sx={{
                                    position: "absolute",
                                    bottom: 10,
                                    right: 10,
                                    backgroundColor: "#FDC300",
                                    color: "white",
                                    width: 38,
                                    height: 38,
                                    "&:hover": { backgroundColor: "#e0ac00" },
                                }}
                            >
                                <EditIcon />
                            </IconButton>

                            {/* INPUT OCULTO */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
                        </Box>
                    </Grid>

                    {/* FORMULARIOS */}
                    <Grid item xs={12} md={9}>
                        {/* DATOS PERSONALES */}
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "#0B2B50" }}
                            >
                                Datos personales
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#FDC300",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                Guardar
                            </Typography>
                        </Box>

                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            {/* Nombre */}
                            <Grid item xs={12} md={6}>
                                <Typography>Nombre</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Nombre"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>

                            {/* Apellidos */}
                            <Grid item xs={12} md={6}>
                                <Typography>Apellidos</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Apellidos"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>

                            {/* Teléfono */}
                            <Grid item xs={12} md={6}>
                                <Typography>Teléfono</Typography>

                                <TextField
                                    fullWidth
                                    placeholder="Teléfono"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                    onBlur={(e) => setPhoneError(e.target.value.trim() === "")}
                                />

                                {phoneError && (
                                    <Typography sx={{ color: "red", mt: 1, fontSize: 13 }}>
                                        El campo teléfono es requerido
                                    </Typography>
                                )}
                            </Grid>

                            {/* Correo */}
                            <Grid item xs={12} md={6}>
                                <Typography>Correo Electrónico</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Correo"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 4 }} />

                        {/* DIRECCIÓN */}
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "#0B2B50" }}
                            >
                                Dirección
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#FDC300",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                Guardar
                            </Typography>
                        </Box>

                        <Typography sx={{ mt: 2 }}>Dirección</Typography>
                        <TextField
                            fullWidth
                            multiline
                            minRows={3}
                            placeholder="Escriba su dirección"
                            sx={{
                                mt: 1,
                                background: "#F5F7FA",
                                borderRadius: 3,
                            }}
                        />

                        <Divider sx={{ my: 4 }} />

                        {/* CONTRASEÑA */}
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "#0B2B50" }}
                            >
                                Contraseña
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#FDC300",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                Actualizar
                            </Typography>
                        </Box>

                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            <Grid item xs={12} md={6}>
                                <Typography>Contraseña actual</Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="Contraseña actual"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography>Nueva contraseña</Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="Nueva contraseña"
                                    sx={{
                                        mt: 1,
                                        background: "#F5F7FA",
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mt: 6 }}>
                <AppDownloadSection />
            </Box>
        </>
    );
};
