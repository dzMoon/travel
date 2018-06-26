<template>
	<div class="list">
		<div class="item" v-for="(city,key) in cities" :key="key">{{key}}</div>	
	</div>		
</template>

<script type="text/">
export default{
	name: 'CityNav',
	props: {
		cities:Object
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