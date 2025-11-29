// 📌 ProfileMenu.jsx (SIN MODAL, SIN BACKDROP)
import { Box, Popper, Paper } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const ProfileMenu = ({ open, anchorEl, onClose, navigate }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      sx={{ zIndex: 9999 }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 220,
          p: 2,
          borderRadius: 2,
        }}
        onMouseLeave={onClose} // opcional: cerrar cuando salgas
      >
        {/* PERFIL */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            borderRadius: 1,
            bgcolor: "#f5f8ff",
            cursor: "pointer",
            fontSize: "0.9rem",
            "&:hover": { background: "#e9f0ff" },
          }}
          onClick={() => {
            navigate("/perfil");
            onClose();
          }}
        >
          <AccountCircleOutlinedIcon sx={{ color: "#022954" }} />
          Perfil
        </Box>

        {/* MIS PEDIDOS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            borderRadius: 1,
            mt: 1,
            color: "#777",
            cursor: "pointer",
            fontSize: "0.9rem",
            "&:hover": { background: "#f0f0f0" },
          }}
          onClick={() => {
            navigate("/mis-pedidos");
            onClose();
          }}
        >
          <LoginIcon sx={{ color: "#777" }} />
          Mis Pedidos
        </Box>

        {/* CERRAR SESIÓN */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            borderRadius: 1,
            mt: 1,
            color: "red",
            cursor: "pointer",
            fontSize: "0.9rem",
            "&:hover": { background: "#ffe5e5" },
          }}
          onClick={() => {
            console.log("Cerrar sesión");
            onClose();
          }}
        >
          <LogoutIcon sx={{ color: "red" }} />
          Cerrar Sesión
        </Box>
      </Paper>
    </Popper>
  );
};
