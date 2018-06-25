<template>
<div class="hello">
  <Header-component></Header-component>
  <Home-swiper></Home-swiper>
  <nav-list></nav-list>
  <Home-recmmod></Home-recmmod>
  <Home-week></Home-week>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import HomeSwiper from './components/HomeSwiper'
import NavList from './components/NavList'
import HomeRecmmod from './components/HomeRecmmod'
import HomeWeek from './components/HomeWeek'

export default {
  name: 'Home',
  components: {
  	HeaderComponent,
  	HomeSwiper,
  	NavList,
  	HomeRecmmod,
  	HomeWeek
  }
}
</script>
<style lang='stylus' scoped>

</style>
