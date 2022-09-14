<template>
  <div class="header">
    <a v-for= "menu in menus" :key="menu">
      {{ menu }}
    </a>
  </div>
</template>

<script>


export default {
  name : 'Header',
  data(){
    return {
      menus : ['홈화면','승인','발행중','승인','작업중','작업중지','작업완료']
    }
  }
}
</script>

<style>
.header {
  background : rgb(14, 169, 118);
  padding : 15px;
  border-radius: 5px;
}

.header a {
  color : whitesmoke;
  padding : 15px;
}
</style>