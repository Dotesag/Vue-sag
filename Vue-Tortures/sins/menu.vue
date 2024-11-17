<script setup>
import { ref } from 'vue'
import ListTest from './ListTest.vue';
import IQ_Test from './IQ-Test.vue';
import Chat_GPT from './Chat-GPT.vue'
const hellotion = ref('hellotion')
const HeadMessage = ref('HeadMessage')


const IQtest = ref(false)
const Chatgpt = ref(false)
const List = ref(false)
function Chatpgt_call(){
    List.value = false
    IQtest.value = false
    Chatgpt.value = true
}
function IQtest_start(){
    List.value = false
    Chatgpt.value = false
    IQtest.value = true
}
function List_Control(){
    Chatgpt.value = false
    IQtest.value = false
    List.value = true
}


</script>

<template>
    <header>
        <div :class="hellotion">
            <h1 :class="HeadMessage">Сайт для когнитивно одаренных</h1>
            <button @click="IQtest_start">IQ-тест</button>
            <button @click="Chatpgt_call">Chat-pgt</button>
            <button @click="List_Control">Работа</button>
        </div>
    </header>
    <IQ_Test v-if="IQtest" />
    <Chat_GPT v-if="Chatgpt" />
    <ListTest v-if="List" />
</template>

<style>
.hellotion {
    font-family: "Comic Sans MS";
    text-align: center;
    background-color: rgb(18, 18, 18);
    padding: 1%;
    border: 1px solid rgb(42, 42, 42);

}
.HeadMessage {
    font-size: 200%;
    margin-bottom: 1%;
    color: rgb(255, 234, 234);
}

button {
    color: aliceblue;
    font-size: 160%;
    background-color: rgb(35, 35, 35);
    border: 1px solid rgb(42, 42, 42);
    padding: 1% 2% 1% 2%;
    border-radius: 2px;
    letter-spacing: 1px;
    margin-left: 4px;
    margin-right: 4px;
}
button:hover {
    background-color: rgb(56, 56, 56);
}


h1 {
    margin: 0;
}

</style>