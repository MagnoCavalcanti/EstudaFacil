function activeItem(){
    const items = document.querySelectorAll('.item');
    console.log(items);
    items.forEach((item) => {
        console.log(item.children[0].innerHTML);
        console.log(window.location.pathname.split('/').pop());
        if (item.children[0].innerHTML.toLowerCase() + ".html" === window.location.pathname.split('/').pop()) {
            item.classList.add('ativo');
        }
    })
}

document.addEventListener('elementosCarregados', () => {
  activeItem();
});
//activeItem();