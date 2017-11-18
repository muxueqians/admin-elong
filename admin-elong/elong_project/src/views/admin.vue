<template>
	<div id="admin">
     <Headers></Headers>
     <section>
         <Loopimg></Loopimg>
         <Attractions></Attractions>
         <CheapTicket></CheapTicket>
         <Itinerary></Itinerary>
     </section>
     <Footers></Footers>
     <footer>
        <div class="fr_box">
          <div class="f_stern1" v-for=" (item,index) in $router.options.routes" :key="item.id">
            <router-link v-for="child in item.children" :to="{path:item.path+'/'+child.path}" :key="item.id">{{child.alias}}</router-link>
          </div>
          <router-view></router-view>
        </div>
     </footer>
	</div>
</template>
<script>
import Itinerary from '../components/itinerary'
import CheapTicket from '../components/cheap_ticket'
import Attractions from '../components/attractions'
import Loopimg from '../components/loopimg'
import Headers from '../components/headers'
import Footers from '../components/footers'
export default{
  name:'admin',
  components:{
    Headers,
    Footers,
    Loopimg,
    Attractions,
    CheapTicket,
    Itinerary 
  },
  data () {
    return {
    }
        
  },
  methods:{
    // routersfn(){
    //   this.itemsrouter = this.$router.options.routes[1]; 
    //   console.log(this.itemsrouter);
    // }	
    // tohits(e){
    //    var e = e || window.event;
    //    var target = e.target || e.srcElement;
    //    //var that = this;
    //    if(target.nodeName.toLowerCase() === 'a'){
    //       const f_stern1 = document.querySelector('.f_stern1');
    //       f_stern1.style.color='#333';
    //       console.log(f_stern1.style.color);
    //       //this.style.color='#333';
    //    }
    //    return;
    // }
  },
  watch:{

  },
  mounted(){
    // this.routersfn();
  }
}

</script>
<style lang="scss" scope>
	#admin{
    width:100%;
    height:100%;
    section{
      width:100%;
      height:auto;
      border:1px solid red;
    }
    footer{
      width:100%;
      height:auto;
      .fr_box{
        width:100%;
        height:40px;
        background: #7c8fa2;
        line-height: 40px;
        min-width: 1000px;
        .f_stern1{
          width:996px;
          height:40px;
          margin:0 auto;
          display:flex;
          flex-flow:row nowrap;
          justify-content:center;
         a{
          display:block;
          width:166px;
          height:40px;
          text-align:center;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          font-family: arial,Verdana, Geneva, Helvetica;
         }
         // a:hover{
         //  color:#333;
         // }
       }
       div:nth-of-type(1){
        display:none;
       }
       // .f_stern2{
       //  width:996px;
       //  height:200px;
       //  margin:0 auto;
       //  background:red;
       // }
      }
     
    }
  }
</style>