<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import router from './router'
// import Element from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';

import BaiduMap from 'vue-baidu-map'

//Vue.use(Element);
Vue.use(BaiduMap,{
  ak:'R1EXxlquzUz17vo6LHZVOGDSxIHwuX8B'
});

export default {
  name: 'app'
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
