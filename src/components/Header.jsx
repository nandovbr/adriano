import React from "react";
// imagens
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='logo' />
          </a>

          {/* botão */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};