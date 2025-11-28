import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingState = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
            <CircularProgress />
            <Typography variant="body1" mt={2}>
                Cargando...
            </Typography>
        </Box>
    );
};
