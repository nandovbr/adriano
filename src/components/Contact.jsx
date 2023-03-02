import React from "react";
// motion e variants
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {

  const handleClick = () => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email.value)) {
      throw new Error('Email inválido!');
    } else

    if (name.value === '' || email.value === '' || message.value === '') {
      throw new Error('Preencha todos os campos!');
    } else {
      alert('Mensagem enviada com sucesso!');
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texto */}
          <motion.div
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2
                tracking-wide'
              >
                Entrar em contato
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Preenhca o <br />
                formulário abaixo!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            action="https://api.staticforms.xyz/submit"
            method="POST"
            variants={ fadeIn('left', 0.3) }
            initial='hidden'
            whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6
            pb-24 p-6 items-start'
          >
            <input type="hidden" name="accessKey" value="afe08487-b3bb-4c42-b145-390a87734d09" />
            <input type="hidden" name="redirectTo" value="http://adrianojeronimo.com.br" />
            <input
              className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Seu email'
              name="email"
              id="email"
              required
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Seu nome'
              name="name"
              id="name"
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
                placeholder:text-white focus:border-accent transition-all
                resize-none mb-12'
              placeholder='Sua mensagem'
              name="message"
              id="message"
              required
            ></textarea>

            <button onClick={ handleClick } className='btn btn-lg'>Enviar mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;