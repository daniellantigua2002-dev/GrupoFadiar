
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
  TextField
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFilters } from '../../contexts/FiltersContext';
import { CATEGORY_OPTIONS, BRAND_OPTIONS } from "../../utils/dataFilters";



export const FiltersProducts = () => {

  const { rawStates, setFilters } = useFilters();
  const { selectedCategories, selectedBrands, priceRange } = rawStates;
  const { setSelectedCategories, setSelectedBrands, setPriceRange } = setFilters;


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

  // Maneja el cambio en los campos de texto del rango de precio
  const handleMinMaxChange = (type, value) => {
    const val = value === "" ? 0 : Number(value);

    //  Usamos setPriceRange del contexto
    if (type === 'min') {
      setPriceRange([Math.min(val, priceRange[1]), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], Math.max(val, priceRange[0])]);
    }
  };


  return (
    <Box
      sx={{
        width: { xs: "100%" },
        position: { md: "sticky" },
        top: 80,
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
                    color="primary"

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

      {/* PRECIO */}
      <Paper sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
          <Box sx={{ mt: 2 }}>
            <Slider

              value={priceRange}

              onChange={(e, v) => setPriceRange(v)}
              valueLabelDisplay="auto"
              min={0}
              max={3000}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              label="Min"
              type="number"
              size="small"

              value={priceRange[0]}

              onChange={(e) => handleMinMaxChange('min', e.target.value)}
              fullWidth
            />
            <TextField
              label="Max"
              type="number"
              size="small"

              value={priceRange[1]}

              onChange={(e) => handleMinMaxChange('max', e.target.value)}
              fullWidth
            />
          </Box>
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
                    color="primary"

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

      {/* RELEVANTES (sin cambios) */}
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
            <FormControlLabel value="ofertas" control={<Radio color="primary" />} label="Ofertas" />
            <FormControlLabel value="mas-vendidos" control={<Radio color="primary" />} label="Más vendidos" />
            <FormControlLabel value="proximamente" control={<Radio color="primary" />} label="Próximamente" />
          </RadioGroup>
        </Collapse>
      </Paper>
    </Box>
  );
};

