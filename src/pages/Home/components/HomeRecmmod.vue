<template>
  <div>
    <h1>热门推荐</h1>
    <ul>
      <router-link tag="li"
        class="item" 
        v-for="item in recommendList" 
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="img-box">
          <img :src="item.imgUrl">
        </div>
        <div class="item-desc">
          <p>{{item.title}}</p>
          <p class="msg">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecmmod',
  props: {
    recommendList: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  h1
    position: relative
    line-height: 3em
    background: #eeeeee
    text-indent: 1em
    text-align: left
  li
    padding: 10px
    box-sizing: border-box
    height:100px
    display: flex
    .img-box
      width: 80px
      height: 80px
      flex-shrink: 0
      img
        width: 100%
        height: 100%  
    .item-desc
      min-width: 0    
      padding-left: 10px
      text-align: left
      p
        padding-bottom:5px
        font-weight: bold
        ellipsis()
        &.msg
          color: #aaa
          font-weight: normal
      button
        padding: 5px
        border-radius: 3px
        background: #ff8300
        color: #fff
        border:none
        outline:none
          
</style>
