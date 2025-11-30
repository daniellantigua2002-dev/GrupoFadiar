

// import { useState } from "react";
// import {
//   Box,
//   Paper,
//   Stack,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   Slider,
//   Radio,
//   RadioGroup,
//   IconButton,
//   Collapse,
//   TextField,
//   useTheme
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useFilters } from '../../contexts/FiltersContext';
// import { CATEGORY_OPTIONS, BRAND_OPTIONS } from "../../utils/dataFilters";


// export const FiltersProducts = () => {
//   const theme = useTheme();

//   const { rawStates, setFilters } = useFilters();
//   const { selectedCategories, selectedBrands, priceRange } = rawStates;
//   const { setSelectedCategories, setSelectedBrands, setPriceRange } = setFilters;

//   const [openCategorias, setOpenCategorias] = useState(true);
//   const [openPrecio, setOpenPrecio] = useState(true);
//   const [openMarcas, setOpenMarcas] = useState(true);
//   const [openRelevantes, setOpenRelevantes] = useState(true);


//   // Maneja la selección de Checkboxes (Categorías y Marcas)
//   const handleCheckboxChange = (option, setStateFunction, currentState) => {
//     if (currentState.includes(option)) {
//       setStateFunction(currentState.filter((item) => item !== option));
//     } else {
//       setStateFunction([...currentState, option]);
//     }
//   };

//   // Maneja el cambio en los campos de texto del rango de precio
//   const handleMinMaxChange = (type, value) => {
//     const val = value === "" ? 0 : Number(value);

//     if (type === 'min') {
//       setPriceRange([Math.min(val, priceRange[1]), priceRange[1]]);
//     } else {
//       setPriceRange([priceRange[0], Math.max(val, priceRange[0])]);
//     }
//   };


//   // ⬅️ CAMBIO CLAVE: Usamos theme.palette.secondary.main como color de acento
//   const accentColor = theme.palette.secondary.main;
//   // Mantenemos el color gris por defecto
//   const defaultColor = theme.palette.grey[500];

//   // Estilos personalizados para los controles (Checkboxes, Radio)
//   const customControlStyles = {
//     color: defaultColor, // Color por defecto (Gris)
//     '&.Mui-checked': {
//       color: accentColor, // Color al estar presionado/seleccionado (Naranja/Dorado)
//     },
//   };


//   return (
//     <Box
//       sx={{
//         width: { xs: "100%", sm: 280, md: 300 },
//         position: { md: "sticky" },
//         top: 80,
//         pr: { xs: 0, sm: 2 }
//       }}
//     >
//       {/* CATEGORÍAS */}
//       <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6" fontWeight={700}>Categorías</Typography>
//           <IconButton onClick={() => setOpenCategorias(!openCategorias)}>
//             <ExpandMoreIcon
//               sx={{
//                 transform: openCategorias ? "rotate(0deg)" : "rotate(-90deg)",
//                 transition: "0.2s"
//               }}
//             />
//           </IconButton>
//         </Box>
//         <Collapse in={openCategorias}>
//           <Stack spacing={1} sx={{ mt: 1 }}>
//             {CATEGORY_OPTIONS.map((cat) => (
//               <FormControlLabel
//                 key={cat}
//                 control={
//                   <Checkbox
//                     sx={customControlStyles} // Estilos Gris -> Naranja
//                     checked={selectedCategories.includes(cat)}
//                     onChange={() =>
//                       handleCheckboxChange(cat, setSelectedCategories, selectedCategories)
//                     }
//                   />
//                 }
//                 label={cat}
//               />
//             ))}
//           </Stack>
//         </Collapse>
//       </Paper>

//       {/* PRECIO (Slider) */}
//       <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6" fontWeight={700}>Precio</Typography>
//           <IconButton onClick={() => setOpenPrecio(!openPrecio)}>
//             <ExpandMoreIcon
//               sx={{
//                 transform: openPrecio ? "rotate(0deg)" : "rotate(-90deg)",
//                 transition: "0.2s"
//               }}
//             />
//           </IconButton>
//         </Box>
//         <Collapse in={openPrecio}>
//           <Box sx={{ mt: 2 }}>
//             <Slider
//               // ⬅️ Slider usa el color de acento
//               sx={{
//                 color: accentColor,
//                 '& .MuiSlider-track': {
//                   borderColor: 'transparent',
//                 },
//               }}
//               value={priceRange}
//               onChange={(e, v) => setPriceRange(v)}
//               valueLabelDisplay="auto"
//               min={0}
//               max={3000}
//             />
//           </Box>
//           <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//             <TextField
//               label="Min"
//               type="number"
//               size="small"
//               value={priceRange[0]}
//               onChange={(e) => handleMinMaxChange('min', e.target.value)}
//               fullWidth
//             />
//             <TextField
//               label="Max"
//               type="number"
//               size="small"
//               value={priceRange[1]}
//               onChange={(e) => handleMinMaxChange('max', e.target.value)}
//               fullWidth
//             />
//           </Box>
//         </Collapse>
//       </Paper>

