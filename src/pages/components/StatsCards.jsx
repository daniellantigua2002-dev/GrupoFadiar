// StatsCards.jsx
import { Box, Typography, useTheme } from "@mui/material";

const stats = [
    { number: "18.6k", text: "Lorem ipsum Sit amet consectetur. vel sit id at." },
    { number: "98%", text: "Lorem ipsum Sit amet consectetur. At tristique est adipiscing pellentesque vel sit id at." },
    { number: "234+", text: "Lorem ipsum Sit amet consectetur." },
    { number: "63.6k", text: "Lorem ipsum Sit amet consectetur. At pellentesque vel sit id at." },
];

export const StatsCards = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: 3,
                p: 2,
                maxWidth: 1200,
                margin: "auto",
                backgroundColor: theme.palette.grey[100], // gris claro para el contenedor
                borderRadius: 2,
            }}
        >
            {stats.map((stat, index) => (
                <Box
                    key={index}
                    sx={{
                        backgroundColor: theme.palette.grey[200], // gris más claro para las tarjetas
                        borderRadius: 2,
                        p: 3,
                        boxShadow: 3,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }} // azul para los números
                    >
                        {stat.number}
                    </Typography>
                    <Typography variant="body2" > 
                        {stat.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};
