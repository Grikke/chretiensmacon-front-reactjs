import VincentImg from '../public/map/vincent.jpg'
import EstienneImg from '../public/map/estienne.jpg'

export default  {
  estienne: {
    title: 'Saint Etienne',
    img: EstienneImg,
    phone: '03 85 38 00 02',
    mail: 'psedm@wanadoo.fr',
    address: '20 rue des Minimes|71000 Mâcon',
    description: 'Créée en 2002, elle est au service des chrétiens pour qu’ils vivent de leur foi et la proclament.',
    button: {
      title: 'Visiter la paroisse',
    }
  },
  vincent: {
    title: 'Saint Vincent de Paul',
    img: VincentImg,
    phone: '03 85 34 23 39',
    mail: 'paroissestvincentdepaul@wanadoo.fr',
    address: '131, impasse de l’Eglise|71000 Mâcon',
    description: 'Paroisse Saint Vincent de Paul',
    button: {
      title: 'Visiter la paroisse',
    }
  },
  vineyard: {
    title: 'Notre Dame des Vignes',
    description: 'Recouvrant 15 villages en Sud Mâconnais. Elle rend présent cet amour du Christ pour tous les hommes.',
    button: {
      title: 'Visiter la paroisse',
      event: () => window.location.href = "https://www.paroissendv.com/"
    }
  }
}