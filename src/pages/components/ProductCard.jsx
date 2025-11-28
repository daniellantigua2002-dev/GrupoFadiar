
import { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCounter } from "../../hooks/useCounter";
import { useTheme } from "@mui/material/styles";
import { ModalCard } from "./ModalCard";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter({ state: 1 });
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const handleConfirm = () => { handleReset(); setOpen(false); };

    const imageUrl = product.img
        ? `https://app.fadiar.com:444/prueba/api/${product.img}`
        : "/no-image.png";

    return (
        <>
            <Card
                onClick={() => navigate(`/productos/${product.id}`)}
                sx={{
                    width: "100%", // ahora ocupa 100% del grid item
                    maxWidth: 220, // ancho máximo en escritorio
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "flex",
                    mt: 0,
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "transform .2s",
                    "&:hover": { transform: "scale(1.03)" },
                    height: 360,
                }}
            >
                {/* Contenedor de la imagen */}
                <Box
                    sx={{
                        width: "100%",
                        height: 160,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f4f4f4",
                        borderRadius: 1,
                    }}
                >
                    <Box
                        component="img"
                        src={imageUrl}
                        alt={product.name}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                </Box>

                {/* Contenido del producto */}
                <CardContent sx={{ p: 1, flexGrow: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600} noWrap>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                        Modelo: {product.model}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                        Marca: {product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Garantía: {product.warranty} días
                    </Typography>

                    {product.temporal_price ? (
                        <>
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: "line-through", color: theme.palette.text.primary }}
                            >
                                ${product.price.toFixed(2)} USD
                            </Typography>
                            <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>
                                ${product.temporal_price.toFixed(2)} USD
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>
                            ${product.price.toFixed(2)} USD
                        </Typography>
                    )}
                </CardContent>

                {/* Contador y carrito */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 1, pb: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton onClick={(e) => { e.stopPropagation(); handleDecrement(); }} size="small" sx={{ background: "white", border: "1px solid #ccc" }}>
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography fontWeight={600}>{counter}</Typography>
                        <IconButton onClick={(e) => { e.stopPropagation(); handleIncrement(); }} size="small" sx={{ background: "white", border: "1px solid #ccc" }}>
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <IconButton onClick={(e) => { e.stopPropagation(); handleOpenModal(); }} sx={{ background: theme.palette.primary.main, color: "white", p: 1.2, borderRadius: 2, "&:hover": { background: theme.palette.primary.dark } }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Card>

            {/* Modal */}
            <ModalCard
                open={open}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
                product={product}
                counter={counter}
            />
        </>
    );
};



