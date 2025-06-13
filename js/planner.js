


function loadPlanner() {
    const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

    const tabela = document.querySelectorAll("tbody")
    const headTable = []
    const semana = dateLoader()

    tabela.forEach(linha => {
        headTable.push(linha.children[0])
    })

    for (let row in headTable) {
        //console.log(headTable[1])

        headTable[row].innerHTML = `${dias[row]}\n <p>${semana[row]["data"]}</p>`
    }
}



function dateLoader() {
    const nomesSimples = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const semana = [];

    let hoje = new Date(); //12/06/2025

    // Acha o domingo da semana atual
    let domingo = new Date(hoje);
    //console.log(hoje.getMonth())
    domingo.setDate(hoje.getDate() - hoje.getDay());

    // Função para formatar a data como "dd/mm/aaaa"
    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = meses[data.getMonth() + 1]; // Mês começa do 0
        const ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    }

    // Preenche a semana
    for (let i = 0; i < 7; i++) {
        const dataDia = new Date(domingo);
        dataDia.setDate(domingo.getDate() + i);
        if (dataDia.getDay() != 0 && dataDia.getDay() != 6) {
            semana.push({
                dia: nomesSimples[dataDia.getDay()],
                data: formatarData(dataDia)
            });
        }

    }

    return semana;
}


function createCard(task) {
    const dayCards = document.querySelectorAll(".day-card")
    
    const card = document.createElement('div');
    card.classList.add('card');
    card = disciplineColor(task.discipline, card)
    card = borderColor(task.priority, card)
    card.innerHTML = `${task.title} - ${task.type}`



}    


function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title= form.elements.titulo.value;
    const description = form.elements.descricao.value;
    const datetime = form.elements.entrega.value;
    const priority = form.elements.demanda.value;
    const type = form.elements.tipo.value;
    const discipline = form.elements.disciplina.value;

    console.log(title, description, datetime, priority, type, discipline)

    if (datetime.getDay() === 0 || datetime.getDay() === 6) {
        alert("Não é possível criar uma tarefa em um dia de fim de semana.")
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


function App() {
    loadPlanner()

    document.getElementById('modal').addEventListener('close', () => {
        document.getElementById('form').reset()
    })
}

App()
