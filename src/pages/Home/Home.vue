<template>
<div class="hello">
  <Header-component></Header-component>
  <Home-swiper :swiperList = "swiperList"></Home-swiper>
  <nav-list :iconList="iconList"></nav-list>
  <Home-recmmod :recommendList="recommendList"></Home-recmmod>
  <Home-week :weekendList="weekendList"></Home-week>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import HomeSwiper from './components/HomeSwiper'
import NavList from './components/NavList'
import HomeRecmmod from './components/HomeRecmmod'
import HomeWeek from './components/HomeWeek'
import axios from 'axios'
export default {
  data () {
  	return {
  		swiperList: [],
  		iconList:[],
  		weekendList: [],
  		recommendList: []
  	}
  },		
  name: 'Home',
  components: {
  	HeaderComponent,
  	HomeSwiper,
  	NavList,
  	HomeRecmmod,
  	HomeWeek
  },
  mounted () {
  	this.getInfo()
  },
  methods: {
  	getInfo () {
  		var that = this
  		axios.get("/api/index.json")
  			.then(function(res){
				var data = res.data.data
  				that.swiperList = data.swiperList
  				that.iconList = data.iconList
  				that.recommendList = data.recommendList
  				that.weekendList = data.weekendList
  			})
  	}
  }
}
</script>
<style lang='stylus' scoped>

</style>
