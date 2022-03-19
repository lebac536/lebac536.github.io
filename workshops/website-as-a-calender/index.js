// get the element
var div1 = document.getElementById('title');

// set an event listener for it
div1.addEventListener('click',function(){
//   create a new div
  var div2 =  document.createElement('div');
//   giv that div an id of two
  div2.setAttribute("id", "clock");
//   append the new div to the dom
  this.parentNode.appendChild(div2);
//   remove the clicked div
  this.parentNode.removeChild(this);
});


const birthdayDate = new Date("Jun 21, 2022").getTime();


const x = setInterval(function(){
    const today = new Date().getTime();
    const distance = birthdayDate - today;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = "cam's next birthday is in " + days + " days, " + hours + " hours, "
    + minutes + " minutes, " + seconds + " seconds. she will be 20 years old.";

    if (distance < 0 ) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "happy birthday bitch. you turned 20";
    }
}, 1000);

