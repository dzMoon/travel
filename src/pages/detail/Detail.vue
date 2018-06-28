<template>
  <div class="detail">
    <Detail-header></Detail-header>
    <detail-banner 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import axios from "axios"
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
  	return {
  		sightName: "",
  		bannerImg: "",
  		gallaryImgs: [],
  		categoryList: []
  	}
  },
  mounted () {
  	const that = this
  	axios.get("api/detail.json").then((res) => {
  		const data = res.data.data
  		this.sightName = data.sightName
  		this.bannerImg = data.bannerImg
  		this.gallaryImgs = data.gallaryImgs
  		this.categoryList = data.categoryList
  	})
  }
}
</script>

<style lang="stylus" scoped>
.detail
  height: 1000px
</style>
