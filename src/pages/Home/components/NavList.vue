<template>
  <div class="nav-container">
    <swiper :options="swiperOption" >
      <swiper-slide v-for='(page,index) in pages' :key='index'>
        <li v-for="nav in page" :key="nav.id">
           <div><img :src="nav.imgUrl"></div>
           <p>{{nav.desc}}</p>
        </li>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: {
    iconList:Array
  },
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = [];
      // const index = 0;
      // const lll = this.lists
      // if(this.lists.length > 8){
        
      // }
      this.iconList.forEach((item, index) => {



        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='stylus' scoped>
  .nav-container
      width:100%
      height:200px
      li
        width:25%
        float:left
        height:100px
        text-align:center
        padding:0 5px
        box-sizing:border-box
        img
          width:55px
          margin-top: 5px
          color: #212121
          font-size: 14px
</style>
