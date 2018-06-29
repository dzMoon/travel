<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" :src="this.bannerImg"/>
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <Fade-animation>
      <Gallary
        :imgs = "this.gallaryImgs"
        v-show="this.toggle"
      ></Gallary>
    </Fade-animation>
  </div>
</template>
<script>
import Gallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  computed: {
    ...mapState(['toggle'])
  },
  components: {
    Gallary,
    FadeAnimation
  },
  methods: {
    handleGallaryClick () {
      this.gallaryToggle(true)
    },
    ...mapMutations(['gallaryToggle'])
  },
  activated () {
    this.gallaryToggle(false)
  }

}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 30px
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: 16px
        padding: 0 10px
      .banner-number
        height: 16px
        line-height: 16px
        margin-top: 7px
        padding: 0 2px
        border-radius: 10px
        background: rgba(0, 0, 0, .8)
        font-size: 12px
        width: 50px
        .banner-icon
          font-size: 12px
    a
      .iconfont
        color: #fff
        position:absolute
        left: 10px
        top: 10px
        font-size: 20px
</style>
