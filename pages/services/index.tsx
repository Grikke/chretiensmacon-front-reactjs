import Link from 'next/link'
import CustomHead from '../../components/app-components/CustomHead'
import { useSetAtom } from 'jotai'
import { loading } from '../../lib/atom'



export default function ServicesPage() {
  const setLoading = useSetAtom(loading)
  return (
    <div>
      <CustomHead title={"Services"} description="Informations sur les services du Doyenné de Mâcon."/>
      <div className="section-container">
        <h1>Services des Paroisses du Mâconnais</h1>
        <h2>Annuaire des Mouvements</h2>
        <div className="page-container">
          <Link onClick={() => setLoading(true)} href={`/services/jeunes`} className="page-item">
            <div className="title">
              Jeunesse
            </div>
          </Link>
          <Link onClick={() => setLoading(true)} href={`/services/mouvements`} className="page-item">
            <div className="title">
              Associations
            </div>
          </Link>
          <Link onClick={() => setLoading(true)} href={`/services/equipe`} className="page-item">
            <div className="title">
              Équipe Paroissiale
            </div>
          </Link>
        </div>
      </div>
      <div className="section-container">
        <h2>Demander des informations</h2>
        <div className="page-container">
          <Link onClick={() => setLoading(true)} href={`/sacrements`} className="page-item">
            <div className="title">
              Sacrements
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
