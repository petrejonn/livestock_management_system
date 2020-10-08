import Menu from 'components/Menu'
import AddAnimal from 'components/AddAnimal'
import ListAnimals from 'components/ListAnimals'
import DetailAnimal from 'components/DetailAnimal'
import AddLivestock from 'components/AddLivestock'

export default async ({
  Vue
}) => {
  Vue.component('app-menu', Menu)
  Vue.component('add-animal', AddAnimal)
  Vue.component('list-animals', ListAnimals)
  Vue.component('detail-animal', DetailAnimal)
  Vue.component('add-livestock', AddLivestock)
}
