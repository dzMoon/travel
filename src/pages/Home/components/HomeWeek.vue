<template>
  <div>
    <h1>周末去哪儿</h1>
    <ul>
      <li class="item" v-for="item in recmmods" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl">
        </div>
        <div class="item-desc">
          <p>{{item.productName}}</p>
          <p class="msg">{{item.productDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/'>
export default {
  name: 'HomeWeek',
  data () {
    return {
      recmmods:[{
        id: "001",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
        productName: "北京必游TOP10",
        productDesc: "来北京必去的景点非这些地方莫属"
      },{
        id: "002",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        productName: "寻找北京的皇城范儿",
        productDesc: "数百年的宫廷庙宇，至今依旧威严霸气"
      },{
        id: "003",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        productName: "学生最爱的博物馆",
        productDesc: "周末干嘛？北京很多博物馆已经免费开放啦"
      },{
        id: "004",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
        productName: "儿童剧场，孩子的乐园",
        productDesc: "带宝贝观看演出，近距离体验艺术的无穷魅力"
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
    box-sizing: border-box
    .img-box
      width: 100%
      height: 100%
      margin-bottom: 5px;
      img
        width: 100%
    .item-desc
      min-width: 0    
      padding: 0px 10px 10px 10px
      text-align: left
      p
        padding-bottom:5px
        font-weight: bold
        ellipsis()
        &.msg
          color: #aaa
          font-weight: normal
</style>
