import { Component } from '@angular/core';
import { Tarefa } from "./tarefa";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];

  constructor() {
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.unshift(novaTarefa);
    }
   

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks WEB", false),
      new Tarefa("Júlia Araújo - 215154", false),
      new Tarefa("Igor Travassos - 220838", false),
      new Tarefa("Fazer tarefas de BD", false)
    ];
  }

  DELETE_tarefas(tarefaRemovida: Tarefa){
    this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaRemovida), 1);
  }
}
