const toggles = document.querySelectorAll('.toggle')
const ketchup = document.querySelector('#ketchup')
const mustard = document.querySelector('#mustard')
const mayo = document.querySelector('#mayo')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    if(ketchup.checked && mustard.checked && mayo.checked){
        if(ketchup === theClickedOne){
            mayo.checked = false 
        }

        if(mustard === theClickedOne){
            ketchup.checked = false
        }

        if(mayo === theClickedOne){
            mustard.checked = false
        }
    }
}