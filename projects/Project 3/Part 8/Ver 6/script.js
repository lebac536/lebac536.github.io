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

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)

        //Add Container Element to DOM

        gridContainer.appendChild(containerElement)

        //Add Image to Container in DOM

        containerElement.appendChild(imageElement)

        const allImages = document.querySelectorAll('img')

        

        //COLOUR

        // RED 
        
        const redImage = records[index].fields.Red
        if (redImage == true) {
            console.log(imageUrl)
            console.log('this is red')    
            const redImageElement = document.createElement('img')
            redImageElement.classList.add('image')
            redImageElement.setAttribute('id','redImage')
            redImageElement.setAttribute('src',imageUrl)
            // containerElement.appendChild(redImageElement)
            
            
        } 
   

        //WHITE

        const whiteImage = records[index].fields.White
        if (whiteImage == true) {
            console.log('this is white') 
            const whiteImageElement = document.createElement('img')
            whiteImageElement.classList.add('image')
            whiteImageElement.setAttribute('id','whiteImage')
             
        } 

        // BLUE

        // const blueImage = records[index].fields.Blue
        // if (blueImage == true) {
        //     console.log('this is blue')
        //     const blueImageElement = document.createElement('img')
        //     blueImageElement.classList.add('image')
        //     blueImageElement.setAttribute('id','blueImage')
               
            
        // }

        const blueImage = 
        allImages.filter(allImages.index)




        //LENGTH
        const longWordCount = records[index].fields.fourormorewords

        const oneWord = records[index].fields.oneword


        const twoOrThreeWords = records[index].fields.twoorthreewords

        if (longWordCount == true) {
            console.log('this phrase is 4 or more words')
            const manyWordElement = document.createElement('img')
            manyWordElement.classList.add('image')
            manyWordElement.setAttribute('id','manyWordImage')
            
        } 


        if (oneWord == true){
            console.log('this is 1 word') 
            const oneWordElement = document.createElement('img')
            oneWordElement.classList.add('image')
            oneWordElement.setAttribute('id','oneWordImage')
           
        }


        if (twoOrThreeWords == true){
            console.log('this phrase is 2-3 words long')
            const twoOrThreeWordElement = document.createElement('img')
            twoOrThreeWordElement.classList.add('image')
            twoOrThreeWordElement.setAttribute('id','twoOrThreeWordImage')
           
        }




            
        //make buttons work

        //FILTERS

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

      //SUBFILTERS

      // word count

      const oneWordImages = document.querySelectorAll('#oneWordImage') 
      const twoOrThreeWordImages = document.querySelectorAll('#twoOrThreeWordImage')
      const longerWordImages = document.querySelectorAll ('#manyWordImage')

      // color

      const redImages = document.querySelectorAll ('#redImage')
      const blueImages = document.querySelectorAll ('#blueImage')
      const whiteImages = document.querySelectorAll ('#whiteImage')


        document.getElementById("oneWord-button").addEventListener("click", showOneWordImages);

        function showOneWordImages() {
          
          
          for (let index = 0; index < allImages.length; index++) {


            allImages.filter(x => x.id === 'oneWordImage')
        //     if (allImages.has) {
        //       oneWordImages.style.display = "block";
        //     } else {
        //       oneWordImages.style.display = "none";
        // }


        
            
            // oneWordImages.style.display = 'block';
            // twoOrThreeWordImages.style.display = 'none';
            // longerWordImages.style.display = 'none'
          }
        }

        















        // document.getElementById("twoOrThree-button").addEventListener("click", showTwoOrThreeWordImages);

        // function showTwoOrThreeWordImages() {
        //     const allImages = document.querySelectorAll('img')
        //     const twoOrThreeWordImages = document.querySelectorAll('#twoOrThreeWordImage')
        //     for (let index = 0; index < twoOrThreeWordImages.length; index++) {
        //       if (twoOrThreeWordImages[index].style.display === "none") {
        //         twoOrThreeWordImages[index].style.display = "block";
        //       } else {
        //         twoOrThreeWordImages[index].style.display = "none";
        //       }
        //     }

        // }



      






  
    }
})






