<template>
  <div class="nav-container">
    <swiper :options="swiperOption" >
      <swiper-slide v-for='(page,index) in pages' :key='index'>
        <li v-for="nav in page" :key="nav.id">
           <div><img :src="nav.img"></div>
           <p>{{nav.title}}</p>
        </li>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      lists:[
         { 
           id:'01',
           img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
           title:'景点门票'
         },
         { id:'02',
           img:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
           title:'名胜古迹'
         },
         { id:'03',
           img:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
           title:'一日游'
         },
         { id:'04',
           img:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
           title:'必游榜单'
         },
         { id:'05',
           img:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
           title:'全部玩乐'
         },
         { id:'06',
           img:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
           title:'平遥古城'
         },
         { id:'07',
           img:'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
           title:'五台山'
         },
         { id:'08',
           img:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
           title:'王家大院'
         },
         { id:'09',
           img:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
           title:'王家大院'
         }
      ],
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
      this.lists.forEach((item, index) => {



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
