// // MobileMenuDrawer.jsx
// import React from 'react';
// import {
//     Modal,
//     Box,
//     IconButton,
//     Divider,
//     MenuItem,
//     useTheme
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/log/logo.webp'; // Asegúrate de que la ruta sea correcta

// /**
//  * Componente de Modal para el menú de navegación en dispositivos móviles (sin fondo oscuro).
//  * @param {object} props
//  * @param {boolean} props.open - Estado de visibilidad del modal.
//  * @param {function} props.onClose - Función para cerrar el modal.
//  * @param {object} props.linkRoutes - Objeto con las rutas de navegación.
//  * @param {string} props.activeLink - Enlace actualmente activo.
//  * @param {function} props.setActiveLink - Función para establecer el enlace activo.
//  */
// export const MobileMenuDrawer = ({ open, onClose, linkRoutes, activeLink, setActiveLink }) => {
//     const theme = useTheme();
//     const navigate = useNavigate();

//     const handleLinkClick = (link) => {
//         setActiveLink(link);
//         onClose(); // Llama a la función de cerrar pasada desde el padre
//         navigate(linkRoutes[link]);
//     };

//     return (
//         <Modal
//             open={open}
//             onClose={onClose}
//             hideBackdrop // Oculta el fondo gris/oscuro
//         >
//             <Box
//                 sx={{
//                     // Estilos que simulan el menú lateral/popover
//                     position: 'absolute',
//                     top: '2%',
//                     left: '2%',
//                     width: '65%',
//                     bgcolor: 'background.paper',
//                     boxShadow: 24,
//                     borderRadius: 2,
//                 }}
//             >
//                 {/* CABECERA (LOGO y BOTÓN de CIERRE) */}
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
//                     <img src={logo} alt="Logo Grupo Fadiar" style={{ height: 55 }} />
//                     <IconButton onClick={onClose}>
//                         <CloseIcon sx={{ color: 'black' }} />
//                     </IconButton>
//                 </Box>

//                 <Divider sx={{ mx: 2 }} />

//                 {/* ENLACES DE NAVEGACIÓN */}
//                 <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1, p: 2 }}>
//                     {Object.keys(linkRoutes).map((link) => (
//                         <MenuItem
//                             key={link}
//                             onClick={() => handleLinkClick(link)}
//                             sx={{
//                                 fontSize: '0.9rem',
//                                 color: activeLink === link ? theme.palette.primary.main : 'black',
//                                 fontWeight: activeLink === link ? 'bold' : 'normal',
//                                 '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.main },
//                                 '&:focus': { backgroundColor: 'transparent', color: theme.palette.primary.main },
//                             }}
//                         >
//                             {link}
//                         </MenuItem>
//                     ))}
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };


// MobileMenuDrawer.jsx
import React from 'react';
import {
    Modal,
    Box,
    IconButton,
    Divider,
    MenuItem,
    useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
// Asegúrate de que la ruta del logo sea correcta
import logo from '../assets/log/logo.webp'; 

/**
 * Componente de Modal para el menú de navegación en dispositivos móviles.
 * Usa hideBackdrop y disableScrollLock para evitar el fondo oscuro y el desplazamiento.
 * * @param {object} props
 * @param {boolean} props.open - Estado de visibilidad del modal.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @param {object} props.linkRoutes - Objeto con las rutas de navegación.
 * @param {string} props.activeLink - Enlace actualmente activo.
 * @param {function} props.setActiveLink - Función para establecer el enlace activo.
 */
export const MobileMenuDrawer = ({ open, onClose, linkRoutes, activeLink, setActiveLink }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link);
        onClose(); 
        navigate(linkRoutes[link]);
    };

    return (
        <Modal 
            open={open} 
            onClose={onClose}
            hideBackdrop // ⬅️ Evita el fondo oscuro
            disableScrollLock // ⬅️ SOLUCIÓN: Evita el desplazamiento de la página al abrir
        >
            <Box 
                sx={{ 
                    // Estilos para simular el menú lateral/popover
                    position: 'absolute', 
                    top: '2%', 
                    left: '2%', 
                    width: '65%', 
                    bgcolor: 'background.paper', 
                    boxShadow: 24, 
                    borderRadius: 2,
                }}
            >
                {/* CABECERA (LOGO y BOTÓN de CIERRE) */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
                    <img src={logo} alt="Logo Grupo Fadiar" style={{ height: 55 }} />
                    <IconButton onClick={onClose}>
                        <CloseIcon sx={{ color: 'black' }} />
                    </IconButton>
                </Box>

                <Divider sx={{ mx: 2 }} />

                {/* ENLACES DE NAVEGACIÓN */}
                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1, p: 2 }}>
                    {Object.keys(linkRoutes).map((link) => (
                        <MenuItem
                            key={link}
                            onClick={() => handleLinkClick(link)}
                            sx={{
                                fontSize: '0.9rem',
                                color: activeLink === link ? theme.palette.primary.main : 'black',
                                fontWeight: activeLink === link ? 'bold' : 'normal',
                                '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.main },
                                '&:focus': { backgroundColor: 'transparent', color: theme.palette.primary.main },
                            }}
                        >
                            {link}
                        </MenuItem>
                    ))}
                </Box>
            </Box>
        </Modal>
    );
};