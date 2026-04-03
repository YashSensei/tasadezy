// Read and patch Header.jsx
const fs = require('fs');
let code = fs.readFileSync('src/components/Header.jsx', 'utf8');

// Insert useState, useEffect import if not there
if (!code.includes('useState')) {
  code = code.replace('import React from "react";', 'import React, { useState, useEffect } from "react";');
}

// Add state inside component
code = code.replace('export default function Header() {', `export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
`);

fs.writeFileSync('src/components/Header.jsx', code);
