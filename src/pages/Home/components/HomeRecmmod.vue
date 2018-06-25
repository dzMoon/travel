<template>
  <div>
    <h1>热门推荐</h1>
    <ul>
      <li class="item" v-for="item in recmmods" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl">
        </div>
        <div class="item-desc">
          <p>{{item.title}}</p>
          <p class="msg">{{item.msg}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/'>
export default {
  name: 'HomeRecmmod',
  data () {
    return {
      recmmods:[{
        id: "001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
        title: "金海湖风景区",
        msg: "9点半来到动物园，已经游客不少，换票入园很方便。进门取了份地图开始了野生动物园之旅。进大门靠右面游行，先来到猴馆，出"
      },{
        id: "002",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg",
        title: "北京欢乐谷",
        msg: "9点半来到动物园，已经游客不少，换票入园很方便。进门取了份地图开始了野生动物园之旅。进大门靠右面游行，先来到猴馆，出"
      },{
        id: "003",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg",
        title: "古北水镇",
        msg: "9点半来到动物园，已经游客不少，换票入园很方便。进门取了份地图开始了野生动物园之旅。进大门靠右面游行，先来到猴馆，出"
      },{
        id: "004",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
        title: "北京野生动物园",
        msg: "9点半来到动物园，已经游客不少，换票入园很方便。进门取了份地图开始了野生动物园之旅。进大门靠右面游行，先来到猴馆，出"
      }]

    }
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
