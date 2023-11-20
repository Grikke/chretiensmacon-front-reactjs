import Map from '../components/app-components/Map/Map'
import CustomHead from '../components/app-components/CustomHead'

type IHomePage = {
}

export default function Home({} : IHomePage) {
  return (
    <div>
      <CustomHead/>
      <div className="section-container">
        <h2>Paroisses Catholiques du Mâconnais</h2>
        <Map/>
      </div>
    </div>
  )
}
