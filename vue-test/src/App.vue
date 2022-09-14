<template>
  <div>
    <nav>
      <div class="list-items">
        <ul class="list-inline h3">
          <li class="list-inline-item"><router-link to="/">home</router-link></li>
          <li class="list-inline-item"><router-link to="/about">about</router-link></li>
          <li class="list-inline-item"><router-link to="/main">메인</router-link></li>
          <li class="list-inline-item"><router-link to="/publish">발행중</router-link></li>
          <li class="list-inline-item"><router-link to="/approve">승인</router-link></li>
          <li class="list-inline-item"><router-link to="/working">작업중</router-link></li>
          <li class="list-inline-item"><router-link to="/stopworking">작업중지</router-link></li>
          <li class="list-inline-item"><router-link to="/complete">작업완료</router-link></li>
        </ul>  
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



export default {
  name : 'App',

}

</script>
<style>
.list-items{
  background : rgb(43, 155, 117);
  padding : 15px;
  border-radius : 5px;
  /* display: flex; */
  align-items: center;
  margin-right: 2px;
}

.list-inline-item {
  color : whitesmoke;
  padding : 15px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color : whitesmoke;
  ;
}

nav a {
  font-weight: bold;
  color: #ececec;
}

nav a.router-link-exact-active {
  color: #652a9d;
}

</style>


