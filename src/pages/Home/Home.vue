<template>
<div class="hello">
  <Header-component></Header-component>
  <Home-swiper></Home-swiper>
  <nav-list></nav-list>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import HomeSwiper from './components/HomeSwiper'
import NavList from './components/NavList'

export default {
  name: 'Home',
  components: {
  	HeaderComponent,
  	HomeSwiper,
  	NavList
  }
}
</script>
<style lang='stylus' scoped>

</style>
