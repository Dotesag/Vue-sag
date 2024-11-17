<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'









</script>


<style>
.degenerate {
  display: grid;
  grid-template-columns: 40% 55%;
}

.chatgpt {
  text-align: center; 
  padding-left: 7%;
  margin-left: 10%;
  padding-right: 7%;
  color: rgb(68, 68, 68);
  background-color: rgb(223, 220, 248);
  font-size: 40px;
  border-radius: 60px;
  word-wrap: break-word;
}
.textbox {
  font-size: 125%;
  width: 100%; 
  height: 100%
}
.SendMessage {
  display: flex;
}
.SendButton {
  color: green;
  font-size: 125%;
  margin: 1em;
}
.textbox{
  margin: 1em;
}

.Answer {
  animation: asdfasdf 2s forwards;
}
.AskForm {
  background-color: rgb(209, 205, 245);
  border-radius: 60px;
  padding-bottom: 1%;
  
}
.AnsForm {
  background-color: rgb(209, 205, 245);
  border-radius: 60px;
  padding-bottom: 1%;
  margin-bottom: 5%;
}

@keyframes asdfasdf {
  0%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



body{
  font-family: Arial;
  background-color: rgb(172, 255, 186);
}
</style>