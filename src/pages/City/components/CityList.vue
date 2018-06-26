<template>
	<div class="list" ref='wrapper'>
		<div class="container">
			<div class="area">
				<div class="h1">当前城市</div>
				<div class="button-wraper">
					<button>{{this.city}}</button>
				</div>
			</div>
			<div class="area">
				<div class="h1">热门城市</div>
				<div class="button-wraper">
					<button v-for="hotCity in this.hotCities" :key="hotCity.id">{{hotCity.name}}</button>
				</div>
			</div>
			<div class="area">
				<div class="list-area" v-for="(city,index) of this.cities" :key="index">
					<h1>{{index}}</h1>
					<p v-for="name in city" :key="name.id">{{name.name}}</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script type="text/">
import BScroll from 'better-scroll'
export default{
	name: 'CityList',
	props: {
		hotCities:Array,
		cities: Object,
		city: String
	},
	mounted () {
		const scroll = new BScroll(this.$refs.wrapper)
		this.$refs.wrapper.style.height = (document.documentElement.clientHeight + 92) + "px"
	}
}	
</script>


<style lang='stylus' scoped>
	@import '~styles/variables.styl'
	.list
		width: 100%
		text-align: left
		box-sizing: border-box
		position: fixed
		height: 100%
		box-sizing: border-box
		top: 92px
		overflow: hidden
		.container
			width: 100%
			.area
				.h1
					background: #eee
					padding-left: 10px
					box-sizing: border-box
					line-height: 2.4
					border-top: 1px solid #ddd
					border-bottom: 1px solid #ddd
				.button-wraper
					padding:0  20px 0	10px
					line-height: 1.5em
					overflow: hidden
					display: flex
					justify-content: space-between
					width: 100%
					box-sizing: border-box
					flex-wrap: wrap
					margin-top: 5px
					button
						padding:3px 0
						width: 31.5%
						border: 1px solid #ddd
						margin: 5px 0
						outline: none
						background: #fff
					    flex-shrink: 0
				.list-area
					h1
						background: #eee
						padding-left: 10px
						box-sizing: border-box
						line-height: 2.4	   
						border-bottom: 1px solid #ddd 
					p
						padding-left: 10px	
						line-height: 2
					
</style>