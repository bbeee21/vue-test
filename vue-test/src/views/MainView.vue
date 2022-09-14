<template>
  <div>
  <div class="main">
    <h1>This is a main page</h1>
  </div>

  <div class="PFW table">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>

  </div>
</template>


<script>
  export default{
    data (){
      return {
        headers : [
          {
            text : '작업 번호',
            align : 'start',
            sortable: false,
            value: 'name',
          },
          { text: '내용', value : '내용'},
          { text: '딤딩지', value : '담당자'},
          { text: '상태', value : '상태'},
          { text: '격리;', value : '격리'},
          { text: '크로스 격리', value : '크로스 격리'},
          { text: '수정날짜', value : '날짜'},
          
        ]
      }
    }
  }
</script>