<template>
  <swiper :options="swiperOption" >
    <swiper-slide v-for='item in banners' :key='item.id'>
    	<img :src="item.img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HeaderSwiper',
  data () {
  	 return {
  	 	swiperOption:{
  	 		loop:true,
  	 		pagination: '.swiper-pagination',
  	 		autoplay: 1500
  	 	},
  	 	banners:[
  	 		{
  	 			id:'01',
  	 			img:'//ad.qunarzz.com/ad/picture/93cec2ff-bf9d-4b86-8e19-7e8a45e51d71_%E5%9B%BD%E9%99%85%E8%88%AA%E7%BA%BF%E4%BD%8E%E4%BB%B7%E4%BF%83%E9%94%80%203W%E5%9B%BE.jpg'
  	 		},
  	 		{
  	 			id: '02',
  	 			img:'//ad.qunarzz.com/ad/picture/ba5b0338-ee54-4fa5-a225-3e3c354420b8_%E5%9B%BD%E5%86%85%E8%88%AA%E7%BA%BF.jpg'
  	 		}
  	 	]

  	 }
  }
  
}
</script>
<style lang='stylus' scoped>
	img
		width:100%
		height:150px
</style>
