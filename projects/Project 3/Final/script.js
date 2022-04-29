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
    console.log (records)

    for (let index = 0; index < records.length; index++) {
        const imageUrl = records[index].fields.Attachments[0].url
                                                
        const imageID = records[index].id

        // //Create Container

        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)
        imageElement.setAttribute('id',imageID)
        const allImages = document.querySelectorAll('img')

        //Add Container Element to DOM

        gridContainer.appendChild(containerElement)

        // Create Image IDs

        //blue
                                                //Add Image to Container in DOM

        containerElement.appendChild(imageElement)

                  const blueImages = records[index].fields.Blue  

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
                        document.getElementById("red-button").addEventListener("click", showRedImages)
                        document.getElementById("blue-button").addEventListener("click", showBlueImages)
                        document.getElementById("white-button").addEventListener("click", showWhiteImages)
                        document.getElementById("oneWord-button").addEventListener("click", showOneWordImages)
                        document.getElementById("twoOrThree-button").addEventListener("click", showTwoOrThreeWordImages)
                        document.getElementById("fourOrMore-button").addEventListener("click", showFourorMoreWordImages)
                        function showRedImages() {
                        for (let index = 0; index < records.length; index++) {
                           const imageID = document.getElementById(records[index].id)
                           imageID.style.display = "block";
                       }
                       for (let index = 0; index < records.length; index++) {
                                const redField = records[index].fields.Red
                                if (redField!=true) {
                                    const imageID = document.getElementById(records[index].id)
                                    console.log (imageID)
                                    imageID.style.display = "none";
                                }
                            }
                        }
                        function showBlueImages() {
                       for (let index = 0; index < records.length; index++) {
                           const imageID = document.getElementById(records[index].id)
                           imageID.style.display = "block";
                       }
                       for (let index = 0; index < records.length; index++) {
                                const blueField = records[index].fields.Blue
                                if (blueField!=true) {
                                    const imageID = document.getElementById(records[index].id)
                                    console.log (imageID)
                                    imageID.style.display = "none";
                                }
                            }
                        }
                        function showWhiteImages() {
                       for (let index = 0; index < records.length; index++) {
                           const imageID = document.getElementById(records[index].id)
                           imageID.style.display = "block";
                       }
                       for (let index = 0; index < records.length; index++) {
                                const whiteField = records[index].fields.White
                                if (whiteField!=true) {
                                    const imageID = document.getElementById(records[index].id)
                                    console.log (imageID)
                                    imageID.style.display = "none";
                                }
                            }
                        }
                        function showOneWordImages() {
                          for (let index = 0; index < records.length; index++) {
                              const imageID = document.getElementById(records[index].id)
                              imageID.style.display = "block";
                          }
                          for (let index = 0; index < records.length; index++) {
                                   const OneWordField = records[index].fields.oneword
                                   if (OneWordField!=true) {
                                       const imageID = document.getElementById(records[index].id)
                                       console.log (imageID)
                                       imageID.style.display = "none";
                                   }
                               }
                           }
                           function showTwoOrThreeWordImages() {
                            for (let index = 0; index < records.length; index++) {
                                const imageID = document.getElementById(records[index].id)
                                imageID.style.display = "block";
                            }
                            for (let index = 0; index < records.length; index++) {
                                     const twoOrThreeWordField = records[index].fields.twoorthreewords
                                     if (twoOrThreeWordField!=true) {
                                         const imageID = document.getElementById(records[index].id)
                                         console.log (imageID)
                                         imageID.style.display = "none";
                                     }
                                 }
                             }
                             function showFourorMoreWordImages() {
                              for (let index = 0; index < records.length; index++) {
                                  const imageID = document.getElementById(records[index].id)
                                  imageID.style.display = "block";
                              }
                              for (let index = 0; index < records.length; index++) {
                                       const fourOrMoreField = records[index].fields.fourormorewords
                                       if (fourOrMoreField!=true) {
                                           const imageID = document.getElementById(records[index].id)
                                           console.log (imageID)
                                           imageID.style.display = "none";
                                       }
                                   }
                               }
                        
                       
                        
                     






  
    
})