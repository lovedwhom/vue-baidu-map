<template>
<div class="hello-world">
<baidu-map class="bm-view map" center="北京" @ready="fn_ready" scroll-wheel-zoom>
<!--    <div><button @click="fn_poiont">point</button></div>-->



<!--    <bm-marker v-if="position" :position="position" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>-->
<!--    <bm-marker v-if="position2" :position="position2" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>-->
    <bm-driving v-bind="drivingObj"></bm-driving>


    <bm-view style="width: 100%;height: 100%">
    </bm-view>

</baidu-map>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
      return {
          BMap:null,
          position:null,
          position2:null,
          drivingObj:{
              start:'物资学院地铁站',
              end:'新建村二期',
              panel:false,
              autoViewport:true
          }
      }
    },
    methods:{
        fn_ready({BMap}){
            // BMap,map
            this.BMap = BMap
            this.fn_get_point()
        },
        fn_poiont(){
            // var point = new BMapGL.Point(116.404, 39.915);
            // var marker = new BMapGL.Marker(point);        // 创建标注
            // map.addOverlay(marker);
        },
        fn_get_point(){
            let geocoder = new this.BMap.Geocoder()
            console.log( geocoder)
            geocoder.getPoint('北京物资学院',(point)=>{
                // lng: 116.644583
                // lat: 39.936967
                this.position = {...point}
                // console.log(point)
            })

            geocoder.getPoint('北京南站',(point)=>{
                // lng: 116.644583
                // lat: 39.936967
                this.position2 = {...point}
                // console.log(point)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map{
    width: 100%;
    height: 400px;
}
</style>
