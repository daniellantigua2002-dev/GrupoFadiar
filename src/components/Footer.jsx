


import { Box, Grid, Typography, Link, Stack, useTheme, Container } from '@mui/material';
import { Facebook, Instagram, WhatsApp, YouTube, LocationOn, Phone, Email } from '@mui/icons-material';
import logoFooter from '../assets/log/logoFooter.webp';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        py: { xs: 6, md: 4 },
        px: 0,
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          mt={{ xs: 2, md: 4 }}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'flex-start', md: 'space-between' },
          }}
        >
          {/* Logo */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'left' }} order={{ xs: 1, md: 1 }}>
            <img
              src={logoFooter}
              alt="Logo Grupo Fadiar"
              style={{ width: '150px', marginBottom: '0.5rem' }}
            />
            <Typography
              variant="caption"
              sx={{ display: { xs: 'none', md: 'block' }, mt: 12 }}
            >
              © 2023 Fadiar. Todos los derechos reservados.
            </Typography>
          </Grid>

          {/* Enlaces + redes sociales */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'left' }} order={{ xs: 2, md: 2 }}>
            <Typography variant="h6" sx={{ color: theme.palette.common.white, mb: 2 }}>
              Enlaces
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Link href="/terminos" underline="none" sx={{ color: theme.palette.common.white }}>
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" underline="none" sx={{ color: theme.palette.common.white }}>
                Política de Privacidad
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              sx={{ mt: { xs: 3, md: 5.5 } }}
            >
              <Link href="#" sx={{ color: theme.palette.common.white, '&:hover': { backgroundColor: '#1877F2' } }}>
                <Facebook />
              </Link>
              <Link href="#" sx={{ color: theme.palette.common.white, '&:hover': { backgroundColor: '#E4405F' } }}>
                <Instagram />
              </Link>
              <Link href="#" sx={{ color: theme.palette.common.white, '&:hover': { backgroundColor: '#25D366' } }}>
                <WhatsApp />
              </Link>
              <Link href="#" sx={{ color: theme.palette.common.white, '&:hover': { backgroundColor: '#FF0000' } }}>
                <YouTube />
              </Link>
            </Stack>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'left' }} order={{ xs: 3, md: 3 }}>
            <Typography variant="h6" sx={{ color: theme.palette.common.white, mb: 2 }}>
              Contáctenos
            </Typography>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <LocationOn sx={{ color: theme.palette.secondary.main, mt: 0.5 }} />
              <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                Calle 29F entre 114 y 114A, Edificio 11413,<br />
                Ciudad Libertad Marianao, La Habana, Cuba<br />
                <span style={{ color: theme.palette.secondary.main }}>Almacén 9A (Ename)</span>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Phone sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="body2">+53 55312536</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
              <Email sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="body2">
                <Link href="mailto:comercial@fadiar.com" sx={{ color: theme.palette.common.white }}>
                  comercial@fadiar.com
                </Link>
              </Typography>
            </Stack>
          </Grid>

          {/* Derechos reservados solo en móvil */}
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'left',
              display: { xs: 'block', md: 'none' },
              mt: 4,
            }}
            order={{ xs: 4, md: 0 }}
          >
            <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>
              © 2023 Fadiar. Todos los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
