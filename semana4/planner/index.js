
let novaTarefa
let diaTarefa
let horarioTarefa

function criaTarefa(){
    const tarefa = document.getElementById("tarefa");
    novaTarefa = tarefa.value;
    const diasSemana = document.getElementById("dias-semana");
    diaTarefa = diasSemana.value;
    const horario = document.getElementById("horario");
    horarioTarefa = horario.value;
    if(tarefa.value === ""){
        confirm("Uma tarefa em branco não pode ser criada")
        return;
    }
    const minhasTarefas = document.getElementById(`${diaTarefa}`);
    minhasTarefas.innerHTML += `<li id = "${novaTarefa}" onclick = "riscaTarefa(${novaTarefa})">${horarioTarefa} --> ${novaTarefa}</li>`
    tarefa.value = ""

}



function limparTarefas(){
    const todasTarefas = document.getElementsByClassName("limpar");
    for(i = 0; i < todasTarefas.length; i++)
    todasTarefas[i].innerHTML = ""
}