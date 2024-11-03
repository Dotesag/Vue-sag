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
}
</style>