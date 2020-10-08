/*
export function someGetter (state) {
}
*/

export function livestockName (state) {
  return (code) => state.livestocks.find(livestock => livestock.code === code).name
}

export function getAnimals (state) {
  return (param) => {
    if (param.filter === 'sick') {
      return state.animals.filter(animal => animal.type === param.livestockID && animal.sick === true && animal.death === false && animal.sold === false)
    } else if (param.filter === 'gestating') {
      return state.animals.filter(animal => animal.type === param.livestockID && animal.gestating === true && animal.death === false && animal.sold === false)
    } else if (param.filter === 'sold') {
      return state.animals.filter(animal => animal.type === param.livestockID && animal.sold === true)
    } else if (param.filter === 'death') {
      return state.animals.filter(animal => animal.type === param.livestockID && animal.death === true)
    } else {
      return state.animals.filter(animal => animal.type === param.livestockID && animal.death === false && animal.sold === false)
    }
  }
}

export function getAnimal (state) {
  return (livestockID, animalID) => state.animals.find(animal => animal.type === livestockID && animal.id === animalID)
}

export function nextAnimalID (state) {
  return (livestockID) => Math.max(...state.animals.filter(animal => animal.type === livestockID).map(anim => anim.id), 100) + 1
}

export function animalsCount (state) {
  return (livestockID) => state.animals.filter(animal => animal.type === livestockID && animal.death === false && animal.sold === false).length
}

export function sickCount (state) {
  return (livestockID) => state.animals.filter(animal => animal.type === livestockID && animal.sick === true && animal.death === false && animal.sold === false).length
}

export function gestationCount (state) {
  return (livestockID) => state.animals.filter(animal => animal.type === livestockID && animal.gestating === true && animal.death === false && animal.sold === false).length
}

export function deathCount (state) {
  return (livestockID) => state.animals.filter(animal => animal.type === livestockID && animal.death === true).length
}

export function soldCount (state) {
  return (livestockID) => state.animals.filter(animal => animal.type === livestockID && animal.sold === true).length
}
