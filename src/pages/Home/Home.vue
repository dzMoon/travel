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
import { mapState } from 'vuex'
export default {
  data () {
  	return {
  		swiperList: [],
  		iconList:[],
  		weekendList: [],
  		recommendList: [],
      selectedCity:""
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
  computed: {
    ...mapState(['city'])
  },
  methods: {
  	getInfo () {
  		var that = this
  		axios.get("/api/index.json?city="+ this.city )
  			.then(function(res){
				var data = res.data.data
  				that.swiperList = data.swiperList
  				that.iconList = data.iconList
  				that.recommendList = data.recommendList
  				that.weekendList = data.weekendList
  			})
      this.selectedCity = this.city  
  	}
  },
   mounted () {
    this.getInfo()
  },
  activated () {
    if(this.selectedCity !== this.city) {
      this.selectedCity == this.city
      this.getInfo()
    }
  }
}
</script>
<style lang='stylus' scoped>

</style>
