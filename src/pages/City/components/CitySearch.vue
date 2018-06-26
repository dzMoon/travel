<template>
	<div class='search-box'>
		<input type="" name="" placeholder='请输入城市名或拼音'>
	</div>
</template>

<script type="text/">
export default{
	name: 'CitySearch',

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
		z-index: 1
		input
			height: 28px
			width: 100%
			outline: none
			border: none
			padding:0 8px
			box-sizing:border-box
			text-align: center
			border-radius: 5px
</style>