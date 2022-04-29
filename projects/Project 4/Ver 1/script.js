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


    // making things

    for (let index = 0; index < records.length; index++) {

        const imageUrl = records[index].fields.Shape[0].url
        console.log(imageUrl)

        var letter = records[index].fields.Letter
        console.log (letter)



        var spaceWidth;
        var spaceHeight;

       const drawingElement = document.createElement('img')
       drawingElement.classList.add('drawings')
       drawingElement.setAttribute('src', imageUrl)

       const container = document.getElementById("container")

       
    
    
    
        window.addEventListener("keydown", function(event) {
           
            if (event.code === "KeyA"){

                            
                container.appendChild(drawingElement)
                drawingElement.style.top = Math.round(Math.random() * spaceWidth) + 'px';
                drawingElement.style.left = Math.round(Math.random() * spaceHeight) + 'px';

                

                
    
                
            } 
            if (event.code === "b"){
            
            } 
             if (event.code === "c"){
              
    
            } 
            if (event.code === "d"){
    
            }
          }, true);


    }





})




