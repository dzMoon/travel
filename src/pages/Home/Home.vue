<template>
<div class="hello">
  <Header-component></Header-component>
  <Header-swiper></Header-swiper>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import HeaderSwiper from './components/HeaderSwiper'

export default {
  name: 'Home',
  components: {
  	HeaderComponent,
  	HeaderSwiper
  }
}
</script>
<style lang='stylus' scoped>

</style>
