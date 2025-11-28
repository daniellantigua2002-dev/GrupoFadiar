
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#022954',
            contrastText: '#fff',
        },
        secondary: {
            main: '#D69F04',
            contrastText: '#fff',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#022954',
            secondary: '#D69F04',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontWeight: 600,
        },
        body2: {
            fontSize: '0.95rem',
        },
    },
});

export default theme;
