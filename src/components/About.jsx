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
        <div>
          {/* img */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top'
          >
            
          </div>

          {/* texto */}
          <div>
            <h2>Sobre mim.</h2>

            <h3>
              Eu sou advogado, e desde 2001 cantor
            </h3>

            <p>
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
          </div>
        </div>
      </div>
    </section>
  );
};