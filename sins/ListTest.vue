<script setup>
import {ref, computed} from 'vue'

let id = 0
let idToDelete = ''
const newTodo = ref('')
const HideCompleted = ref(false)
const list = ref([
  {id: id++, text: 'Поспать', done: false},
  {id: id++, text: 'Поесть', done: false},
  {id: id++, text: 'Поспать', done: false},
  {id: id++, text: 'Поесть', done: false},
  {id: id++, text: 'Поспать', done: false},
  {id: id++, text: 'Поесть', done: false},
  {id: id++, text: 'Поспать', done: false},
  {id: id++, text: 'Поесть', done: false},
])
function AddElement(){
  list.value.push({id: id++, text: newTodo.value, done: false})
}
function deleteElementById(){
  list.value = list.value.filter(id => id.id != Number(idToDelete))
}
const ListFilteredByDone = computed(() => {
  return HideCompleted.value ? list.value.filter(elem => !elem.done) : list.value
})

const Beleberda = ref('Beleberda')
const Tasks = ref('Tasks')
const EditTasks = ref('EditTasks')
const Done = ref('Done')
const Statistic = ref('Statistic')
const Todo = ref('Todo')
</script>

<template>
  <div :class="Beleberda">
    <div :class="Tasks">
      <h1 style="text-align: center;">Задачи на сегодня</h1>
      <ul>
        <li v-for="element in ListFilteredByDone" :key="element.id" :class="Todo">
          <input type="checkbox" v-model="element.done">
          <span :class="{ Done: element.done }">{{ element.id }} – {{ element.text }}</span>
        </li>
      </ul>
    </div>

    <div :class="EditTasks">
      <h1 style="text-align: center; margin-bottom: 10px;">Управлять задачами</h1>
      <div :class="Statistic">
        <p>всего задач: {{ list.length }}</p>
        <button @click="HideCompleted = !HideCompleted" style="font-size: 20px; margin: 0px;">Скрыть выполненные</button>
      </div>
      <p>Добавить задачу</p>
      <form @submit.prevent="AddElement">
        <input v-model="newTodo" required placeholder="Введите задачу" >
        <button style="width: 23%; font-size: 20px;">Добавить</button>
      </form>
      <p>Удалить задачу</p>
      <form @submit.prevent="deleteElementById">
        <input v-model="idToDelete" required placeholder="Введите id" >
        <button style="width: 23%; font-size: 20px;">Удалить</button>
      </form>
    </div>
  </div>    
</template>

<style>
.Beleberda {
  display: flex;
}

.Todo {
  margin: 3px;
  font-size: 17px;
  list-style-type: none;
  display: flex;
}
.Done {
  color: rgb(199, 255, 196);
}
.Tasks {
  margin: 2%;
  padding: 2%;
  width: 50%;
  background-color: rgb(18, 18, 18);
  border: 1px solid rgb(42, 42, 42);


}
.EditTasks {
  margin: 2%;
  padding: 2%;
  width: 50%;
  background-color: rgb(18, 18, 18);
  border: 1px solid rgb(42, 42, 42);

}
input {
  color:aliceblue;
  font-size: 25px;
  padding: 1% 2% 1% 2%;
  background-color: rgb(18, 18, 18);
  border: 1px solid rgb(42, 42, 42);
  
}
input[type="checkbox"] {
  accent-color: rgb(199, 255, 196);
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

</style>
