import {
    Box,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export const RegisterPage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                px: 2,
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 420,
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        fontWeight={600}
                        mb={3}
                        color="text.primary"
                    >
                        Crear cuenta
                    </Typography>

                    {/* Nombre */}
                    <Box sx={{ mb: 2 }}>
                        <PersonIcon sx={{ color: "gray", mr: 1, verticalAlign: "middle" }} />
                        <Typography component="span" color="text.secondary">
                            Nombre
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            sx={{ mt: 1 }}
                            placeholder="Ingresa tu nombre"
                        />
                    </Box>

                    {/* Apellido */}
                    <Box sx={{ mb: 2 }}>
                        <PersonIcon sx={{ color: "gray", mr: 1, verticalAlign: "middle" }} />
                        <Typography component="span" color="text.secondary">
                            Primer apellido
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            sx={{ mt: 1 }}
                            placeholder="Ingresa tu apellido"
                        />
                    </Box>

                    {/* Segundo apellido */}
                    <Box sx={{ mb: 2 }}>
                        <PersonIcon sx={{ color: "gray", mr: 1, verticalAlign: "middle" }} />
                        <Typography component="span" color="text.secondary">
                            Segundo apellido
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            sx={{ mt: 1 }}
                            placeholder="Ingresa tu segundo apellido"
                        />
                    </Box>

                    {/* Correo */}
                    <Box sx={{ mb: 3 }}>
                        <EmailIcon sx={{ color: "gray", mr: 1, verticalAlign: "middle" }} />
                        <Typography component="span" color="text.secondary">
                            Correo electrónico
                        </Typography>
                        <TextField
                            fullWidth
                            type="email"
                            size="small"
                            sx={{ mt: 1 }}
                            placeholder="Ingresa tu correo"
                        />
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 1,
                            py: 1.3,
                            fontWeight: "bold",
                            borderRadius: 2,
                            backgroundColor: "#022954",
                            ":hover": { backgroundColor: "#011d3d" },
                        }}
                    >
                        Registrarse
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};
