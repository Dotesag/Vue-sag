<script setup>
import { ref } from 'vue'


const chatgpt = ref('chatgpt')
const SendMessage = ref('SendMessage')
const textbox = ref('textbox')
const SendButton = ref('SendButton')
const Answer = ref('Answer')
const degenerate = ref('degenerate')
const Ask = ref('Ask')
const AskForm = ref('AskForm')
const AnsForm = ref('AnsForm')


const text = ref('')
const typed = ref(false)
const mess = ref('')


function showSend(){
  typed.value = true
  mess.value = text.value
}
</script>

<template>
    <div :class="chatgpt">

        <h1 style="margin: 15px;">Обратиться к чат-гтп</h1>
    
        <div :class="SendMessage">
            <input :class="textbox" v-model="text" style="width:60%;">
            <button @click="showSend" :class="SendButton" style="margin-right: 0px; margin-left: 3px;">Отправить</button>
        </div>

        <div :class="AskForm">
            <p style="font-size: 200%;">Ваш запрос:</p>
            <p v-if="typed" :class="Ask" style="font-size: 150%;"> {{ mess }}</p>
            <p v-else="typed" :class="Ask" style="color: gray;"> </p>
        </div>

        <div :class="AnsForm">
            <p style="font-size: 200%;">Ответ чат-гтп:</p>
            <p v-if="typed" :class="Answer" style="color: red; font-size: 150%;">☠︎︎Вас убили. Вы мертвы!☠︎︎</p>
            <p v-else="typed" :class="Ans" style="color: gray;"> </p>
        </div>

    </div>
</template>

<style>
.chatgpt {
    text-align: center;
    display: grid;
    justify-content: center;
}

.AskForm {
    background-color: rgb(18, 18, 18);
    border: 1px solid rgb(42, 42, 42);
    margin-top: 5%;
}

.AnsForm {
    margin-top: 5%;
    background-color: rgb(18, 18, 18);
    border: 1px solid rgb(42, 42, 42);
}

.Answer {
  animation: asdfasdf 2s forwards;
}
@keyframes asdfasdf {
  0%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
