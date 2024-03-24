import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from './logo.png'; 

const allMenuItems = [
  { id: 1, label: 'Home', endpoint: '/' },
  { id: 2, label: 'Electronics', endpoint: '/Electronics' },
  { id: 3, label: 'Books', endpoint: '/Books' },
  { id: 4, label: 'Music', endpoint: '/Music' },
  { id: 5, label: 'Movies', endpoint: '/Movies' },
  { id: 6, label: 'Clothing', endpoint: '/Clothing' },
  { id: 7, label: 'Gaming', endpoint: '/Gaming' },
];

function App() {
  const [visibleItems, setVisibleItems] = useState(allMenuItems);
  const [hiddenItems, setHiddenItems] = useState([]);
  const navRef = useRef();


  const adjustMenu = () => {
    const navWidth = navRef.current.offsetWidth;
    const moreWidth = 60;
    let currentWidth = moreWidth;
    const tempVisibleItems = [];
    const tempHiddenItems = [];

    allMenuItems.forEach(item => {
      const itemWidth = 100; 
      if (currentWidth + itemWidth < navWidth) {
        tempVisibleItems.push(item);
        currentWidth += itemWidth;
      } else {
        tempHiddenItems.push(item);
      }
    });

    setVisibleItems(tempVisibleItems);
    setHiddenItems(tempHiddenItems);
  };

  useEffect(() => {
    adjustMenu();
    window.addEventListener('resize', adjustMenu);
    return () => window.removeEventListener('resize', adjustMenu);
  }, []);

  return (
    <div className="App">
      <nav ref={navRef}>
        <ul>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          {visibleItems.map(item => (
            <li key={item.id}><a href={item.endpoint}>{item.label}</a></li>
          ))}
          {hiddenItems.length > 0 && (
            <li>
              More
              <ul className="dropdown">
                {hiddenItems.map(item => (
                  <li key={item.id}><a href={item.endpoint}>{item.label}</a></li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default App;