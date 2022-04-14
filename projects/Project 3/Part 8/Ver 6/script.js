// Step 1: Variables

const airtableApiKey = "keyrtJBT2Aig4aycb"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appH4cE32xMzSIWDO/NEON%20SIGNS"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

// Step 2: Dom References
const gridContainer = document.querySelector('#grid')




//Step 4: Application
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()

})
jsonPromise.then ((data) => {
    const records = data.records
    // console.log(records)

    for (let index = 0; index < records.length; index++) {
        const imageUrl = records[index].fields.Attachments[0].url


        // Filtering sorta lol or at least logging it to the console but not really filtering yet



        // //Create Container

        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        // const imageElement = document.createElement('img')
        // imageElement.classList.add('image')


    



        
        // imageElement.setAttribute('src',imageUrl)

        //Add Container Element to DOM

        gridContainer.appendChild(containerElement)

        //Add Image to Container in DOM
        
        // containerElement.appendChild(imageElement)

        //COLOUR
        // red
        const redImage = records[index].fields.Red == true

        if (redImage == true) {
            // console.log(imageUrl)
            console.log('this is red')    
            const redImageElement = document.createElement('img')
            redImageElement.classList.add('image')
            redImageElement.setAttribute('id','redImage')
            redImageElement.setAttribute('src',imageUrl)
            containerElement.appendChild(redImageElement)
            
            
        } 
   

        //white
        // const whiteImage = records[index].fields.White
        // if (whiteImage == true) {
        //     console.log('this is white')  
           
        // } 

        // //blue
        // const blueImage = records[index].fields.Blue
        // if (blueImage == true) {
        //     console.log('this is blue')  
            
        // }




        //LENGTH
        // const longWordCount = records[index].fields.fourormorewords

        // const oneWord = records[index].fields.oneword

        // const twoOrThreeWords = records[index].fields.twoorthreewords

        // if (longWordCount == true) {
        //     console.log('this phrase is 4 or more words')
        // } 
        // if (oneWord == true){
        //     console.log('this is 1 word') 
        // }
        // if (twoOrThreeWords == true){
        //     console.log('this phrase is 2-3 words long')
        // }


























        

            
        //make buttons work

        //filters

        document.getElementById("color").addEventListener("click", showColorSubFilters);

        document.getElementById("word-count").addEventListener("click", showWordSubFilters);
        
        function showColorSubFilters() {
            var x = document.getElementById("colors-subfilters");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
        }
        }
        
        function showWordSubFilters() {
            const x = document.getElementById("word-subfilters");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
        }
        }

        //subfilters

        document.getElementById("red-button").addEventListener("click", showRedImages);

        function showRedImages() {
          const x = document.getElementById("redImage");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
      }
      }






  
    }
})






