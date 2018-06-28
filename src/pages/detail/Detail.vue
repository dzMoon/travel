<template>
  <div>
    <detail-banner 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from "axios"
export default {
  name: 'Detail',
  components: {
    DetailBanner
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
</style>
