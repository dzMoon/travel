<template>
	<div class="list">
		<div class="item" 
			v-for="key in list" 
			:key="key"
			@click = "getLetter(key)"
			@touchstart = "handleTouchStart"
			@touchmove = "handleTouchMove"
			@touchend = "handleTouchEnd"
			:ref = "key"
		>{{key}}</div>	
	</div>		
</template>
<script>
export default{
	name: 'CityNav',
	props: {
		cities:Object
	},
	data () {
		return {
			touchFlag: false
		}
	},
	computed: {
		list () {
			const list = []
			for (let i in this.cities){
				list.push(i)
			}
			return list
		}
	},
	methods: {
		getLetter (key) {
			this.$emit("change",key)
		},
		handleTouchStart () {
			this.touchFlag = true
		},
		handleTouchMove (e) {
			if(this.touchFlag){
				const startY = parseFloat(this.$refs["A"][0].offsetTop)
				const touchY = e.touches[0].clientY
				const index = Math.floor((touchY - startY)/25)
				if(index >= 0 && index < this.list.length ) {
					this.$emit("change",this.list[index])
				}
			}
		},
		handleTouchEnd () {
			this.touchFlag = false
		}
	}
}	
</script>
<style lang='stylus' scoped>
	@import '~styles/variables.styl'
	.list
		position: fixed
		right: 0
		top: 0
		display: flex
		width: 30px
		height: 100%
		justify-content: center
		flex-direction: column
		padding-top: 92px
		box-sizing: border-box
		.item
			text-align: center
			line-height: 1.8
			color: $bgColor
</style>