<template>
	<div class="city-wrapper">
		<City-header></City-header>
		<City-search :cities="cities"></City-search>
		<City-list 
			:hotCities="hotCities" 
			:cities="cities" 
			:letter = "letter"
		></City-list>
		<City-nav 
			:cities="cities"
			@change="getLetter"
		></City-nav>
	</div>
</template>
<script>
import axios from 'axios'	
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityNav from './components/CityNav'

export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityNav
	},
	data () {
		return {
			hotCities:[],
			cities:{},
			letter:""
		}
	},
	mounted () {
		const that = this
		axios.get("/api/city.json").then(function(res){
			const data = res.data.data
			that.hotCities = data.hotCities
			that.cities = data.cities
		})
	},
	methods: {
		getLetter (key) {
			this.letter = key
		}
	}
}	
</script>
<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	body,html
		height: 100%
	.city-wrapper
		position: relative
		height: 100%
</style>