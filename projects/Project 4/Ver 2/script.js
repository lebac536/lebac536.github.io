const airtableApiKey = "keyrtJBT2Aig4aycb"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appHgW8fzIokaWscs/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey





//JSON STUFF :)

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()



   

})
jsonPromise.then ((data) => {

    const records = data.records
    console.log (records)

    const container = document.querySelector('#container')



    let containerWidth = container.clientWidth
    let containerHeight = container.clientHeight

    

    



    const generateRandomNumberBetweenValues = (valueOne, valueTwo) => {
        const randomNumber = Math.floor(Math.random() * valueTwo) + valueOne;
        return randomNumber;}



    // making things

    for (let index = 0; index < records.length; index++) {

        const imageUrl = records[index].fields.Shape[0].url
        


        //letters 
        const letter = records[index].fields.Letter

        console.log (letter)



       

      
        
    



















       
    
    
    
        window.addEventListener("keydown", function(event) {
           
            if (event.code === "KeyA"){

                if (letter == 'a') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }





                
            } 

            if (event.code === "KeyB"){

                if (letter == 'b') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
            
            } 
             if (event.code === "KeyC"){

                if (letter == 'c') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
              
    
            } 
            if (event.code === "KeyD"){

                if (letter == 'd') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
    
            }

            if (event.code === "KeyE"){

                if (letter == 'e') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyF"){

                if (letter == 'f') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyG"){

                if (letter == 'g') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyH"){

                if (letter == 'h') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyI"){

                if (letter == 'i') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyJ"){

                if (letter == 'j') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyK"){

                if (letter == 'k') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyL"){

                if (letter == 'l') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyM"){

                if (letter == 'm') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyN"){

                if (letter == 'n') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyO"){

                if (letter == 'o') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyP"){

                if (letter == 'p') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyQ"){

                if (letter == 'q') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyR"){

                if (letter == 'r') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyS"){

                if (letter == 's') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyT"){

                if (letter == 't') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyU"){

                if (letter == 'u') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyV"){

                if (letter == 'v') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyW"){

                if (letter == 'w') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyX"){

                if (letter == 'x') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyY"){

                if (letter == 'y') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyZ"){

                if (letter == 'z') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('drawings')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const randomY =  generateRandomNumberBetweenValues( 0, containerHeight) + 'px'
                    const randomX = generateRandomNumberBetweenValues( 0, containerWidth) + 'px'

                    const objectHeight = generateRandomNumberBetweenValues( 30, 300) + 'px'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                 container.appendChild(drawingElement)

                }
 
            }


            // numbers


          }, true);


    }





})




