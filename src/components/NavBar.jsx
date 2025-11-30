
import { useState, useRef, useLayoutEffect, useEffect, useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    InputBase,
    Container,
    IconButton,
    useMediaQuery,
    Badge,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/log/logo.webp';

import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/searchContext';

import { ProfileMenu } from "./ProfileMenu";
// ⬅️ Importamos el componente de menú móvil
import { MobileMenuDrawer } from "./MobileMenuDrawer"; 

// ------------------ SEARCH ------------------
const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: 650,
    borderBottom: `2px solid #003366`,
    display: 'flex',
    alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(0.3, 0),
    fontSize: '1rem',
    color: 'black',
    caretColor: 'black',
    '& input': {
        color: 'black',
        '&:focus': { outline: 'none' },
    },
}));

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Inicio');
    const [modalOpen, setModalOpen] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const [openProfile, setOpenProfile] = useState(false);
    const profileRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const { cartCount } = useContext(CartContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const linkRoutes = {
        'Inicio': '/',
        'Productos': '/productos',
        'About Us': '/about',
        'FAQ': '/faq',
        'Contacto': '/contacto',
    };

    const linkRefs = useRef([]);
    const linksContainerRef = useRef(null);

    const measureUnderline = () => {
        const index = Object.keys(linkRoutes).indexOf(activeLink);
        const el = linkRefs.current[index];
        if (!el) return;

        setUnderlineStyle({ left: el.offsetLeft, width: el.offsetWidth });
    };

    useLayoutEffect(() => {
        const raf = requestAnimationFrame(measureUnderline);
        return () => cancelAnimationFrame(raf);
    }, [activeLink, isMobile]);

    useEffect(() => {
        window.addEventListener('resize', measureUnderline);
        return () => window.removeEventListener('resize', measureUnderline);
    }, []);

    return (
        <AppBar position="static" color="inherit" elevation={0} sx={{ backgroundColor: '#fff' }}>
            <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: 0.2, minHeight: 50 }}>

                {isMobile ? (
                    <IconButton edge="start" onClick={() => setModalOpen(true)}>
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <img src={logo} alt="Logo Grupo Fadiar" style={{ height: 55 }} />
                    </Box>
                )}

         
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mt: -1.2 }}>
                        <SearchContainer>
                            <StyledInputBase
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar producto"
                            />
                            <SearchIcon sx={{ ml: 1, color: 'black' }} />
                        </SearchContainer>
                    </Box>
                )}

             
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton>
                        <Badge
                            badgeContent={cartCount}
                            overlap="circular"
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: '#ff0000',
                                    color: 'white',
                                    fontSize: '0.65rem',
                                    minWidth: 18,
                                    height: 18,
                                    fontWeight: 'bold',
                                }
                            }}
                        >
                            <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
                        </Badge>
                    </IconButton>

                   
                    <IconButton
                        ref={profileRef}
                        onClick={() => setOpenProfile(prev => !prev)}
                    >
                        <AccountCircleOutlinedIcon sx={{ color: 'black' }} />
                    </IconButton>
                </Box>
            </Toolbar>

   
            {isMobile && (
                <Container sx={{ width: '100%', mt: 1 }}>
                    <SearchContainer>
                        <StyledInputBase
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar producto"
                        />
                        <SearchIcon sx={{ ml: 1, color: 'black' }} />
                    </SearchContainer>
                </Container>
            )}

          
            {!isMobile && (
                <Container sx={{ mt: 0, pt: 0, pb: 0 }}>
                    <Box sx={{ position: 'relative' }} ref={linksContainerRef}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            columnGap: theme.spacing(4),
                            position: 'relative',
                            pb: 0.5
                        }}>
                            {Object.keys(linkRoutes).map((link, index) => (
                                <Box
                                    key={link}
                                    ref={(el) => (linkRefs.current[index] = el)}
                                    onClick={() => {
                                        setActiveLink(link);
                                        navigate(linkRoutes[link]);
                                    }}
                                    sx={{
                                        cursor: 'pointer',
                                        color: activeLink === link ? theme.palette.primary.main : 'black',
                                        fontWeight: activeLink === link ? 'bold' : 'normal',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.8,
                                        transition: 'color 250ms',
                                        '&:hover': { color: theme.palette.primary.main },
                                    }}
                                >
                                    {link}
                                </Box>
                            ))}

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: `${underlineStyle.left}px`,
                                    width: `${underlineStyle.width}px`,
                                    height: '3px',
                                    backgroundColor: theme.palette.secondary.main,
                                    transition: 'left 250ms ease, width 250ms ease',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            )}

      
            {isMobile && (
                <MobileMenuDrawer
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    linkRoutes={linkRoutes}
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                />
            )}

  
            <ProfileMenu
                open={openProfile}
                anchorEl={profileRef.current}
                onClose={() => setOpenProfile(false)}
                navigate={navigate}
            />

        </AppBar>
    );
};