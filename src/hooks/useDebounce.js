// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  // Estado para almacenar el valor 'debounced'
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Establece un temporizador que actualiza debouncedValue después del 'delay'
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpia el temporizador si el valor (o el delay) cambia antes de que se ejecute el temporizador
    // Esto asegura que solo se ejecute el último temporizador.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Se vuelve a ejecutar si el valor o el delay cambian

  return debouncedValue;
}