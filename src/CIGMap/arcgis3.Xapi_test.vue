<template>
  <div class="wrapper">
    <div ref="map" class="map"></div>
    <div id="viewDiv"></div>
  </div>
</template>
 
<script>
import Vue from 'vue'
import esriLoader from "esri-loader";
export default {
  name: "",
 
  components: {},
 
  props: {},
 
  data() {
    return {};
  },
 
  created() {},
 
  mounted() {
    // const options = { url: "http://localhost/arcgis_js_api/library/4.7/dojo/dojo.js" };
    esriLoader
      .loadModules(
        [
          "esri/map",
        //   "esri/views/MapView"
        ],
        // options
      )
      .then(
        ([
          Map
        ]) => {
          let map = new Map(this.$refs.map, {
            backgroundColor: "#eee",
            basemap: 'streets',
            logo: false,
            slider: false,
            zoom: 7,
            // minZoom: 7
          });
          Vue.prototype.$map = map;

        //  var map = new Map({
        //   basemap: "streets"
        // });
        // var view = new MapView({
        //   container: "viewDiv", // Reference to the scene div created in step 5
        //   map: map, // Reference to the map object created before the scene
        //   zoom: 4, // Sets zoom level based on level of detail (LOD)
        //   center: [15, 65] // Sets center point of view using longitude,latitude
        // });
        }
      );
  },
 
  computed: {},
 
  methods: {}
};
</script>
<style scoped>
@import url('https://js.arcgis.com/3.27/esri/css/esri.css');
/* @import url('https://js.arcgis.com/4.13/esri/themes/light/main.css'); */
.map {
  width: 100%;
  height: 100vh;
}
</style>