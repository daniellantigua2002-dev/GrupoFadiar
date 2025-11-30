



// import {
//     FormControl,
//     Select,
//     MenuItem,
//     Typography,
//     Box,
//     useTheme // ⬅️ Importamos useTheme para usar colores del tema
// } from '@mui/material';
// import SortIcon from '@mui/icons-material/Sort';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 

// // Opciones de ordenamiento (Adaptadas de la solicitud del usuario, asegurando valores únicos)
// const SORT_OPTIONS = [
//     { label: 'No ordenar', value: 'sin-ordenar' },
//     { label: 'Menor precio', value: 'menor-precio' },
//     { label: 'Mayor precio', value: 'mayor-precio' },
//     { label: 'Con rebaja', value: 'con-rebaja' }, // Valor corregido de 'mas-nuevo'
//     { label: 'Sin rebaja', value: 'sin-rebaja' }, // Valor corregido de 'mas-nuevo'
// ];

// export const SortFilter = ({ sortBy, setSortBy }) => {
//     const theme = useTheme();
//     // Valor por defecto si sortBy es null/undefined
//     const defaultValue = SORT_OPTIONS[0].value;

//     const handleChange = (event) => {
//         // Al seleccionar una opción, actualiza el estado global (Contexto)
//         setSortBy(event.target.value);
//     };

//     // Buscamos la etiqueta actual para mostrarla
//     const currentLabel = SORT_OPTIONS.find(opt => opt.value === sortBy)?.label || SORT_OPTIONS[0].label;

//     return (
//         // FormControl es el contenedor principal del Select
//         <FormControl
//             variant="outlined"
//             size="small"
//             sx={{
//                 minWidth: 250, // Más ancho para mejor visualización
//                 backgroundColor: '#f0f2f5', // Fondo ligero
//                 borderRadius: 1,
//                 boxShadow: 0,
//                 mr: 2, // ⬅️ Margen derecho
//             }}
//         >
//             <Select
//                 // Usamos el valor actual, o el valor por defecto si es null/undefined
//                 // Esto ayuda a resolver problemas de "doble pulsación" asegurando un valor inicial.
//                 value={sortBy || defaultValue} 
//                 onChange={handleChange}
//                 // displayEmpty ya no es necesario
//                 inputProps={{ 'aria-label': 'Ordenar por' }}

//                 // 🛠️ Personalización del Select
//                 sx={{
//                     // Estilos generales del Select
//                     '& .MuiSelect-select': {
//                         display: 'flex',
//                         alignItems: 'center',
//                         py: 1, 
//                         px: 1, 
//                         backgroundColor: '#f0f2f5', 
//                     },
//                     // Remueve el borde por defecto
//                     '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
//                 }}

//                 // Icono de flecha
//                 IconComponent={KeyboardArrowDownIcon}

//                 // Renderiza el valor seleccionado dentro del control
//                 renderValue={(selectedValue) => {
//                     const selectedOption = SORT_OPTIONS.find(opt => opt.value === selectedValue);

//                     return (
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <Typography 
//                                 variant="body2" 
//                                 color={theme.palette.text.primary} // ⬅️ Texto en negro
//                                 sx={{ fontWeight: 500 }}
//                             >
//                                 Ordenar por:
//                             </Typography>
//                             <SortIcon sx={{ fontSize: 18, color: theme.palette.text.primary }} />
//                             <Typography variant="body1" fontWeight={600} color="text.primary">
//                                 {/* Aseguramos que se muestre el label correcto */}
//                                 {selectedOption ? selectedOption.label : SORT_OPTIONS[0].label}
//                             </Typography>
//                         </Box>
//                     );
//                 }}

