import Vue from 'vue'
import VueRouter from 'vue-router'
import { loadScript } from 'esri-loader'
import App from './App.vue'
import HomeButton from './HomeButton.vue'
import LocateButton from './LocateButton.vue'
import baidu from './CIGMap/streetsMap.vue'
import arcgis3Xapi_test from './CIGMap/arcgis3.Xapi_test.vue'
import baseMap from './CIGMap/baseMap'
import MapView2D from './CIGMap/MapView2D.vue'
import MapView3D from './CIGMap/MapView3D.vue'
import './assets/font/iconfont.css'
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [  
  { path: '/home-button', component: HomeButton },
  { path: '/locate-button', component: LocateButton },
  { path: '/CIGMap/streetsMap', component: baidu },
  { path: '/CIGMap/arcgis3.Xapi_test', component: arcgis3Xapi_test },
  { path: '/CIGMap/baseMap', component: baseMap },
  { path: '/CIGMap/MapView2D', component: MapView2D },
  { path: '/CIGMap/MapView3D', component: MapView3D }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// preload the ArcGIS API
// const options = {
//   url: 'http://localhost/arcgis_js_api/library/3.28/init.js',
//   // url:'http://localhost/arcgis_js_api/library/4.7/init.js'
//    //url:'http://localhost/arcgis_js_api/library/4.7/dojo/dojo.js'
// };
// loadScript(options)

// render the app
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})