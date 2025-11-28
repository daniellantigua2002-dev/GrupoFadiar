import { Snackbar, Alert, Slide, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const CustomSnackbar = ({ open, onClose, message }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
            <Alert
                onClose={onClose}
                severity="success"
                iconMapping={{
                    success: <CheckCircleIcon sx={{ color: '#0cd10cff' }} /> // palomita azul
                }}
                sx={{
                    width: isMobile ? '90%' : '400px',
                    maxWidth: '50vw',
                    borderRadius: 2,
                    backgroundColor: '#127012ff',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    fontWeight: 600
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
