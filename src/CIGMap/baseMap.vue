<template>
  <div class="hello">
    <div ref="baseMap" class="baseMap"></div>
    <Button :data="obj" :event="del" @e-child="abc" />
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
import { ServiceUrl } from "./ServiceUrl";
import Button from "../commom/Button";
const option = {
  url: ServiceUrl.api4Url
  //   dojoConfig: {
  //   has: {
  //     "esri-promise-compatibility": 0
  //   }
  // }
};

export default {
  name: "baseMap",
  data() {
    return {
      map: "",
      view: "",
      title: "其它页",
      obj: {
        color: "red",
        title: "红色按钮"
      }
    };
  },
  components: {
    Button
  },
  methods: {
    abc(v) {
      //接收事件
      v();
    },
    del() {
      alert("del");
    }
  },
  mounted() {
    loadModules(["esri/Map", "esri/views/MapView", "dojo/domReady!"], option)
      .then(([Map, MapView]) => {
        this.map = new Map({
          basemap: "streets" // 底图类型，详见BaseMap类
        });
        this.view = new MapView({
          container: this.$refs.baseMap, // 视图的容器
          map: this.map, // Map的实例放入视图中
          center: [114.31667, 30.51667], // 初始显示的地图中心点，经纬度
          zoom: 10 // 当前地图缩放等级
        });

        console.log(this.view);
        console.log(this.map);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
/*引入css*/
@import "http://localhost/arcgis_js_api/library/4.7/esri/css/main.css";
.baseMap {
  height: 90vh;
  width: 100vw;
}
</style>
