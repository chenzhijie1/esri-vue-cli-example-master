/* eslint-disable */
export const ServiceUrl = {
// 这里可以定义自己服务器上的底图的地址，也可以使用ArcGis提供的底图，详见Basemap类
   baseMap: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer', 
   //apiUrl: 'https://js.arcgis.com/4.7/', 
// 使用官网提供的api，但是更建议使用离线部署的地址
  api4Url: 'http://localhost:8088/arcgis_js_api/library/4.7/dojo/dojo.js', 
  api3Url: 'http://localhost/arcgis_js_api/library/3.28/init.js',
  tileLayer: [{
    id: 'TL0',
    url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
  }],
  featureLayer: [
    {
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3'
    }
    
  ]
}
