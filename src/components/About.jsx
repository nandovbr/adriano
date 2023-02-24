import React from "react";
// contagem regressiva
import CountUp from "react-countup";
// observador de interseção (intersection observer hook)
import { useInView } from "react-intersection-observer";
// motion e variant
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ ref }>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top'
          >
            
          </motion.div>

          {/* texto */}
          <motion.div
            variants={ fadeIn('left', 0.5) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Sobre mim.</h2>

            <h3 className='h3 mb-4'>
              Sou advogado, e desde 2001 cantor
            </h3>

            <p className='mb-6'>
              Possuo um canal no YouTube com os clipes das musicas que compus e
              canto. Também estão disponíveis nas plataformas digitais de audio.
            </p>

            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={22} duration={3} /> : null}
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de <br />
                  Experiência Cantando
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Músicas que <br />
                  Compus e Canto
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Clipes de <br />
                  Músicas
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contate-me</button>
              <a href='#' className='text-gradient btn-link'>
                Minhas Músicas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};