const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave : false
  // vue에서 component명을 만들 때 반드시 단어의 조합으로 지어야 함
})
