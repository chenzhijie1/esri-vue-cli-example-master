<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/home-button">Home Button</router-link></li>
      <li><router-link to="/locate-button">Locate Button</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'ArcGIS JS API  in a Vue.js App'
    }
  },
  methods:{
    showMsgFromChild:function(data){
      console.log(data);
    }
  }
}
</script>

<style>
/* esri styles */
@import url('https://js.arcgis.com/3.23/esri/css/esri.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
