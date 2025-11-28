
// import { useEffect, useState } from 'react';
// import { Fab, useMediaQuery } from '@mui/material';
// import { KeyboardArrowUp } from '@mui/icons-material';

// export const ScrollToTopButton = () => {
//     const [visible, setVisible] = useState(false);

//     // Mostrar solo en pantallas mayores a 960px
//     const isWideScreen = useMediaQuery('(min-width:961px)');

//     useEffect(() => {
//         const handleScroll = () => {
//             setVisible(window.scrollY > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         const duration = 1000;
//         const start = window.scrollY;
//         const startTime = performance.now();

//         const easeInCubic = (t) => t * t * t;

//         const animateScroll = (currentTime) => {
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1);
//             const easedProgress = easeInCubic(progress);
//             window.scrollTo(0, start * (1 - easedProgress));
//             if (progress < 1) {
//                 requestAnimationFrame(animateScroll);
//             }
//         };

//         requestAnimationFrame(animateScroll);
//     };

//     if (!isWideScreen || !visible) return null;

//     return (
//         <Fab
//             color="secondary"
//             onClick={scrollToTop}
//             sx={{
//                 position: 'fixed',
//                 bottom: 24,
//                 right: 24,
//                 zIndex: 1000,
//             }}
//             aria-label="scroll to top"
//         >
//             <KeyboardArrowUp />
//         </Fab>
//     );
// };



import { useEffect, useState } from 'react';
import { Fab, useMediaQuery, useTheme } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    // Visible también en móvil
    const isAnyScreen = useMediaQuery('(min-width:0px)');

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const duration = 1000;
        const start = window.scrollY;
        const startTime = performance.now();

        const easeInCubic = (t) => t * t * t;

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInCubic(progress);
            window.scrollTo(0, start * (1 - easedProgress));
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    if (!isAnyScreen || !visible) return null;

    return (
        <Fab
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 1000,
                background: theme.palette.secondary.main,
                color: 'white',
                '&:hover': {
                    background: theme.palette.secondary.dark,
                },
            }}
            aria-label="scroll to top"
        >
            <KeyboardArrowUp />
        </Fab>
    );
};
