import Link from 'next/link'
import CustomHead from '../../components/app-components/CustomHead'
import { useAtomValue, useSetAtom } from 'jotai'
import { loading, parish } from '../../lib/atom'



export default function ServicesPage() {
  const setLoading = useSetAtom(loading)
  const activeParish = useAtomValue(parish)
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
          <Link onClick={() => setLoading(true)} href={`/services/spiritualite`} className="page-item">
            <div className="title">
              Spiritualité
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
          <Link onClick={() => setLoading(true)} href={`/centre-pastoral`} className="page-item">
            <div className="title">
              Centre Pastoral
            </div>
          </Link>
          <Link onClick={() => setLoading(true)} href={`/${activeParish}`} className="page-item">
            <div className="title">
              Annonces Paroissiales
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
