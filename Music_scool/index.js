const list = document.getElementById('list');
const button = document.getElementById('button');
 
button.addEventListener('click', () => {
    list.classList.contains("block") 
    ? 
    list.classList.remove("block") 
    : 
    list.classList.add("block");
});

