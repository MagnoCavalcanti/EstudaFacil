


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








function App() {
    loadPlanner()

    document.getElementById('modal').addEventListener('close', () => {
        document.getElementById('form').reset()
    })
}

App()
