<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="menu">
    <!-- <a>Home</a>
    <a>Products</a>
    <a>About</a> -->

    <a v-for="i in menus" :key="i">{{ i}}</a>
  </div>

  <div v-for="i in products" :key="i" >{{ i }}
    <!-- h4 태그에도 독같이 v-for 적용 가능함 -->
    <!-- 전체 형태로 반복하기 위해서는 div 태그 위에다가 하기 -->
    <!-- <h4 class="red" :style = "OneRoomStyle"> {{ products[0] }} </h4> -->
    <p>{{ price[0] }}</p>
    <button>허위매물신고</button><div> 신고수 : 0</div><br>
  </div>
  <!-- <div>
    <h4> {{ products[1] }} </h4>
    <p>{{ price[1] }}</p>
  </div>
  <div>
    <h4> {{ products[2] }} </h4>
    <p>{{ price[2] }}</p>
  </div> -->
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      menus : ['Home', 'Shop', 'About'],
      products : ['과천동원룸','역삼동원룸','논현동원룸'],
      price : [40,50,20],
      OneRoomStyle : 'color : blue',
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background : rgb(14, 169, 118);
  padding : 15px;
  border-radius: 5px;
}

.menu a {
  color : whitesmoke;
  padding : 15px;
}

div {
  color : red;
}
</style>
