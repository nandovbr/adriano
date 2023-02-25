import React from "react";
// motion e variant
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// imagens
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

export default function Work() {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* texto */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Minha Família <br />
                e Carreira.
              </h2>
              <p className='max-w-sm mb-16'>
                Jesus é o Rei da Glória Jesus é o Rei da Glória Jesus é o Rei da Glória 
                Jesus é o Rei da Glória Jesus é o Rei da Glória Jesus é o Rei da Glória 
                Jesus é o Rei da Glória Jesus é o Rei da Glória Jesus é o Rei da Glória 
              </p>

              <a href='https://open.spotify.com/artist/3iCPnjXteV4JGPTZyYTdHp'>
                <button className='btn btn-sm'>Todas as Músicas</button>
              </a>

            </div>
            {/* imagem */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={ Img1 }
                alt='imagem do projeto'
              />
              {/* pre titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'
              >
                <span className='text-gradient '>Família</span>
              </div>
              {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'
              >
                <span className='text-3x1 text-white'>Minha Esposa e Filhos</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={ fadeIn('left', 0.2) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 flex flex-col gap-y-10'>
            {/* imagem */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={ Img3 }
                alt='imagem do projeto'
              />
              {/* pre titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'
              >
                <span className='text-gradient '>Rei da Glória</span>
              </div>
              {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'
              >
                <span className='text-3x1 text-white'>Lançamento Recente</span>
              </div>
            </div>
            {/* imagem */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={ Img2 }
                alt='imagem do projeto'
              />
              {/* pre titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'
              >
                <span className='text-gradient '>Sementes</span>
              </div>
              {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'
              >
                <span className='text-3x1 text-white'>Primeiras Músicas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};