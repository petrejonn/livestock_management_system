/*
export function someMutation (state) {
}
*/
export function addLivestock (state, data) {
  state.livestocks.push(data)
}

export function deleteAllLivestocks (state) {
  state.livestocks = []
  state.animals = []
}

export function addNewAnimal (state, data) {
  state.animals.push(data)
}

export function deleteAllAnimals (state) {
  state.animals = []
}

export function updateDeath (state, data) {
  state.animals.find(animal => animal.type === data.livestockID && animal.id === data.animalID).death = data.val
}

export function updateSick (state, data) {
  state.animals.find(animal => animal.type === data.livestockID && animal.id === data.animalID).sick = data.val
}

export function updateGestating (state, data) {
  state.animals.find(animal => animal.type === data.livestockID && animal.id === data.animalID).gestating = data.val
}

export function updateSold (state, data) {
  state.animals.find(animal => animal.type === data.livestockID && animal.id === data.animalID).sold = data.val
}