//       {/* MARCAS */}
//       <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6" fontWeight={700}>Marcas</Typography>
//           <IconButton onClick={() => setOpenMarcas(!openMarcas)}>
//             <ExpandMoreIcon
//               sx={{
//                 transform: openMarcas ? "rotate(0deg)" : "rotate(-90deg)",
//                 transition: "0.2s"
//               }}
//             />
//           </IconButton>
//         </Box>
//         <Collapse in={openMarcas}>
//           <Stack spacing={1} sx={{ mt: 1 }}>
//             {BRAND_OPTIONS.map((brand) => (
//               <FormControlLabel
//                 key={brand}
//                 control={
//                   <Checkbox
//                     sx={customControlStyles} // Estilos Gris -> Naranja
//                     checked={selectedBrands.includes(brand)}
//                     onChange={() =>
//                       handleCheckboxChange(brand, setSelectedBrands, selectedBrands)
//                     }
//                   />
//                 }
//                 label={brand}
//               />
//             ))}
//           </Stack>
//         </Collapse>
//       </Paper>

//       {/* RELEVANTES (Radio Buttons) */}
//       <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6" fontWeight={700}>Relevantes</Typography>
//           <IconButton onClick={() => setOpenRelevantes(!openRelevantes)}>
//             <ExpandMoreIcon
//               sx={{
//                 transform: openRelevantes ? "rotate(0deg)" : "rotate(-90deg)",
//                 transition: "0.2s"
//               }}
//             />
//           </IconButton>
//         </Box>
//         <Collapse in={openRelevantes}>
//           <RadioGroup defaultValue="ofertas" sx={{ mt: 1 }}>
//             <FormControlLabel
//               value="ofertas"
//               control={<Radio sx={customControlStyles} />} // Estilos Gris -> Naranja
//               label="Ofertas"
//             />
//             <FormControlLabel
//               value="mas-vendidos"
//               control={<Radio sx={customControlStyles} />} // Estilos Gris -> Naranja
//               label="Más vendidos"
//             />
//             <FormControlLabel
//               value="proximamente"
//               control={<Radio sx={customControlStyles} />} // Estilos Gris -> Naranja
//               label="Próximamente"
//             />
//           </RadioGroup>
//         </Collapse>
//       </Paper>
//     </Box>
//   );
// };


import { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Radio,
  RadioGroup,
  IconButton,
  Collapse,
  useTheme,
  Button 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFilters } from '../../contexts/FiltersContext';
import { CATEGORY_OPTIONS, BRAND_OPTIONS } from "../../utils/dataFilters";


