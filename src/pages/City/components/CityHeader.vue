<template>
	<div class="header">
		<div class='back'>
			<router-link to='/'>
				<span class='iconfont' style="color:#fff">&#xe647;</span>
			</router-link>
		</div>
		<span>城市选择</span>
	</div>		
</template>

<script>
export default{
	name: 'CityHeader',

}	
</script>


<style lang='stylus' scoped>
	@import '~styles/variables.styl'
	.header
		height: 43px
		background: $bgColor
		line-height: 43px
		color: #fff
		width:100%
		position: fixed
		top:0
		text-align: center
		z-index: 55
		.back
			position: absolute
			width: 32px
			text-align: center
</style>