<template>
  <div id="app">
    <Content /> 
  </div>
</template>

<script>
import Content from './Content'
export default {
  name: 'app',
  data () {
    return {
      msg: 'ArcGIS JS API  in a Vue.js App'
    }
  },
  components:{
    Content
  },
  methods:{
  
  }
}
</script>

<style>
/* esri styles */
@import url('https://js.arcgis.com/3.23/esri/css/esri.css');
/* @import url('https://js.arcgis.com/4.7/esri/css/main.css'); */
@import './assets/css/index.css' ;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
