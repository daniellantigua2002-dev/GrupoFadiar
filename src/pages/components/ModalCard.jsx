


import { useContext, useState } from "react";
import {
    Box,
    Modal,
    Fade,
    Backdrop,
    Typography,
    Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CartContext } from "../../contexts";
import { CustomSnackbar } from "./";

export const ModalCard = ({ open, onClose, onConfirm, product, counter }) => {
    const theme = useTheme();
    const [openSnack, setOpenSnack] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleConfirm = () => {
        onConfirm();
        setOpenSnack(true);
        addToCart(counter ? counter : 1);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnack(false);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 300 } }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 3,
                            width: 320,
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="h6" fontWeight={700} mb={1}>
                            ¿Estás seguro?
                        </Typography>

                        <Typography variant="body1" mb={2}>
                            Agregar <strong>{product?.name}</strong> al carrito.
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: theme.palette.primary.main }}
                            mb={3}
                        >
                            Cantidad seleccionada: <strong>{counter != 0 ? counter : 1}</strong>
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "green",
                                    color: "white",
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    '&:hover': { backgroundColor: '#127012ff' },
                                }}
                                onClick={handleConfirm}
                            >
                                Confirmar
                            </Button>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#D32F2F",
                                    color: "white",
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    '&:hover': { backgroundColor: '#B71C1C' },
                                }}
                                onClick={onClose}
                            >
                                Cancelar
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

           
            <CustomSnackbar
                open={openSnack}
                onClose={handleCloseSnack}
                message="Producto agregado al carrito"
            />
        </>
    );
};
