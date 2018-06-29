<template>
<div class="header">
  <div class="header-back">
    <span class="iconfont">&#xe605;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe60b;</span>
    <input type="" name="" placeholder="输入城市/景点/游玩主题">
  </div>
  <router-link to='/city'>
    <div class="header-position">{{this.city}}<span class="iconfont">&#xe791;</span> </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderComponent',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/variables.styl'
  .header
    height: 43px
    line-height: 43px
    display: flex
    color: #fff
    background: $bgColor
    .header-back
      text-align: center
      float: left
      width: 32px
    .header-position
      float:right
      width: 80px
      color: #fff
      span
        vertical-align: bottom
    .header-input
      float: left
      flex: 1
      paddint: 6px 10px
      box-sizing:border-box
      position: relative
      span
        position: absolute
        left: 5px
        color: #334
        font-size: 22px
      input
        width:100%
        height:31px
        border-radius: 5px
        border:none
        outline:none
        padding-left: 30px
        box-sizing:border-box
</style>
