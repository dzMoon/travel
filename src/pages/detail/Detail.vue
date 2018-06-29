<template>
  <div class="detail">
    <Detail-header></Detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <div class="content">
      <Detail-list :list="list"></Detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      list: []
    }
  },
  mounted () {
    axios.get('api/detail.json', {
      params: {
        id: this.$router.id
      }
    })
      .then((res) => {
        const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      })
  }
}
</script>

<style lang="stylus" scoped>
.detail
  height: 1000px
</style>
