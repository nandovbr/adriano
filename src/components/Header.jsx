import React from "react";
// Link
import { Link } from "react-scroll";
// imagens
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='https://www.instagram.com/adrianojeronimo_oficial/'>
            <img src={Logo} alt='logo' />
          </a>

          {/* botão */}
          <Link to='contact'>
            <button className='btn btn-sm'>Entrar em contato</button>
          </Link>
        </div>
      </div>
    </header>
  );
};