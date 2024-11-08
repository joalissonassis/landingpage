// Definindo a classe TodoList para gerenciar as tarefas
class TodoList {
  constructor() {
      this.tasks = [];
      this.nextId = 1;
  }

  // Método para adicionar uma nova tarefa
  addTask(title) {
      const newTask = {
          id: this.nextId++,
          title,
          completed: false,
      };
      this.tasks.push(newTask);
      console.log(`Tarefa "${title}" adicionada com sucesso!`);
  }

  // Método para listar todas as tarefas
  listTasks() {
      if (this.tasks.length === 0) {
          console.log("Nenhuma tarefa encontrada.");
      } else {
          console.log("Lista de Tarefas:");
          this.tasks.forEach(task => {
              console.log(`${task.id}. ${task.title} - ${task.completed ? 'Concluída' : 'Pendente'}`);
          });
      }
  }

  // Método para marcar uma tarefa como concluída
  completeTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
          task.completed = true;
          console.log(`Tarefa "${task.title}" marcada como concluída!`);
      } else {
          console.log(`Tarefa com ID ${id} não encontrada.`);
      }
  }

  // Método para remover uma tarefa
  removeTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
          const removedTask = this.tasks.splice(index, 1)[0];
          console.log(`Tarefa "${removedTask.title}" removida com sucesso!`);
      } else {
          console.log(`Tarefa com ID ${id} não encontrada.`);
      }
  }
}

// Exemplo de uso
const myTodoList = new TodoList();
myTodoList.addTask("Estudar JavaScript");
myTodoList.addTask("Fazer exercícios");
myTodoList.addTask("Ler um livro");

myTodoList.listTasks();

myTodoList.completeTask(2);

myTodoList.listTasks();

myTodoList.removeTask(1);

myTodoList.listTasks();
