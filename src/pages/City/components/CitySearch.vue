<template>
	<div>
		<div class='search-box'>
			<input type="" name="" placeholder='请输入城市名或拼音' v-model="keyword">
		</div>
		<div class="search-content" v-show="keyword" ref="wrapper">
			<ul>
				<li v-for="item in list" 
					:key="item.id" 
					@click="changeCity(item.name)"
				>{{item.name}}</li>
				<li v-show="!list.length">没有匹配项</li>
			</ul>
		</div>
	</div>
	
</template>

<script >
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: "",
			list: [],
			timer: null
		}
	},
	mounted () {
	},	
	updated () {
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	watch: {
		keyword () {
			if(this.timer){
				clearTimeout(this.timer)
			}
			if(!this.keyword){
				this.list = []
				return
			}
			this.timer = setTimeout(() => {
				const result = []
		        for (let i in this.cities) {
		          this.cities[i].forEach((value) => {
		            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
		              result.push(value)
		            }
		          })
		        }
		        this.list = result
			},100)
		}
	},
	methods: {
		changeCity (city) {
			this.changeCity(city)
			this.$router.push("/")
		},
		...mapMutations(['changeCity'])
	}	
}	
</script>


<style lang='stylus' scoped>
	@import '~styles/variables.styl'
	.search-box
		background: $bgColor
		color: #666
		padding:10px 
		width: 100%
		box-sizing: border-box
		font-size: 0
		position:fixed
		top: 43px
		z-index: 55
		input
			height: 28px
			width: 100%
			outline: none
			border: none
			padding:0 8px
			box-sizing:border-box
			text-align: center
			border-radius: 5px
	.search-content
		background: #eee
		position:fixed
		top: 91px
		bottom: 0
		left: 0
		right: 0	
		z-index: 2	
		text-align: left
		ul
			li
				line-height: 2.4
				background: #fff
				border-bottom:1px solid #ddd
				padding-left: 10px
				box-sizing: border-box
			
</style>