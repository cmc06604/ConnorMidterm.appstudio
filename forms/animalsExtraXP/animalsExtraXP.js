
let i = 0

for (i = 0; i < 2; i++) {

myAnimals =   ['dog', 'cat', 'horse', 'meerkat']

animalInput = prompt('Enter an animals name')

animalFinal = animalInput.toLowerCase()

myAnimals.push(animalFinal)
console.log(myAnimals)

lastAnimal = myAnimals[myAnimals.length - 1]

alert(`The last animal is a/an ${lastAnimal}`)



}