// import React, { useState } from 'react';
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     Paper,
//     Link,
//     useMediaQuery
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// export const LoginPage = () => {

//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <Box
//             sx={{
//                 height: "100vh",                // 🔥 evita que crezca más que la pantalla
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#f7f7f7",
//                 overflow: "hidden",             // 🔥 evita cualquier scroll inesperado
//             }}
//         >
//             <Paper
//                 component="form"
//                 onSubmit={handleSubmit}
//                 elevation={6}
//                 sx={{
//                     width: "100%",
//                     maxWidth: 360,
//                     p: 3,                        // 🔥 padding reducido
//                     borderRadius: 3,
//                     textAlign: "center",
//                     backgroundColor: "#ffffff",
//                 }}
//             >
//                 <Typography
//                     variant="h6"
//                     fontWeight={700}
//                     sx={{ mb: 3, color: theme.palette.primary.main }}
//                 >
//                     Iniciar Sesión
//                 </Typography>

//                 <TextField
//                     fullWidth
//                     label="Correo electrónico"
//                     type="email"
//                     size="medium"
//                     sx={{ mb: 2 }}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <TextField
//                     fullWidth
//                     label="Contraseña"
//                     type="password"
//                     size="medium"
//                     sx={{ mb: 1 }}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <Box sx={{ width: "100%", textAlign: "right", mb: 3 }}>
//                     <Link
//                         href="/auth/forgot-password"
//                         underline="hover"
//                         sx={{ fontSize: 13 }}
//                     >
//                         ¿Olvidaste tu contraseña?
//                     </Link>
//                 </Box>

//                 <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                         py: 1.2,
//                         borderRadius: 2,
//                         fontWeight: 600,
//                         fontSize: 15,
//                     }}
//                 >
//                     Ingresar
//                 </Button>

//                 <Typography sx={{ mt: 3, fontSize: 14 }}>
//                     ¿No tienes cuenta?{" "}
//                     <Link href="/auth/register" underline="hover" fontWeight={600}>
//                         Regístrate aquí
//                     </Link>
//                 </Typography>
//             </Paper>
//         </Box>
//     );
// };


import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  useMediaQuery,
  InputAdornment
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        overflow: 'hidden',
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 360,
          p: 3,
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mb: 3, color: theme.palette.primary.main }}
        >
          Iniciar Sesión
        </Typography>

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          size="medium"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ fontSize: 20, color: theme.palette.primary.main }} />
              </InputAdornment>
            ),
          }}
        />

        {/* PASSWORD (menos margen abajo) */}
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          size="medium"
          sx={{ mb: 0.6 }}             // <-- reducido para acercar el link
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ fontSize: 20, color: theme.palette.primary.main }} />
              </InputAdornment>
            ),
          }}
        />

        {/* LINK: ajustado para quedar justo entre input y botón */}
        <Box sx={{ width: '100%', textAlign: 'right', mt: 0.4, mb: 1.6 }}>
          <Link href="/auth/forgot-password" underline="hover" sx={{ fontSize: 13 }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>

        {/* BOTÓN */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.05,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Ingresar
        </Button>

        <Typography sx={{ mt: 3, fontSize: 14 }}>
          ¿No tienes cuenta?{' '}
          <Link href="/auth/register" underline="hover" fontWeight={600}>
            Regístrate aquí
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
