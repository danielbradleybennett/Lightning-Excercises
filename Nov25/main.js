let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  

    for (const singleNum of listOfNumbers) {
      if (singleNum % 2 === 0) {
          console.log(`${singleNum} is even!`);
      } else {
          console.log(`${singleNum} is odd!`);
      }
  }



  //Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"
    const eyeColor = "green"
    const hairColor = "purple"
    const height = "2ft"
    if (eyeColor === "blue" && hairColor === "red" && height === "6ft"){
        console.log(`${hairColor} hair, ${eyeColor} eyes, ${height} tall`)
    }
    else{
        console.log("not a match")
    }