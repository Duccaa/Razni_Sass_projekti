const list = document.getElementById('list');
const button = document.getElementById('button');
const logo = document.getElementById('logo');
 
button.addEventListener('click', () => {
    list.classList.contains("block") 
    ? 
    list.classList.remove("block") 
    : 
    list.classList.add("block");
});

