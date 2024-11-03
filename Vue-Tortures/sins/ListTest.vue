<script setup>
import {ref} from 'vue'

let id = 0
const newTodo = ref('')
const list = ref([
  {id: id++, text: 'Посрать'}
])
function AddElement(){
  list.value.push({id: id++, text: newTodo.value})
}

const Beleberda = ref('Beleberda')
const Tasks = ref('Tasks')
const EditTasks = ref('EditTasks')
</script>

<template>
  <div :class="Beleberda">
    <div :class="Tasks">
      <h1 style="text-align: center;">Задачи на сегодня:</h1>
      <ul>
        <li v-for="element in list" :key="id">
          {{ element.text }}
        </li>
      </ul>
    </div>

    <div :class="EditTasks">
      <h1 style="text-align: center;">Управлять задачами</h1>
      <p>Добавить задачу</p>
      <form @submit.prevent="AddElement">
        <input v-model="newTodo" required placeholder="Введите задачу" >
        <button>Добавить</button>
      </form>
    </div>
  </div>    
</template>

<style>
.Beleberda {
  display: flex;
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


</style>
