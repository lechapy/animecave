// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const links = [
    { to: '/animes',   label: 'Animes' },
    { to: '/api-info', label: 'Sobre la API' },
    { to: '/equipo',   label: 'Nuestro equipo' },
  ];

  const navLinkStyle = ({ isActive }) => ({
    marginRight:    '20px',
    color:          isActive ? '#fff' : '#ff4081',
    textDecoration: 'none',
    fontWeight:     'bold',
  });

  return (
    <div
      style={{
        /* Fondo de sakura */
        backgroundImage:    "url('/sakura.png')",
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        backgroundRepeat:   'no-repeat',

        /* Estilos generales */
        color:        '#f0f0f0',
        width:        '100vw',
        minHeight:    '100vh',
        overflowX:    'hidden',
        margin:       0,
        padding:      0,
      }}
    >
      <nav style={{ padding: '20px' }}>
        <NavLink to="/" style={navLinkStyle}>Inicio</NavLink>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} style={navLinkStyle}>
            {label}
          </NavLink>
        ))}
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}