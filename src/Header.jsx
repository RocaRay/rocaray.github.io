import React, { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState('About')
  return (
    <div className="header">
      <a href="#about" className={selected === 'About' ? 'selected' : ''} onClick={() => setSelected('About')}>About</a>
      <a href="#portfolio" className={selected === 'Portfolio' ? 'selected' : ''} onClick={() => setSelected('Portfolio')}>Portfolio</a>
      <a href="#tech" className={selected === 'Tech Stack' ? 'selected' : ''} onClick={() => setSelected('Tech Stack')}>Tech Stack</a>
    </div>
  )
}

export default Header;