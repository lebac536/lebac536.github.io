const airtableApiKey = "keyrtJBT2Aig4aycb"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appsDk3MbmGxw5aIG/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

console.log(authenticatedUrl)


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
         
    }
})



