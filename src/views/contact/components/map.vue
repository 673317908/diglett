<template>
  <div>
    <div class="address">
      <el-amap
        vid="amapDemo"
        class="amap-demo"
        :zoom="zoom"
        :center="center"
        :events="events"
      ></el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
// 方法
import { getLngLat } from "./common";
import { addressSetMapCenter } from "./location";
import { amapSetMarker, amapClearMarker } from "./marker";
export default {
  data() {
    return {
      lnglat: {},
      map: null,
      zoom: 18,
      center: [113.384647, 23.118912],
      resizeEnable: true,
      events: {},
    };
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapDemo", {
        center: [113.384647, 23.118912],
        zoom: 18,
      });
      this.setMarker();
    });
  },
  methods: {
    setMarker() {
      let marker = new AMap.Marker({
        position: new AMap.LngLat(113.384647, 23.118912),
        offset: new AMap.Pixel(-5, -50),
        title: "羊城创意产业园",
      });
      this.map.add(marker);
    },
    createInfoWindow(title, url) {
      let info =
        '<a style="display: block;font-size: .18rem;background-color: rgba(30,105,204,.8);color: #DDEBF5;padding: .15rem;border-radius: .04rem;text-decoration:none;" href="' +
        url +
        '" target="_blank">' +
        title +
        "</a>";
        '<div class="pad_t_20 pad_l_30 pad_b_16 flex al_c" style="border:1px solid #cacaca;"><p>广州地鼠科技有限公司</p></div>'
      return info;
    },
  },
};
</script>

<style scoped lang="less">
.address {
  height: 800px;
}
</style>
