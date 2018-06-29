<template>
  <swiper :options="swiperOption" v-if='showSwiper'>
    <swiper-slide v-for='item in this.swiperList' :key='item.id'>
      <img :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 1500
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang='stylus' scoped>
  img
    width: 100%
    height: 150px
</style>
