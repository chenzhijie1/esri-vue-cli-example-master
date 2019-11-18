<template>
  <div class="wrapper">
    <div ref="map" class="map"></div>
    <div ref="baseMap" class="baseMap"></div>
  </div>
</template>
 
<script>
import Vue from 'vue'
import esriLoader from "esri-loader";
import { ServiceUrl } from './ServiceUrl'
const option = {
  url: ServiceUrl.apiUrl,
}
export default {
  name: "",
 
  components: {},
 
  props: {},
 
  data() {
    return {};
  },
 
  created() {},
 
  mounted() {
    // const option = { url: "http://localhost/arcgis_js_api/library/4.7/dojo/dojo.js" };
    esriLoader
      .loadModules(
        [
          "esri/map",
          "esri/views/SceneView"
        ],
         option
      )
      .then(
        ([
          Map, SceneView
        ]) => {
    

        this.map = new Map({
        basemap: 'streets' // 底图类型，详见BaseMap类
        })
        this.view  = new SceneView({
          container: this.$refs.baseMap, // Reference to the scene div created in step 5
          map: this.map, // Reference to the map object created before the scene
          scale: 50000000, // Sets the initial scale to 1:50,000,000
          center: [-101.17, 21.78] // Sets the center point of view with lon/lat
        });
        }).catch(err => {
      console.log(err)
    })
      
  },
 
  computed: {},
 
  methods: {}
};
</script>
<style scoped>
@import 'http://localhost/arcgis_js_api/library/4.7/esri/css/main.css';
.map {
  width: 100%;
  height: 100vh;
}
#viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
</style>