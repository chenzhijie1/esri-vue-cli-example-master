<template>
  <div ref="map" class="map">
    <div ref="button"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const option = {
  // 配置dojo加载自定义的包
  dojoConfig: {
    async: true,
    packages: [
      {
        location: '/bdlib',
        name: 'bdlib'
      },
      {"name":"mytest","location":"mytest",main:"BDAnoLayer"}
    ]
  }
};
export default {
  name: 'home-button',
  mounted: function () {
    loadModules(['esri/map', 'esri/dijit/HomeButton','bdlib/BDVecLayer','mytest/BDAnoLayer'],option)
      .then(([Map, HomeButton,BDVecLayer,BDAnoLayer]) => {
        const map = new Map(this.$refs.map, {
          center: [-56.049, 38.485],
          zoom: 3,
          // basemap: 'gray',
        });

        const vecMap = new BDVecLayer();
        map.addLayer(vecMap);

        const anoMap = new BDAnoLayer();
        map.addLayer(anoMap);

        // 初始化定位按钮
        const button = new HomeButton({
          map: map
        }, this.$refs.button);
        button.startup();
      })
      .catch(err => {
        // 处理任何脚本或模块加载错误
        console.error(err);
      });
  }
}
</script>

<style>
.map {
  height: 500px;
}
.HomeButton {
  position: relative;
  top: 125px;
  left: 20px;
  z-index: 50;
}
</style>
