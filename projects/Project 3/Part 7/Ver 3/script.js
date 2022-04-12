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
    for (let index = 0; index < records.length; index++) {
        const imageUrl = records[index].fields.Attachments[0].url
        console.log(imageUrl)
        //Create Container
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')

        
        imageElement.setAttribute('src',imageUrl)
        //Add Container Element to DOM
        gridContainer.appendChild(containerElement)
        //Add Image to Container in DOM
        containerElement.appendChild(imageElement)
  
    }
})

// Filtering (or at least trying to im not super sure how to do this. lol.)



