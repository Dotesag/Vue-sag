<script setup>
import { ref } from 'vue'

const head = ref('head')
const iqlist = ref('iqlist')
const iqtest = ref('iqtest')
const iq = ref(-1)



function plusIQ(){
  iq.value *= 2;
}

</script>


<template>
  <div :class="iqtest">
    <button @click="plusIQ">Повысь свой IQ!</button>
    <p :class="iqlist">Ваш IQ: {{ iq }}</p>
  </div>
</template>


<style>

.iqtest {
  text-align: center;
  margin-top: 3%;
}

.iqlist {
  margin-bottom: 0%;
  margin-top: 3%;
  font-size: 50px;
  font-weight: bold;
  animation: ChangeColor 2s infinite alternate linear;
}
@keyframes ChangeColor {
  0% {
    color: red;
  }
  50%{
    color: orange;
  }
  100% {
    color: yellow;
  }
} 


</style>