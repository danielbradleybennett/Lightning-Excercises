// Use string template literal syntax to create the following sentence from the following variables:
const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

const sentence =`Hi. My name is ${name} and I am ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years Ill be ${futureAge}! I guess that means I'll be a ${dadJoke}then. Ha ha.`
console.log(sentence)

const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]
const myFavoriteFood = (buzz) => {
  let newArray = []
  for (let index = 0; index < buzz.length; index++) {
    const element = buzz[index];
    console.log(element)
    if(element.startsWith("a") || element.startsWith
    ("t")) {newArray.push(element)}

    return newArray
  }
}
console.log(myFavoriteFood(foodArray))


