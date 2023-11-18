import { useAtom } from "jotai"
import { parish } from "../../../lib/atom"
import ParishList from '../../../lib/parish'
import { useMediaQuery } from "react-responsive"
import { StaticImageData } from "next/image"

const InformativeHeader = () => {
  const [activeParish] = useAtom(parish)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
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
    <div className="informative-header">
      <div className="informative-container">
        <div>
          <button>
            <a href="https://autun.catholique.fr/">Diocèse d{"'"}Autun</a>
          </button>
        </div>
        {activeParish ? <div><b>Paroisse - </b>{isMobile ? parishTarget?.[activeParish]?.title.replace('de Paul', '').trim() : parishTarget?.[activeParish]?.title}</div> :
          <div>Pas de paroisse</div>}
      </div>
    </div>
  )
}

export default InformativeHeader