


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useInventoryProducts } from "../hooks/useInventoryProducts";
import { getProductById } from "../helpers/getProductById";

import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Divider,
  IconButton,
  useTheme
} from "@mui/material";

import { motion } from "framer-motion";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useCounter } from "../hooks/useCounter";
import { GridRecientes, GridRelacionados, ModalCard } from "./components";
import { getProductsByCategory } from "../helpers/getProductsByCategory";
import { PaymentInfoBanner } from "./components/PaymentInfoBanner";

export const ProductDetailPage = () => {

  // ⭐ Scroll SIEMPRE al inicio al cargar la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { productId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const { data: productsInventory, isError, isLoading } = useInventoryProducts();
  const { counter, handleIncrement, handleDecrement, handleReset } = useCounter({ state: 1 });
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh", mt: 5 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>Cargando detalles del producto...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ p: 3, mt: 5 }}>
        <Alert severity="error">Error al cargar los productos.</Alert>
      </Box>
    );
  }

  const products = productsInventory?.products || [];
  const product = getProductById(products, productId);

  const productIdCategory = product.categoria.id;

  const productsCategory = getProductsByCategory(products, productIdCategory, productId);
  const productsReciente = productsInventory?.products || [];

  if (!product) {
    return (
      <Box sx={{ p: 3, mt: 5 }}>
        <Alert severity="warning">Producto con ID {productId} no encontrado.</Alert>
      </Box>
    );
  }

  const imageUrl = product.img
    ? `https://app.fadiar.com:444/prueba/api/${product.img}`
    : "/no-image.png";

  const productTitle = product.name;
  const productBrand = product.brand;
  const categoryName = product.categoria?.name || "Sin categoría";
  const productDescription = product.description;
  const productWarranty = product.warranty ? `${product.warranty} días de garantía` : "";
  const productPrice = product.temporal_price || product.price;
  const productOldPrice = product.temporal_price ? product.price : null;

  return (
    <>
      <Box sx={{ p: { xs: 2, md: 5 } }}>

        <Typography variant="caption" color="grey" sx={{ mb: 1 }}>
          Home - Productos - {categoryName}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" color="text.primary" component="h1" sx={{ fontWeight: 700 }}>
            Detalles del producto
          </Typography>

          <IconButton
            onClick={() => navigate(-1)}
            sx={{ color: "red", fontSize: 32 }}
          >
            <ArrowBackIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* IMAGEN + INFO */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
          width: "100%",
        }}>

          {/* ⭐ IMAGEN CON ANIMACIÓN NOTORIA */}
          <Box sx={{
            flex: "0 0 45%",
            maxWidth: { md: "90%" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}>
            <motion.img
              src={imageUrl}
              alt={productTitle}
              style={{
                width: "100%",
                maxHeight: 600,
                objectFit: "contain",
                borderRadius: theme.shape.borderRadius,
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Box>

          {/* INFORMACIÓN */}
          <Box sx={{
            flex: "1",
            maxWidth: { md: "55%" },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "left",
          }}>
            <Typography variant="body2" color="grey">{categoryName}</Typography>
            <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>{productTitle}</Typography>
            <Typography variant="h6" color="text.primary">{productBrand}</Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>{productDescription}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>{productWarranty}</Typography>

            <Box color="text.primary" sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "baseline" }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>$ {productPrice} USD</Typography>
              {productOldPrice && (
                <Typography variant="h5" sx={{ textDecoration: "line-through", color: "#555" }}>
                  $ {productOldPrice} USD
                </Typography>
              )}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton onClick={handleDecrement} size="small" sx={{ background: "white", border: "1px solid #ccc" }}>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography fontWeight={600}>{counter}</Typography>
                <IconButton onClick={handleIncrement} size="small" sx={{ background: "white", border: "1px solid #ccc" }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              <IconButton onClick={handleOpenModal} sx={{
                background: theme.palette.primary.main,
                color: "white",
                p: 1.2,
                borderRadius: 2,
                "&:hover": { background: theme.palette.primary.dark },
              }}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* MODAL */}
        <ModalCard
          open={openModal}
          onClose={handleCloseModal}
          onConfirm={() => {
            handleCloseModal();
            handleReset();
          }}
          product={product}
          counter={counter}
        />

        {/* FICHA TÉCNICA */}
        <Box
          sx={{
            mt: 5,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            overflow: 'hidden',
            width: { xs: '100%', md: '50%' },
            maxWidth: 550,
          }}
        >
          <Box sx={{ bgcolor: '#f5f5f5', px: 2, py: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Propiedades
            </Typography>
          </Box>

          {product.specs?.map((s, index) => (
            <Box
              key={s.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: 2,
                py: 1,
                borderBottom: index !== product.specs.length - 1 ? '1px solid #e0e0e0' : 'none'
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                {s.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                {s.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* RELACIONADOS */}
        <Box sx={{ width: "95%", mt: 6, mb: 0 }}>
          <GridRelacionados products={productsCategory} />
        </Box>
      </Box>

      <PaymentInfoBanner />

      {/* RECIENTES */}
      <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
        <GridRecientes products={productsReciente} />
      </Box>
    </>
  );
};
