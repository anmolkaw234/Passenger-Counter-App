// document.getElementById("count-el").innerText=5

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// Using camelCase convention
let countEl = document.getElementById("count-el") // pass in argument
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
// 2. Call save() when the count is incremented
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph

count = 0
countEl.innerText = count

    //console.log(count)
}






















