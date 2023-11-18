import { useAtom } from "jotai"
import { StaticImageData } from "next/image"

import { parish } from "../../lib/atom"
import ParishList from '../../lib/parish'

const Footer = () => {
  const [activeParish] = useAtom(parish)
  const path: {[key: string]: string} = {
    '/': 'Accueil',
    '/actualites': 'Actualités',
    '/sacrements': 'Sacrements',
    '/informations': 'Informations',
    '/horaires': 'Horaires'
  }
  const parishTarget: {[key: string] : {
    title: string
    img?: StaticImageData
    description: string
    button: {
      title: string
      event?: () => void
    }
  }} = ParishList
  
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          Contact de la paroisse :
          <p>06 95 43 87 71</p>
          <p>arnaud@scritracius.fr</p>
        </div>
        <div className="footer-section">
          Test
        </div>
      </div>
    </footer>
  )
}

export default Footer;