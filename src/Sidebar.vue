<template>
    <ul>
      <li class="p_item" v-for="(item,index) in items" :key="index">
				<router-link :to="item.url" class="p_title" > 
					<i class="iconfont" :class="item.icon"></i>{{item.title}}
				</router-link>
			</li>
    </ul>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'列表页',
      items:[
          {title:'百度地图',url:'/home-button',icon:'icon-jia'},
          {title:'StreetMap',url:'/locate-button',icon:'icon-jiazheng'},
          {title:'baidu',url:'/CIGMap/streetsMap',icon:'icon-RedBull'},
          {title:'arcgis3.Xapi_test',url:'/CIGMap/arcgis3.Xapi_test',icon:'icon-RedBull'},
          {title:'baseMap',url:'/CIGMap/baseMap',icon:'icon-RedBull'},
          {title:'MapView2D',url:'/CIGMap/MapView2D',icon:'icon-11'},
          {title:'MapView3D',url:'/CIGMap/MapView3D',icon:'icon-Twitter'}

      ]
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.active {
      color:#f60;
      background:#fff
		}
</style>
