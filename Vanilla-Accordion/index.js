
// Getting reference for accordion items and items
let accordionArrows = document.getElementsByClassName('accordion-arrow');
let accordionItems = document.getElementsByClassName('item');


// Accordion button event listner
for(let i =0 ; i<accordionArrows.length; i++){
    accordionArrows[i].addEventListener("click", ()=>{
        accordionArrows[i].classList.toggle('accordion-arrow-reversed')
        accordionItems[i].classList.toggle('open-item')
        return null;
    })
}