//                 // Estilo del menú desplegable (Paper)
//                 MenuProps={{
//                     disableScrollLock: true, // ⬅️ Permite el scroll de la pantalla principal al abrir el menú
//                     sx: {
//                         // El Paper es el recuadro blanco que se despliega
//                         '& .MuiPaper-root': {
//                             borderRadius: 2,
//                             boxShadow: 3,
//                             mt: 1,
//                         },
//                     },
//                 }}
//             >
//                 {SORT_OPTIONS.map((option) => (
//                     <MenuItem
//                         key={option.value}
//                         value={option.value}
//                         sx={{
//                             // Estilo para la opción seleccionada
//                             '&.Mui-selected': {
//                                 backgroundColor: '#ffe082', // Color amarillo/dorado más claro
//                                 color: 'black',
//                                 '&:hover': {
//                                     backgroundColor: '#ffe082', // Mantener el hover con color
//                                 }
//                             },
//                             p: 1.5 // Aumentar padding para que se parezca a la imagen
//                         }}
//                     >
//                         <Typography fontWeight={option.value === sortBy ? 700 : 400}>
//                             {option.label}
//                         </Typography>
//                     </MenuItem>
//                 ))}
//             </Select>
//         </FormControl>
//     );
// };
import {
    FormControl,
    Select,
    MenuItem,
    Typography,
    Box,
    useTheme
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 

// Opciones de ordenamiento
const SORT_OPTIONS = [
    { label: 'No ordenar', value: 'sin-ordenar' },
    { label: 'Menor precio', value: 'menor-precio' },
    { label: 'Mayor precio', value: 'mayor-precio' },
    { label: 'Con rebaja', value: 'con-rebaja' },
    { label: 'Sin rebaja', value: 'sin-rebaja' },
];

/**
 * Componente de filtro/ordenamiento para Material-UI Select.
 * @param {string} sortBy - El valor de ordenamiento actual (del Contexto).
 * @param {function} setSortBy - Función para actualizar el estado de ordenamiento.
 */
export const SortFilter = ({ sortBy, setSortBy }) => {
    const theme = useTheme();
    // Valor por defecto si sortBy es null/undefined
    const defaultValue = SORT_OPTIONS[0].value;

    const handleChange = (event) => {
        // Al seleccionar una opción, actualiza el estado global (Contexto/Prop)
        setSortBy(event.target.value);
    };

    return (
        <FormControl
            variant="outlined"
            size="small"
            sx={{
                minWidth: 250, 
                backgroundColor: '#f0f2f5', 
                borderRadius: 1,
                boxShadow: 0,
                mr: 2, 
            }}
        >
            <Select
                // Es crucial que este valor (sortBy) coincida con el 'value' de un MenuItem
                value={sortBy || defaultValue} 
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Ordenar por' }}

                // Estilos generales del Select
                sx={{
                    '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        py: 1, 
                        px: 1, 
                        backgroundColor: '#f0f2f5', 
                    },
                    // Remueve el borde por defecto
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                }}

                IconComponent={KeyboardArrowDownIcon}

                // Renderiza el valor seleccionado dentro del control
                renderValue={(selectedValue) => {
                    const selectedOption = SORT_OPTIONS.find(opt => opt.value === selectedValue);

                    return (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography 
                                variant="body2" 
                                color={theme.palette.text.primary}
                                sx={{ fontWeight: 500 }}
                            >
                                Ordenar por:
                            </Typography>
                            <SortIcon sx={{ fontSize: 18, color: theme.palette.text.primary }} />
                            <Typography variant="body1" fontWeight={600} color="text.primary">
                                {selectedOption ? selectedOption.label : SORT_OPTIONS[0].label}
                            </Typography>
                        </Box>
                    );
                }}

                // Estilo del menú desplegable (Paper)
                MenuProps={{
                    disableScrollLock: true, 
                    sx: {
                        '& .MuiPaper-root': {
                            borderRadius: 2,
                            boxShadow: 3,
                            mt: 1,
                        },
                    },
                }}
            >
                {SORT_OPTIONS.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        sx={{
                            p: 1.5,
                            fontWeight: 400, // Estilo base (no seleccionado)
                            
                            // 🎯 CORRECCIÓN APLICADA: Estilos para la opción SELECCIONADA
                            // Material-UI usa esta clase para marcar el elemento activo.
                            '&.Mui-selected': {
                                backgroundColor: '#ffe082', // Fondo para marcarlo
                                color: 'black',
                                fontWeight: 700, // Texto en negrita
                                '&:hover': {
                                    backgroundColor: '#ffe082', // Mantener color en hover
                                }
                            },
                            // Estilo de hover normal
                            '&:hover': {
                                backgroundColor: '#f5f5f5', 
                            }
                        }}
                    >
                        {/* El Typography solo muestra el label; el estilo lo aplica el MenuItem padre */}
                        <Typography>{option.label}</Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};