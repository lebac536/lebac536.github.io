// step 1: Variables

const airtableApiKey = "keyUdTIA7XPdyI7Vi"

const airtableDataBaseUrl = "https://api.airtable.com/v0/appNBOMaj7ch0wKcM/Illustrations"

const authenticatedUrl = airtableDataBaseUrl +"?api_key=" + airtableApiKey

// step 2: References to DOM

const illustrationContainerElement = document.querySelector('#illustrations')

//step 4: Application 

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
// what we do with the returned data
return response.json()
})
jsonPromise.then ((data) => {
    console.log (data)
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Image[0].url
        console.log(title)
        console.log (imageUrl)
        // Create Container
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        //Create Image Element
        const imageElement = document.createElement ('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)
        // Create Title Element
        const titleElement = document.createElement ('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title
        // Add Container Element to the DOM
        illustrationContainerElement.appendChild(containerElement)
        // Add Image Element to Container Element
        containerElement.appendChild(imageElement)
        //Add Title Element to Container Element
        containerElement.appendChild(titleElement)
    }

})

