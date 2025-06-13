function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.elements.titulo.value;
    const description = form.elements.descricao.value;
    const datetime = form.elements.entrega.value;
    const priority = form.elements.demanda.value;
    const type = form.elements.tipo.value;
    const discipline = form.elements.disciplina.value;


    if (new Date(datetime).getDay() === 0 || new Date(datetime).getDay() === 6) {
        alert("Não é possível criar uma tarefa em um dia de fim de semana.")
        return
    }

    if (title.length == 0 || datetime.length == 0 || type.length == 0 || discipline.length == 0) {
        alert("Preencha todos os campos")
        return
    }

    const newTask = {
        title,
        description,
        discipline,
        datetime,
        priority,
        type
    }

    createCard(newTask)


    document.getElementById('modal').close()


}

function createCard(task) {
    const dayCards = document.querySelectorAll(".day-card")
    let index = 1
    let card = document.createElement('div');
    card.classList.add('card');
    card = disciplineColor(task.discipline, card)
    card = borderColor(task.priority, card)
    card.appendChild(document.createElement("input:checkbox"))
    card.innerHTML += `${task.title} - ${task.type}`

    dayCards.forEach(dayCard => {
        const table = dayCard.children[0].children[0]

        console.log(table)


        if ((index) == new Date(task.datetime).getDay()) {
            for (let i in table.children) {
                if (table.children[i].children[0].innerHTML == "") {
                    table.children[i].children[0].appendChild(card)
                    break
                }
            }
            //dayCard.appendChild(card)
        }
        index++
    })


}

function disciplineColor(discipline, card) {

    switch (discipline) {
        case "Português":
            card.style.backgroundColor = "#FFB3B3";
            card.style.color = "#802020";
            break;
        case "Matemática":
            card.style.backgroundColor = "#A5D8FF";
            card.style.color = "#1A3A66";
            break;
        case "História":
            card.style.backgroundColor = "#FFD6A5";
            card.style.color = "#6B3E00";
            break;
        case "Geografia":
            card.style.backgroundColor = "#C2F5E9";
            card.style.color = "#00665C";
            break;
        case "Física":
            card.style.backgroundColor = "#B0B2FF";
            card.style.color = "#2C2F8F";
            break;
        case "Química":
            card.style.backgroundColor = "#C5F1FF";
            card.style.color = "#005B73";
            break;
        case "Biologia":
            card.style.backgroundColor = "#A8E6CF";
            card.style.color = "#206B4B";
            break;
        case "Filosofia":
            card.style.backgroundColor = "#E4C1F9";
            card.style.color = "#662E7F";
            break;
        case "Sociologia":
            card.style.backgroundColor = "#FDCFE8";
            card.style.color = "#8A3C61";
            break;
        case "Inglês":
            card.style.backgroundColor = "#D0E1FF";
            card.style.color = "#2A3F70";
            break;
        case "Espanhol":
            card.style.backgroundColor = "#FFE1C6";
            card.style.color = "#8B4B00";
            break;
        case "Artes":
            card.style.backgroundColor = "#FFF3B0";
            card.style.color = "#7F6B00";
            break;
        case "Educação Física":
            card.style.backgroundColor = "#B9FBC0";
            card.style.color = "#2C6E3F";
            break;
        default:
            card.style.backgroundColor = "#f5f5f5";
            card.style.color = "#2c2c2c"; // cinza escuro neutro para padrão
            break;
    }


    return card;

}

function borderColor(priority, card) {
    switch (priority) {
        case "Alta":
            card.style.borderLeft = "10px solid #FF0000";
            break;
        case "Média":
            card.style.borderLeft = "10px solid #FFA500";
            break;
        case "Baixa":
            card.style.borderLeft = "10px solid #008000";
            break;
        default:
            card.style.borderLeft = "";
            break;
    }

    return card;
}
