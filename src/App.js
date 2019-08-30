import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

function App({ children, navBarMenu = [] }) {

  const menu = useMemo(() => {
    return navBarMenu.map(
      ({ path, name }, idx) =>
        <span key={`menu-${path}`}>
          <NavLink
            to={path}
            className="App-link"
          >
            {name}
          </NavLink>
          {idx < navBarMenu.length - 1 && <span className="App-link-separator">|</span>}
        </span>

    );
  }, [navBarMenu]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link-container">{menu}</div>
      </header>
      {children}
    </div>
  );
}

export default App;
