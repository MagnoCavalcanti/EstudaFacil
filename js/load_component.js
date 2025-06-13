async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    document.dispatchEvent(new Event('elementosCarregados'));
}

loadComponent("navbar", "components/navbar.html");
loadComponent("modal", "components/modal.html");

