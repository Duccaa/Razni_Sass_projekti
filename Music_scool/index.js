const list = document.getElementById('list');
const button = document.getElementById('button');
const i = document.getElementById('toggle');
 
button.addEventListener('click', () => {

    list.classList.contains("block") 
    ? 
    list.classList.remove("block") 
    : 
    list.classList.add("block");

    if(i.classList.contains("fa-bars")) {
        i.classList.remove("fa-bars");
        i.classList.add("fa-times")
    } else {
        i.classList.remove("fa-times");
        i.classList.add("fa-bars");
    }

});
