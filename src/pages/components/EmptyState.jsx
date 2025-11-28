import { Box, Typography } from "@mui/material";

export const EmptyState = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={6}
            sx={{
                textAlign: "center",
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#f8f9fb",
                width: "100%",
                animation: "fadeIn 0.3s ease-out",
                "@keyframes fadeIn": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            }}
        >
            <Typography variant="h6" color="text.primary" fontWeight="bold">
                Producto no encontrado
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
                Intenta buscar con otro término.
            </Typography>
        </Box>
    );
};
