// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio (top: 0, left: 0)
  }, [pathname]); // Se ejecuta cada vez que la ruta cambia
}