export const FiltersProducts = () => {
  const theme = useTheme();

  const { rawStates, setFilters } = useFilters();
  const { selectedCategories, selectedBrands, priceRange } = rawStates;
  const { setSelectedCategories, setSelectedBrands, setPriceRange } = setFilters;

  // Estado local para el Slider (para no aplicar el filtro hasta presionar el botón)
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  
  const [openCategorias, setOpenCategorias] = useState(true);
  const [openPrecio, setOpenPrecio] = useState(true);
  const [openMarcas, setOpenMarcas] = useState(true);
  const [openRelevantes, setOpenRelevantes] = useState(true);


  // Maneja la selección de Checkboxes (Categorías y Marcas)
  const handleCheckboxChange = (option, setStateFunction, currentState) => {
    if (currentState.includes(option)) {
      setStateFunction(currentState.filter((item) => item !== option));
    } else {
      setStateFunction([...currentState, option]);
    }
  };

  // Función: Actualiza el estado global (Contexto) solo al presionar Aplicar
  const handleApplyPriceFilter = () => {
    setPriceRange(localPriceRange);
  };


  // Usamos secondary.main como color de acento
  const accentColor = theme.palette.secondary.main;
  const defaultColor = theme.palette.grey[500];

  // Estilos personalizados para los controles (Checkboxes, Radio)
  const customControlStyles = {
    color: defaultColor, 
    '&.Mui-checked': {
      color: accentColor, 
    },
  };


  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 280, md: 300 },
        position: { md: "sticky" },
        top: 80,
        pr: { xs: 0, sm: 2 }
      }}
    >
      {/* CATEGORÍAS */}
      <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight={700}>Categorías</Typography>
          <IconButton onClick={() => setOpenCategorias(!openCategorias)}>
            <ExpandMoreIcon
              sx={{
                transform: openCategorias ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "0.2s"
              }}
            />
          </IconButton>
        </Box>
        <Collapse in={openCategorias}>
          <Stack spacing={1} sx={{ mt: 1 }}>
            {CATEGORY_OPTIONS.map((cat) => (
              <FormControlLabel
                key={cat}
                control={
                  <Checkbox
                    sx={customControlStyles} 
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      handleCheckboxChange(cat, setSelectedCategories, selectedCategories)
                    }
                  />
                }
                label={cat}
              />
            ))}
          </Stack>
        </Collapse>
      </Paper>


      {/* PRECIO (Slider) */}
      <Paper 
            sx={{ 
                p: 2, 
                pr: 4, 
                mb: 2, 
                backgroundColor: "#f5f5f5", 
                borderRadius: 2 
            }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", ml: -2 }}>
          <Typography variant="h6" fontWeight={700}>Precio</Typography>
          <IconButton onClick={() => setOpenPrecio(!openPrecio)}>
            <ExpandMoreIcon
              sx={{
                transform: openPrecio ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "0.2s"
              }}
            />
          </IconButton>
        </Box>
        <Collapse in={openPrecio}>
          <Box sx={{ mt: 2, mb: 2, mx: -1 }}> 
            <Slider
              sx={{
                color: accentColor,
                '& .MuiSlider-track': {
                  borderColor: 'transparent',
                },
                 // ⬅️ CAMBIO CLAVE: Estilo para la etiqueta flotante (ValueLabel)
                 '& .MuiSlider-valueLabel': {
                     // Color del fondo de la burbuja (opcional, por defecto usa el color principal del slider)
                     // backgroundColor: accentColor, 
                     
                     // Color del texto de la etiqueta flotante
                     color: theme.palette.getContrastText(accentColor), // Esto asegura que el texto sea legible (negro o blanco)
                     
                     // Color de la tipografía/texto dentro de la burbuja: 
                     // Para que sea el color del tema, asegúrate de que el getContrastText devuelva el color adecuado (ej: blanco si el fondo es oscuro).
                     // Si quieres que el texto sea el accentColor y la burbuja blanca, cambia esto:
                     // color: accentColor,
                 },
                 // Si quieres que el texto sea azul, pero el fondo de la burbuja también se vea bien:
                 '& .MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
                      backgroundColor: accentColor,
                      color: theme.palette.getContrastText(accentColor), // Contraste del color de fondo del accentColor
                 }
              }}
              value={localPriceRange}
              onChange={(e, v) => setLocalPriceRange(v)}
              valueLabelDisplay="auto"
              min={0}
              max={3000}
            />
          </Box>

          <Button 
                onClick={handleApplyPriceFilter} 
                fullWidth 
                variant="contained" 
                sx={{ mt: 1, backgroundColor: accentColor, '&:hover': { backgroundColor: accentColor } }}
            >
            Aplicar
          </Button>

        </Collapse>
      </Paper>



      {/* MARCAS */}
      <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight={700}>Marcas</Typography>
          <IconButton onClick={() => setOpenMarcas(!openMarcas)}>
            <ExpandMoreIcon
              sx={{
                transform: openMarcas ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "0.2s"
              }}
            />
          </IconButton>
        </Box>
        <Collapse in={openMarcas}>
          <Stack spacing={1} sx={{ mt: 1 }}>
            {BRAND_OPTIONS.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    sx={customControlStyles} 
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      handleCheckboxChange(brand, setSelectedBrands, selectedBrands)
                    }
                  />
                }
                label={brand}
              />
            ))}
          </Stack>
        </Collapse>
      </Paper>



      {/* RELEVANTES (Radio Buttons) */}
      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight={700}>Relevantes</Typography>
          <IconButton onClick={() => setOpenRelevantes(!openRelevantes)}>
            <ExpandMoreIcon
              sx={{
                transform: openRelevantes ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "0.2s"
              }}
            />
          </IconButton>
        </Box>
        <Collapse in={openRelevantes}>
          <RadioGroup defaultValue="ofertas" sx={{ mt: 1 }}>
            <FormControlLabel
              value="ofertas"
              control={<Radio sx={customControlStyles} />} 
              label="Ofertas"
            />
            <FormControlLabel
              value="mas-vendidos"
              control={<Radio sx={customControlStyles} />} 
              label="Más vendidos"
            />
            <FormControlLabel
              value="proximamente"
              control={<Radio sx={customControlStyles} />} 
              label="Próximamente"
            />
          </RadioGroup>
        </Collapse>
      </Paper>
    </Box>
  );
};