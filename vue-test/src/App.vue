<template>
  <img alt="GS EPS LOGO" src="./assets/logo_gseps.jpg" class="gs_logo">
  <Headers ></Headers>
    <div>
      <!-- h4 태그에도 독같이 v-for 적용 가능함 -->
      <!-- 전체 형태로 반복하기 위해서는 div 태그 위에다가 하기 -->
      <img src="https://ic.zigbang.com/ic/items/33259061/1.jpg?w=0&h=640&a=1" class="room-image">
      <h4 class="red" :style = "OneRoomStyle"> {{ products[0] }} </h4>
      <p>{{ price[0] }}만원</p>
      <button @click="신고수[0]++">허위매물신고</button><div> 신고수 : {{ 신고수[0] }}</div>
    </div>

    <div>
      <h4> {{ products[1] }}</h4>
      <p>{{ price[1] }} 만원</p>
      <button @click="신고수[1]++">허위매물신고</button><div> 신고수 : {{ 신고수[1] }}</div>
    </div>

    <div>
      <h4> {{ products[2] }} </h4>
      <p>{{ price[2] }} 만원</p>
      <button @click="신고수[2]++">허위매물신고</button><div> 신고수 : {{ 신고수[2] }}</div>
    </div>

</template>

<script>
import Headers from './components/layout/Header.vue';

export default {
  name: 'App',
  data(){
    return {
      신고수 : [0,0,0],
      products : ['과천동원룸','역삼동원룸','논현동원룸'],
      price : [40,50,20],
      OneRoomStyle : 'color : blue',
    }
  },
  components: {
    Headers
    
  },
  methods : {
    increase(){
      this.신고수 += 1;
    },
    sale(){
      this.price[1] -= 2;
      this.count += 1;
    }
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



.room-image {
  width : 10%;
  margin-top : 40px;
}

.gs_logo {
  width : 20%;
}
</style>
