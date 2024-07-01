let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el");

let count = 0


    



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    
    let currentTotal=parseInt(totalEl.innerText.split(": ")[1]) 

    let newTotal = currentTotal+count 
    totalEl.innerText = "Total: " + newTotal;
  
  // Reset countEl and count
    countEl.textContent = 0;
    count = 0;
}

function decrement() {
    if (count>0){
    count -= 1
    countEl.textContent = count
}
    }
    
