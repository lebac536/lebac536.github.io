const airtableApiKey = "keyrtJBT2Aig4aycb"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appHgW8fzIokaWscs/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

let currentColor = 0


//JSON STUFF :)

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()



   

})
jsonPromise.then ((data) => {

    const records = data.records
    console.log (records)

    const container = document.querySelector('#container')

    let color1 = document.getElementsByClassName("color1")
    let color2 = document.getElementsByClassName("color2")
    



    let containerWidth = container.clientWidth
    let containerHeight = container.clientHeight

    function convertPXToVH(px) {
        return px * (100 / document.documentElement.clientHeight);
    } 

    function convertPXToVW(px) {
        return px * (100 / document.documentElement.clientWidth);
    } 




    

    



    const generateRandomNumberBetweenValues = (valueOne, valueTwo) => {
        const randomNumber = Math.floor(Math.random() * valueTwo) + valueOne;
        return randomNumber;}



    // making things

    for (let index = 0; index < records.length; index++) {

        const imageUrl = records[index].fields.Shape[0].url

        
        


        //letters 
        const letter = records[index].fields.Letter


    
        // LETTER IMAGES
    
        window.addEventListener("keydown", function(event) {
           
            if (event.code === "KeyA"){

                if (letter == 'a') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)

                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'

                    


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }


                 container.appendChild(drawingElement)

                }





                
            } 

            if (event.code === "KeyB"){

                if (letter == 'b') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'

                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
            
            } 
             if (event.code === "KeyC"){

                if (letter == 'c') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'

                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
              
    
            } 
            if (event.code === "KeyD"){

                if (letter == 'd') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
    
            }

            if (event.code === "KeyE"){

                if (letter == 'e') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyF"){

                if (letter == 'f') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)

                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyG"){

                if (letter == 'g') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyH"){

                if (letter == 'h') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyI"){

                if (letter == 'i') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)

                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyJ"){

                if (letter == 'j') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyK"){

                if (letter == 'k') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyL"){

                if (letter == 'l') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyM"){

                if (letter == 'm') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyN"){

                if (letter == 'n') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyO"){

                if (letter == 'o') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyP"){

                if (letter == 'p') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyQ"){

                if (letter == 'q') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyR"){

                if (letter == 'r') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyS"){

                if (letter == 's') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyT"){

                if (letter == 't') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyU"){

                if (letter == 'u') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyV"){

                if (letter == 'v') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyW"){

                if (letter == 'w') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyX"){

                if (letter == 'x') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyY"){

                if (letter == 'y') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color1')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)  "
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }

            if (event.code === "KeyZ"){

                if (letter == 'z') {
                    let drawingElement = document.createElement('img')
                    drawingElement.classList.add('color2')
                    drawingElement.setAttribute('src', imageUrl)
                    drawingElement.setAttribute ('id', letter)


                    const objectHeight = convertPXToVH(generateRandomNumberBetweenValues( 30, 300)) + 'vh'

                    const randomY =  convertPXToVH(generateRandomNumberBetweenValues( 0, containerHeight)) + 'vh'
                    const randomX = convertPXToVW(generateRandomNumberBetweenValues( 0, containerWidth)) + 'vw'


                drawingElement.style.top = randomY;
                drawingElement.style.left = randomX;
                drawingElement.style.height = objectHeight;

                if(currentColor === 0) {
                    drawingElement.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }
                if(currentColor === 1) {
                    drawingElement.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
                }
                if(currentColor === 2) {
                    drawingElement.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                }
                if(currentColor === 3) {
                    drawingElement.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                }
                if(currentColor === 4) {
                    drawingElement.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                }
                if(currentColor === 5) {
                    drawingElement.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                }
                if(currentColor === 6) {
                    drawingElement.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                }
                if(currentColor === 7) {
                    drawingElement.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                }
                if(currentColor === 8) {
                    drawingElement.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                }
                if(currentColor === 9) {
                    drawingElement.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                }

                 container.appendChild(drawingElement)

                }
 
            }


            // numbers

            if (event.code === "Digit0"){
                currentColor = 0
                container.style.backgroundColor = 'white';
                
                    color1 = document.getElementsByClassName("color1")
                    color2 = document.getElementsByClassName("color2")
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(52%) sepia(0%) saturate(154%) hue-rotate(223deg) brightness(95%) contrast(84%)"
                }

            }    

            if (event.code === "Digit1"){
                currentColor = 1
                container.style.backgroundColor = '#88A2AA';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(71%) sepia(23%) saturate(168%) hue-rotate(351deg) brightness(89%) contrast(86%)"

                }

            for (let index = 0; index < color2.length; index++) {
                const element = color2[index];
                element.style.filter = "invert(60%) sepia(29%) saturate(816%) hue-rotate(324deg) brightness(97%) contrast(82%)"
            }


         

            
            }

            if (event.code === "Digit2"){
                currentColor = 2
                container.style.backgroundColor = '#F4A1B0';


                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(44%) sepia(98%) saturate(4332%) hue-rotate(328deg) brightness(99%) contrast(84%)"
                 }
    
            }


            if (event.code === "Digit3"){
                currentColor = 3

                container.style.backgroundColor = '#D3D4D9';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")

                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(16%) sepia(61%) saturate(6500%) hue-rotate(342deg) brightness(79%) contrast(109%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(50%) sepia(39%) saturate(500%) hue-rotate(153deg) brightness(90%) contrast(90%)"
                 }
    
            }

            if (event.code === "Digit4"){
                currentColor = 4

                container.style.backgroundColor = '#A58BEF';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(15%) sepia(90%) saturate(6391%) hue-rotate(258deg) brightness(66%) contrast(99%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(30%) sepia(18%) saturate(5011%) hue-rotate(234deg) brightness(94%) contrast(94%)"
                 }
    
            }

            if (event.code === "Digit5"){
                currentColor = 5

                container.style.backgroundColor = '#A38560';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(30%) sepia(9%) saturate(1704%) hue-rotate(103deg) brightness(102%) contrast(84%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(93%) sepia(13%) saturate(1170%) hue-rotate(30deg) brightness(105%) contrast(95%)"
                 }
    
            }

            if (event.code === "Digit6"){
                currentColor = 6

                container.style.backgroundColor = '#FADF63';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(77%) sepia(29%) saturate(315%) hue-rotate(307deg) brightness(106%) contrast(95%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(50%) sepia(25%) saturate(498%) hue-rotate(93deg) brightness(91%) contrast(87%)"
                 }
    
            }

            if (event.code === "Digit7"){
                currentColor = 7


                container.style.backgroundColor = '#F4E8C1';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(81%) sepia(5%) saturate(1057%) hue-rotate(115deg) brightness(92%) contrast(88%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(67%) sepia(8%) saturate(1431%) hue-rotate(148deg) brightness(89%) contrast(82%)"
                 }
    
            }

            if (event.code === "Digit8"){
                currentColor = 8

                container.style.backgroundColor = '#FFC3A9';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(67%) sepia(20%) saturate(2028%) hue-rotate(311deg) brightness(108%) contrast(90%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(21%) sepia(11%) saturate(170%) hue-rotate(314deg) brightness(100%) contrast(84%)"
                 }
    
            }

            if (event.code === "Digit9"){
                currentColor = 9

                container.style.backgroundColor = '#A4AF69';

                color1 = document.querySelectorAll(".color1")
                color2 = document.querySelectorAll(".color2")
                
                for (let index = 0; index < color1.length; index++) {
                    const element = color1[index];
                    element.style.filter = "invert(88%) sepia(2%) saturate(1661%) hue-rotate(314deg) brightness(108%) contrast(94%)"

                }

                for (let index = 0; index < color2.length; index++) {
                    const element = color2[index];
                    element.style.filter = "invert(28%) sepia(18%) saturate(915%) hue-rotate(79deg) brightness(95%) contrast(81%)"
                 }
    
            }

          }, true);




    }





})




