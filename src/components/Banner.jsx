import React from "react";
// imagens
import Image from "../assets/avatar.svg";
// ícones
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
// type animation e motion
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

export default function Banner() {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
          lg:gap-x-12'>

          {/* texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={ fadeIn('up', 0.2) }
              initial='hidden'
              whileInView={ 'show' }
              viewport={{ once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[60px]'
            >
              ADRIANO <span>JERONIMO.</span>
            </motion.h1>

            <motion.div
              variants={ fadeIn('up', 0.4) }
              initial='hidden'
              whileInView={ 'show' }
              viewport={{ once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary
              font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>Eu sou</span>
              <TypeAnimation sequence={[
                'Compositor',
                2000,
                'Cantor',
                2000,
                'Servo de Deus',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={ Infinity }
              />

            </motion.div>
              <motion.p
                variants={ fadeIn('up', 0.5) }
                initial='hidden'
                whileInView={ 'show' }
                viewport={{ once: false, amount: 0.7}}
                className='mb-8 max-w-lg mx-auto lg:mx-0'
              >
                Sou natural de Brasília, casado com uma esmotin.posa linda (Alba Valéria) e do fruto de nossa união
                temos dois filhos igualmente lindos: Daniela e Davi. Eu e minha casa servimos ao Senhor,
                criador dos céus e da Terra, o qual, mediante a graça em Cristo Jesus, nos resgatou e reconciliou
                consigo mesmo, para o louvor de sua glória (2 Coríntios 5:18).
                A música entrou na minha vida desde 2001, quando entreguei minha vida a Cristo. Desde então, tenho
                juntamente com minha família, servido ao Senhor com música, intercessão e ensino, nas igrejas em que congregamos.
              </motion.p>

              <motion.div
                variants={ fadeIn('up', 0.6) }
                initial='hidden'
                whileInView={ 'show' }
                viewport={{ once: false, amount: 0.7}}
                className='flex max-w-max gap-x-6 items-center mb-12
                mx-auto lg:mx-0'
              >
                {/* <button className='btn btn-lg'>Contate-me</button> */}
                <a href='https://open.spotify.com/artist/3iCPnjXteV4JGPTZyYTdHp' className='text-gradient btn-link'>
                  Minhas Músicas
                </a>
              </motion.div>

              {/* sociais */}
              <motion.div
                variants={ fadeIn('up', 0.7) }
                initial='hidden'
                whileInView={ 'show' }
                viewport={{ once: false, amount: 0.7}}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
              >
                <a href='https://www.youtube.com/@adrianojeronimo'>
                  <FaYoutube />
                </a>

                <a href='https://open.spotify.com/artist/3iCPnjXteV4JGPTZyYTdHp'>
                  <FaSpotify />
                </a>

                <a href='https://www.instagram.com/adrianojeronimo_oficial/'>
                  <FaInstagram />
                </a>
              </motion.div>

          </div>

          {/* imagem */}
          <motion.div
            variants={ fadeIn('down', 0.5) }
            initial='hidden'
            whileInView={ 'show' }
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={ Image } alt='imagem' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};