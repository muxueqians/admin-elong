<template>
	<div id="loopimg">
       <div class="loop">
       	   <swiper :options="swiperOption" ref="mySwiper">

			    <swiper-slide><img src="../assets/bg1.jpg"/></swiper-slide>
			    <swiper-slide><img src="../assets/bg2.jpg"/></swiper-slide>
			    <swiper-slide><img src="../assets/bg3.jpg"/></swiper-slide>
			    <swiper-slide><img src="../assets/bg4.jpg"/></swiper-slide>
			    <swiper-slide><img src="../assets/bg5.jpg"/></swiper-slide>
			    <swiper-slide><img src="../assets/bg6.jpg"/></swiper-slide>
			    
			    
			    <div class="swiper-pagination"  slot="pagination"></div>//
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			    <div class="swiper-scrollbar"   slot="scrollbar"></div>
		  </swiper>
       </div>
       <div class="cont"></div>
       <div class="imgs">
       	 <ul class="imgsu">
       	 	<li>
	          <p>
	            <span>园林酒店</span>
	          </p>
	          <div class="im1"></div>
	        </li>
	        <li>
	          <p>
	            <span>情侣酒店</span>
	          </p>
	          <div class="im2"></div>
	        </li>
	        <li>
	          <p>
	            <span>设计师酒店</span>
	          </p>
	          <div class="im3"></div>
	        </li>
	        <li>
	          <p>
	            <span>青年旅社</span>
	          </p>
	          <div class="im4"></div>
	        </li>
	        <li>
	          <p>
	            <span>特色客栈</span>
	          </p>
	          <div class="im5"></div>
	        </li>
	        <li>
	          <p>
	            <span>海盗酒店</span>
	          </p>
	          <div class="im6"></div>
	        </li>
	        <li>
	          <p>
	            <span>海外温泉</span>
	          </p>
	          <div class="im7"></div>
	        </li>
       	 </ul>
       </div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'loopimg',
  components:{
     swiper,
    swiperSlide
  },
  data () {
    return {
    	 swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        }
    }
        
  },
  methods:{
  
  },
  watch:{

  },
  mounted(){
   
  }
}
</script>
<style lang="scss" scope>
	#loopimg{
		width:100%;
		height:auto;
		background:red;
		.loop{
			width:100%;
			height:380px;
			.swiper-wrapper{
				width:100%;
				height:380px;
				overflow:hidden;
				display:flex;
				flex-flow:row nowrap;
			}
		}
		.imgs{
           width:1200px;
           height:260px;
           background:#d49b3e;
           margin:15px auto;
           .imgsu{
           	   width:100%;
               list-style:none;
               display:flex;
               flex-flow:row nowrap;
               li{
               	 	width:172px;
               	 	height:260px;
               	 	background: #e4a;
               	 	transition:0.3s ease width;
				 	cursor: pointer;
				   p{
		               width:100%;
		               height:260px;
		               background:rgba(0,0,0,0.3);
		               float:left;
		               margin: 0;
		               span{
			                display:block;
			                width:30px;
			                color:#fff;
			                font-size:30px;
			                margin:0 auto;
		                }
                    }
					div{
						width: 100%;
                        height: 100%;
					}
					.im1{
		               background: url(../assets/e1.jpg) center no-repeat;
		            }
		            .im2{
		               background: url(../assets/e2.jpg) center no-repeat;
		            }
		            .im3{
		               background: url(../assets/e3.jpg) center no-repeat;
		            }
		            .im4{
		               background: url(../assets/e4.jpg) center no-repeat;
		            }
		            .im5{
		               background: url(../assets/e5.jpg) center no-repeat;
		             }
		            .im6{
		               background: url(../assets/e6.jpg) center no-repeat;
		            }
		            .im7{
		               background: url(../assets/e7.jpg) center no-repeat;
		            }
			   }
			   li:hover{
				   	width:500px;
				   	p{
				   		display:none;
				   	}
			   }
            }
        }
	}
</style>