


import { Box, Container, Typography, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import olla from '../assets/img/olla.png';
 
export const Banner = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        minHeight: { xs: 220, sm: 280 },
        position: 'relative',
        overflow: 'visible',
        px: 6,
        py: { xs: 1.5, md: 2 },
        mt: { xs: 2, md: 2 },
        mb: { xs: 2, md: 2 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
        }}
      >
        {/* Columna izquierda */}
        <Stack
          spacing={1.5}
          alignItems="flex-start"
          textAlign="left"
        >
          <Box>
            <Typography
              variant="h5"
              sx={(theme) => ({
                color: theme.palette.secondary.main,
                fontWeight: 700,
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
              })}
            >
              Variedad de productos
            </Typography>
            <Typography
              variant="h5"
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontWeight: 700,
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
              })}
            >
              Electrodomésticos
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={(theme) => ({
              color: alpha(theme.palette.common.white, 0.85),
              maxWidth: 520,
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit scelerisque.
            Blandit duis sapien proin. Nulla turpis sem, convallis imperdiet tempus.
          </Typography>
        </Stack>

        {/* Columna derecha: título + imagen */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: 'center',
            textAlign: 'left',
            position: 'relative',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              fontFamily: 'cursive',
              fontWeight: 400,
              fontSize: { xs: '0.85rem', sm: '1.3rem', md: '1.6rem' },
              lineHeight: 1.2,
              mt: { md: -9 },
              mb: { xs: 0, md: 0.5 },
              mr: { xs: 2, md: 0 },
              alignSelf: 'flex-start',
              textAlign: 'left',
              ml: { md: 6 },
            }}
          >
            Échale Sazón a la Olla
          </Typography>

          <Box
            component="img"
            src={olla}
            alt="Olla eléctrica"
            loading="lazy"
            sx={{
              position: { xs: 'static', md: 'absolute' },
              bottom: { md: -195 },
              right: { xs: 'auto', md: 40 },
              transform: { xs: 'none', md: 'none' },
              width: { xs: '65%', sm: '60%', md: '100%' }, // ✅ más grande en móviles
              maxWidth: 460,
              mt: { xs: 0, md: 0 },
              objectFit: 'contain',
              filter: 'drop-shadow(0px 0px 10px rgba(255,255,255,0.4))',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
