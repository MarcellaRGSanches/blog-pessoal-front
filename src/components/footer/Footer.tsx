import {GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import AuthContext from '../../contexts/AuthContex'
import { ReactNode, useContext } from 'react'

function Footer() {

  let data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let component: ReactNode;

  if (usuario.token !== "") {

    component = (
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="flex flex-col items-center py-4 container">
          <p className='font-bold text-xl'>
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
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
    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Footer;
