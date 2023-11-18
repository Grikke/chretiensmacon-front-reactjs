import { useAtom } from "jotai"
import { StaticImageData } from "next/image"

import { parish } from "../../lib/atom"
import ParishList from '../../lib/parish'
import { formatPhone } from "../../helper/string"

const Footer = () => {
  const [activeParish] = useAtom(parish)
  const parishTarget: {[key: string] : {
    title: string
    img?: StaticImageData
    description: string
    phone?: string
    mail?: string
    address?: string
    button: {
      title: string
      event?: () => void
    }
  }} = ParishList

  const dioceseContact = {
    phone: '03 85 86 97 30',
    address: '1 place cardinal Perraud|71407 AUTUN Cedex'
  }
  
  return (
    <footer>
      {activeParish && <div className="footer-container">
        <div className="footer-section">
          <p><b>Contact de la paroisse :</b></p>
          {parishTarget?.[activeParish]?.phone && <p><a href={`tel:${formatPhone(parishTarget?.[activeParish]?.phone)}`}>{parishTarget?.[activeParish]?.phone}</a></p>}
          {parishTarget?.[activeParish]?.mail && <p><a href={`mailto:${parishTarget?.[activeParish]?.mail}`}>{parishTarget?.[activeParish]?.mail}</a></p>}
        </div>
        <div className="footer-section">
          <p>Paroisse de {parishTarget?.[activeParish]?.title}</p>
          {typeof parishTarget?.[activeParish]?.address === "string" && parishTarget?.[activeParish]?.address.split('|').map(a =>(<p>{a}</p>))}
        </div>
      </div>}
      {!activeParish && <div className="footer-container">
        <div className="footer-section">
          <p><b>Contact du diocèse :</b></p>
          <p><a href={`tel:${formatPhone(dioceseContact.phone)}`}>{dioceseContact.phone}</a></p>
          {dioceseContact.address.split('|').map(a =>(<p>{a}</p>))}
        </div>
      </div>}
    </footer>
  )
}

export default Footer;