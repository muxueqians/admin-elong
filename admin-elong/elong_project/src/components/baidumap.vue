<template>
  <div id="baidumap">
    <div v-if="isMapShow">
        <input class="search_input" v-model="mapConfig.keyword" placeholder="搜索地点，并进行选择"/>
        <baidu-map class="map-container"
        :scroll-wheel-zoom="true"
        :center="mapConfig.center"
        :zoom="mapConfig.zoom">
          <bm-view class="bm-view">
          </bm-view>
          <bm-local-search
            :keyword="mapConfig.keyword"
            :auto-viewport="true"
            :location="mapConfig.location">
          </bm-local-search>
        </baidu-map>
      </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'baidumap',
  components:{
  },
  data () {
    return {
      isMapShow: true,
      currentPath: '',//当前要走的路径
      auths: [],//所有路由的来去监听的数组
      agent_id:'',
      mapConfig: {
        location: '',
        keyword: '',
        center: { lng: 121.59996, lat: 31.197646 },
        zoom: 12,
      }
    }
  },
  methods:{
    mocktest(){
      
    },
    infohtmlset(poi) {
      this.demandInfo.listDemandInterview[this.currentMapIndex].interviewAddress = `${poi.city}${poi.address}${poi.title}`;
      this.demandInfo.listDemandInterview[this.currentMapIndex].latitude = poi.point.lat;
      this.demandInfo.listDemandInterview[this.currentMapIndex].longitude = poi.point.lng;
      this.isMapShow = false;
    }
  },
  watch:{
    $route(to, from) {
      this.currentPath = to.path;//当前路由的监听
    },
  },
  computed:{
  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
  #baidumap{
    width:100%;
    height: 1000px;
    background: #ccc;
    .search_input{
      width:100%;
      display: block;
      height: 40px;
      margin:0 auto;
      padding-top:20px;
    }
    .map-container {
      width: 100%;
      height: 100%;
      margin:0 auto;
      .bm-view {
        width: 100%;
        height: 600px;
        margin-bottom: 40px;
      }
    }
  }

</style>
