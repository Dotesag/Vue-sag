<script setup>
import { ref } from 'vue'

const hellotion = ref('hellotion')

</script>

<template>
    <div :class="hellotion">
        <h1>Hello</h1>
    </div>
</template>

<style>
.hellotion {
    text-align: center;
    background-color: rgb(18, 18, 18);
    padding: 2%;
}

h1 {
    margin: 0;
}
body {
    font-family: "Comic Sans MS";
    margin: 0;
}
</style>