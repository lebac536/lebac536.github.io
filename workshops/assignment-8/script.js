const inputEventElement = document.querySelector('form#list-input')
const output = document.querySelector('form#list-input input')
const outputElement = document.querySelector('div#output')

inputEventElement.addEventListener('submit', () => {
    
    event.preventDefault()
    console.log (output.value)
    const value = output.value
    const outputList = document.createElement('p')
    outputList.innerHTML = value
    outputElement.appendChild(outputList)
})