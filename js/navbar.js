function activeItem(){
    const items = document.querySelectorAll('.item');
;
    items.forEach((item) => {
        if (item.children[0].innerHTML.toLowerCase() + ".html" === window.location.pathname.split('/').pop()) {
            item.classList.add('ativo');
        }
    })
}

document.addEventListener('elementosCarregados', () => {
  activeItem();
});
//activeItem();