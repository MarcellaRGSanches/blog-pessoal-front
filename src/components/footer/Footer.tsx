// Atalho para criar componente: rfce | Pode apagar o import

import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  let data = new Date().getFullYear() //Metodo getFullYear só pega o ano da data em que a pessoa vê o site!

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: {data} </p>
          <p className='text-lg'>Acesse nossas redes sociais: </p>
          <div className='flex gap-2'>

            <a href="https://www.linkedin.com/in/marcellargsanches/" target="_blank">
              <LinkedinLogo size={42} />
            </a>
            <a href="https://www.instagram.com/rochaa_maah/" target="_blank">
              <InstagramLogo size={42} />
            </a>
            <a href="https://github.com/MarcellaRGSanches" target="_blank">
              <GithubLogo size={42} />
            </a>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;