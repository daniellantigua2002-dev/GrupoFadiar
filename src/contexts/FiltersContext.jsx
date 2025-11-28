
import React, { createContext, useContext, useState, useMemo } from 'react';


export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 800]);


  const activeFilters = useMemo(() => {

    return {
      categorias: selectedCategories.filter(cat => cat !== "Todas las categorías"),
      marcas: selectedBrands.filter(brand => brand !== "Todas las Marcas"),
      rangoPrecio: priceRange,
    };
  }, [selectedCategories, selectedBrands, priceRange]);


  const setFilters = {
    setSelectedCategories,
    setSelectedBrands,
    setPriceRange,
  };


  const contextValue = useMemo(() => ({

    activeFilters,

    rawStates: {
      selectedCategories,
      selectedBrands,
      priceRange,
    },

    setFilters
  }), [activeFilters, selectedCategories, selectedBrands, priceRange]);


  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};


export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters debe usarse dentro de un FiltersProvider');
  }
  return context;
};