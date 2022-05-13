
// Question 14

const colouredElement = document.querySelector("div#colored-element")

colouredElement.style.color = 'forestgreen'


//Question 15

const parentElement = document.querySelector("div#parent-element")

const childElement = document.createElement('p')

parentElement.appendChild(childElement)

const childText = document.createTextNode('This is the Child Element')

childElement.appendChild(childText)

// Question 16

const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]

for (let index = 0; index < forLoopArray.length; index++) {
    const element = forLoopArray[index];

    console.log (element)
    
}

// Question 17

const question17Button = document.querySelector('button#event-listener-button')

function logAnswer() {
    console.log ('clicked')
}

question17Button.addEventListener('click', logAnswer)