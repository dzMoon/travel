<template>
  <div>
    <h1>周末去哪儿</h1>
    <ul>
      <li class="item" v-for="item in this.weekendList" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl">
        </div>
        <div class="item-desc">
          <p>{{item.title}}</p>
          <p class="msg">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeek',
  props: {
    weekendList: Array
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
