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
    console.log(records)
    for (let index = 0; index < records.length; index++) {
        const imageUrl = records[index].fields.Attachments[0].url
        console.log(imageUrl)

        // Filtering sorta lol or at least logging it to the console but not really filtering yet

        // red
        const isItRed = records[index].fields.Red
        if (isItRed == true) {
            console.log('this is red')    
        } 

        //white
        const isItWhite = records[index].fields.White
        if (isItWhite == true) {
            console.log('this is white')  
        } 

        //blue
        const isItBlue = records[index].fields.Blue
        if (isItBlue == true) {
            console.log('this is blue')  
        }

        //length
        const wordCount = records[index].fields.threeormorewords
        if (wordCount == true) {
            console.log('this phrase is 3 or more words')
        } else {
            console.log('this is a 1-2 word phrase') 
        }

        // //Create Container

        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')

        const redElement = document.createElement('div')
        redElement.classList.add('isitred')

        
        imageElement.setAttribute('src',imageUrl)

        //Add Container Element to DOM

        gridContainer.appendChild(containerElement)

        //Add Image to Container in DOM
        
        containerElement.appendChild(imageElement)

        // add is it red lol

        containerElement.appendChild(redElement)

  
    }
})



