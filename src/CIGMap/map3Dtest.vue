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
  url: ServiceUrl.api4Url,
}

export default {
  name: "",
 
  components: {

  },
 
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
          "esri/views/SceneView",
           "esri/core/watchUtils"
        ],
         option
      )
      .then(
        ([
          Map, SceneView, watchUtils
        ]) => {
    

        this.map = new Map({
        basemap: "hybrid",
          ground: "world-elevation"// 底图类型，详见BaseMap类
        })
        const initialCamera = {
          position: [7.654, 45.919, 5184],
          tilt: 80,
          heading: 0
        };
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
#viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }

      #info {
        padding: 1em;
      }
</style>