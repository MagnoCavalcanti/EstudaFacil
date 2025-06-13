document.addEventListener("DOMContentLoaded", () => {


  // Task filter functionality
  const taskFilter = document.getElementById("task-filter")
  const taskItems = document.querySelectorAll(".task-item")

  taskFilter.addEventListener("change", function () {
    const filterValue = this.value

    taskItems.forEach((item) => {
      const isCompleted = item.querySelector('input[type="checkbox"]').checked

      if (filterValue === "all") {
        item.style.display = "flex"
      } else if (filterValue === "completed" && isCompleted) {
        item.style.display = "flex"
      } else if (filterValue === "pending" && !isCompleted) {
        item.style.display = "flex"
      } else {
        item.style.display = "none"
      }
    })
  })

  // Task checkbox functionality
  const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]')

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Aqui você pode adicionar código para atualizar o status da tarefa
      // Por exemplo, enviar uma requisição para uma API

      // Atualiza a contagem de tarefas (simulação)
      updateTaskCounts()
    })
  })

  // Função para atualizar contagens de tarefas
  function updateTaskCounts() {
    const disciplines = [
      "Português",
      "Matemática",
      "História",
      "Geografia",
      "Física",
      "Química",
      "Biologia",
      "Filosofia",
      "Sociologia",
      "Inglês",
      "Espanhol",
      "Artes",
      "Educação Física"
    ];

    const totalTasks = checkboxes.length
    const completedTasks = Array.from(checkboxes).filter((cb) => cb.checked).length
    const pendingTasks = totalTasks - completedTasks

    // Atualiza os cards de resumo
    document.querySelector(".summary-card:nth-child(1) .card-value").textContent = pendingTasks
    document.querySelector(".summary-card:nth-child(2) .card-value").textContent = completedTasks
    document.querySelector(".summary-card:nth-child(4) .card-value").textContent = disciplines.length
  }

  // Inicializa as contagens
  updateTaskCounts()





})
