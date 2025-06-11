let form = document.querySelector('form');

        form.onsubmit = function(event) {
            event.preventDefault();
            
            window.location.href = "/main.html";
        }
    