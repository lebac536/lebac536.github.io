
onload = showTime()

function showTime () {
    const today = new Date
    let hours = today.getHours ();
    let minutes = today.getMinutes ();
    let seconds = today.getSeconds ();


    const currentTime = "in new york city it is " + hours + ":" + minutes + " and " + seconds + " seconds"
    document.getElementById('NYCTime').innerHTML = currentTime
    setTimeout(startTime, 1000);
}