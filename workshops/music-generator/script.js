const airtableApiKey = "keyrtJBT2Aig4aycb"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appsDk3MbmGxw5aIG/Table%201"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey


//Step 4: Application
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()

})
jsonPromise.then ((data) => {
    const records = data.records
    console.log(records)

   let indieSongs = []
   let rockSongs = []
   let folkSongs = []

    

    for (let index = 0; index < records.length; index++) {

        const songIndex = records[index]

        const spotifyLink = records[index].fields.songUrl

        const imageUrl = records[index].fields.albumImage[0].url 

        const songGenre = records[index].fields.genre[0]

    

        

       

        const fields = records[index].fields
        

        const songName = records[index].fields.Name
        const artist = records[index].fields.Artist

        const songObject = document.getElementById("songObject")
        

        const imageLinkElement = document.createElement('a')
        imageLinkElement.setAttribute('href',spotifyLink)
        imageLinkElement.innerHTML = '<img src="' + imageUrl +'">'

        const songDetailsElement = document.createElement('div')
        songDetailsElement.innerHTML = songName + " <br> " + artist
        songDetailsElement.setAttribute('id','songDetails')

        const songImage = document.getElementById("songImage")



        // give ids

    

        if (songGenre == "Indie") {
            console.log ('indie shit')
            indieSongs.push(imageLinkElement)
        }

        

        if (songGenre == "Rock") {
            console.log ('rock shit')
            rockSongs.push(imageLinkElement)
        }

        if (songGenre == "Folk") {
            console.log ('folk shit')
            folkSongs.push(imageLinkElement)

        }










 
    }



    document.getElementById("indie-button").addEventListener("click", showIndieSong)

    document.getElementById("rock-button").addEventListener("click", showRockSong)

    document.getElementById("folk-button").addEventListener("click", showFolkSong)


    console.log (indieSongs)
    function showIndieSong() {
        
        const randomNumber = Math.floor(Math.random() * 5)
        
        const randomIndie = indieSongs[randomNumber]

        songImage.appendChild(randomIndie)

        console.log (randomIndie)
        

    }


    console.log (rockSongs)
    function showRockSong() {
        
        const randomNumber = Math.floor(Math.random() * 5)
        
        const randomRock = rockSongs[randomNumber]

        songImage.appendChild(randomRock)

        

    }


    console.log (folkSongs)
    function showFolkSong() {
        
        const randomNumber = Math.floor(Math.random() * 5)
        
        const randomFolk = folkSongs[randomNumber]

        songImage.appendChild(randomFolk)

        

    }

})



