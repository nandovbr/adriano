import React from "react";
// ícones
import { BsArrowUpRight } from "react-icons/bs";
// motion e variant
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: 'Rei da Glória',
    description:
      `Levantai, ó portas, as vossas cabeças; Levantai-vos, ó portais eternos,
      para que entre o Rei da Glória. (Salmos 24:7)`,
    link: 'Ver mais', // link para o video no youtube
  },

  {
    name: 'Sementes',
    description:
      `Porque, onde estiver o teu tesouro, aí também estará
      o teu coração. (Mateus 6:21)`,
    link: 'Ver mais', // link para o video no youtube
  },

  {
    name: 'Sementes Lado B',
    description:
      `Não acumuleis para vós outros tesouros sobre a terra,
      onde a traça e a ferrugem corroem e onde ladrões escavam e roubam;
      20 mas ajuntai para vós outros tesouros no céu, onde traça nem
      ferrugem corrói, e onde ladrões não escavam, nem roubam; 21 porque,
      onde está o teu tesouro, aí estará também o teu coração. (Mateus 6:19-21)`,
    link: 'Ver mais', // link para o video no youtube
  },

  {
    name: 'Ontem, Hoje e Sempre',
    description:
      `Porque foi subindo como renovo perante ele e como raiz de uma terra seca;
      não tinha aparência nem formosura; olhamo-lo, mas nenhuma beleza havia que
      nos agradasse. 3 Era desprezado e o mais rejeitado entre os homens;
      homem de dores e que sabe o que é padecer; e, como um de quem os homens
      escondem o rosto, era desprezado, e dele não fizemos caso. (saias 53:2-3)`,
    link: 'Ver mais', // link para o video no youtube
  },
];

export default function Services() {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texto e imagem */}
          <motion.div
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
            mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>Por que eu canto?</h2>
            <h3 className='h3 max-2-[455px] mb-16'>
              A Bíblia é a minha fonte de inspiração, e minha voz é o meu
              instrumento para louvar a Deus e espalhar a sua palavra através
              da música.
            </h3>

            <a href='https://open.spotify.com/artist/3iCPnjXteV4JGPTZyYTdHp'>
              <buton className='btn btn-sm'>Ouça pelo Spotify</buton>
            </a>
          </motion.div>

          {/* serviços */}
          <motion.div
            variants={ fadeIn('left', 0.5) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1'>
            {/* lista de serviços */}
            <div>
              {services.map((service, index) => {
                // desestruturação do objeto service
                const { name, description, link } = service;

                return (
                  <div
                    className='border-b border-white/20 h-[200px] mb-[38px] flex'
                    key={ index }
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                      font-semibold mb-6'>
                        { name }
                      </h4>
                      <p className='font-secondary leading-tight'>
                        { description }
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='https://www.youtube.com/@adrianojeronimo'
                        className='btn w-9 h-9 mb-[42px] flex justify-center
                        items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='https://www.youtube.com/@adrianojeronimo' className='text-gradient text-sm'>
                        { link }
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};