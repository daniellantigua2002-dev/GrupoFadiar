


import { Box, Typography, Button, useTheme } from "@mui/material";
import DownloadImage from '../../assets/img/movil.png'; 
import DownloadIcon from '@mui/icons-material/Download'; // <- Importamos el icono

export const AppDownloadSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                p: { xs: 2, md: 5 },
                maxWidth: 1200,
                margin: 'auto',
            }}
        >
            {/* IMAGEN DEL MÓVIL */}
            <Box
                sx={{
                    flexShrink: 0,
                    width: { xs: '80%', sm: '40%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src={DownloadImage}
                    alt="Imagen del móvil"
                    sx={{
                        width: '100%',
                        maxWidth: 320, // imagen un poco más pequeña
                        height: 'auto',
                    }}
                />
            </Box>

            {/* TEXTO Y BOTÓN */}
            <Box
                sx={{
                    flexGrow: 1,
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    sx={{ color: '#555', fontSize: '1.2rem', mb: 1 }} // un poco más grande
                >
                    Al alcance de su mano
                </Typography>
                <Typography 
                    variant="h5" 
                    component="h2" 
                    sx={{ fontWeight: 700, mb: 2, fontSize: '2rem', color: theme.palette.primary.main }} // letras más grandes
                >
                    Descargue nuestra App{' '}
                    <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                        Grupo Fadiar
                    </Box>
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.primary.main }}> {/* lorem en azul */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />} // <- Icono de Material UI
                    sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                    Descargar
                </Button>
            </Box>
        </Box>
    );
};
