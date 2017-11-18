<template>
	<div id="attractions">
       <div class="attractions_content">
       	  <div class="att_title">
			  	<h2>
			  		<a>目的地指数</a>
			  		<span>覆盖全球75万家酒店，你想住的，我们都有</span>
			  	</h2>
       	  </div>
       	  <!-- 国内 -->
       	  <div class="att_img">
       	  	<h3>
       	  		<a class="att_left">
       	  			<i class="att_icon"></i>
       	  			国内
       	  		</a>
       	  		<span class="on">登高踏青</span><span>小憩温泉</span><span>天然氧吧</span><span>草原撒欢</span><span>小镇时光</span><span>美食之城</span>
       	  		<em class="more right">
       	  			<a>更多<b>>></b></a>
       	  		</em>
       	  	</h3>
       	  	<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan" @click="tohuangShan">
       	  				<div class="huangShan_img">
       	  					<img src="../assets/hs.jpg">
       	  				</div>
       	  				<div class="city_name">黄山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>春意撩人 登高踏青赏春色</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/ems.jpg">
       	  				</div>
       	  				<div class="city_name">峨眉山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>阳春三月 闻着茶香去峨眉</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/wts.jpg">
       	  				</div>
       	  				<div class="city_name">五台山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>迎春 祈福 登五台</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/ls.jpg">
       	  				</div>
       	  				<div class="city_name">庐山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>亲近自然 春游庐山</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  </div>
       	  <div class="empty"></div>
       	  <!-- 国外 -->
       	   <div class="att_img">
       	  	<h3>
       	  		<a class="att_left">
       	  			<i class="att_icon1"></i>
       	  			海外
       	  		</a>
       	  		<span class="on">文艺清新</span><span>面朝大海</span><span>别样建筑</span><span>浪漫主义</span><span>魅力都市</span>
       	  		<em class="more right">
       	  			<a>更多<b>>></b></a>
       	  		</em>
       	  	</h3>
       	  	<ul class="att_theme">
       	  		<li>
       	  			<a class="lunDun" >
       	  				<div class="lunDun_img">
       	  					<img src="../assets/ld.jpg">
       	  				</div>
       	  				<div class="city_name">伦敦</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>风情英伦，帝国余韵</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="qingMai">
       	  				<div class="qingMai_img">
       	  					<img src="../assets/qm.jpg">
       	  				</div>
       	  				<div class="city_name">清迈</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>泰北玫瑰，慢行古城</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="jiZhouDao" >
       	  				<div class="jiZhouDao_img">
       	  					<img src="../assets/jzd.jpg">
       	  				</div>
       	  				<div class="city_name">济州岛</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>最传统的浪漫，最神秘的自然</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luoMa">
       	  				<div class="luoMa_img">
       	  					<img src="../assets/lm.jpg">
       	  				</div>
       	  				<div class="city_name">罗马</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>永恒之城，魅力无限</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  </div>
       </div>   
	</div>
</template>
<script>
export default{
  name:'attractions',
  components:{
   
  },
  data () {
    return {
    }
        
  },
  methods:{
   tohuangShan(){
   	this.$router.push({
         name:huangShan
   	})
   }
   // toRegister(){
   //    this.$router.push({
   //        name:'register',
   //      })
   //  },
  },
  watch:{

  },
  mounted(){
   
  }
}

</script>
<style lang="scss" scope>
	#attractions{
		width:100%;
		height:556px;
		// background:#999;
        .attractions_content{
        	width:90%;
        	height:556px;
        	margin:0 auto;
        	.att_title{
        		width:100%;
        		height:46px;
        		font-family: Microsoft Yahei;
        		font-size: 12px;
				color: #555;
				line-height: 20px;
				-webkit-text-size-adjust: none;
				h2{
					border-bottom: 2px solid #f55;
					padding: 5px 0;
					font-size: 100%;
					font-weight: normal;
					a{
						cursor: text;
						font: 24px/30px Microsoft yahei;
						color: #f55;
						padding-right: 10px;text-decoration: none;
					}
					span{
						font: 14px/30px Microsoft yahei;
                        color: #999;
					}
				}
        	}
        	.att_img{
        		width:100%;
        		height:250px;
        		h3{
        			padding: 10px 0;
					font-size: 100%;
					height:28px;
					font-weight: normal;
					margin: 0;
					.att_left{
						font: 18px/26px Microsoft yahei;
						color: #555;
						float: left;
						padding-right: 20px;
						text-decoration: none;
						cursor: pointer;
						i{
							float: left;
							width: 24px;
							height: 24px;
							overflow: hidden;
							padding-right: 5px;color: #555;
						}
						.att_icon{
							background: url(../assets/icon_index.png) no-repeat 0 0;
							background-position: -576px -101px;
						}
						.att_icon1{
							background: url(../assets/icon_index.png) no-repeat 0 0;
							background-position: -576px -131px;
						}
					}
					span{
                        font: 14px/22px Microsoft yahei;
                        color:#555;
						padding: 1px 10px;
						margin: 4px 10px 0;
						border-radius: 12px;
						cursor: pointer;
						float: left;
					}
					.on{
						background:#F66;
						color:#fff;
					}
					.more{
						position: relative;
						top: 6px;
						float: right;
						font-style: normal;
						font-weight: normal;
						a{
							color: #555;
							font: 14px/24px Microsoft yahei;
							text-decoration: none;
							cursor: pointer;
							b{
								font-family: Simsun;
								font-weight: normal;
								color: #555;
								font: 14px/24px Microsoft yahei;
								cursor: pointer;
							}
						}
					}
        		}
        		.att_theme{
                    overflow:hidden;
                    width:100%;
                    height:202px;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    li{
                    	width:293px;
                    	margin:0 10px 0 0;
                    	overflow:hidden;
                    	position:relative;
                    	a{
                    		display: block;
							width: 100%;
							background-color: #444;
							color: #37e;
							text-decoration: none;
							cursor: pointer;
							div{
								height: 160px;
								width: 100%;
								overflow: hidden;
								img{
									display: block;
									width: 100%;
									margin-top: -20px;
									position: relative;
									bottom: 0;
									transition: bottom .3s;border: 0;
								}
							}
							.city_name{
								position: absolute;
								font: 24px/30px Microsoft yahei;
								color: #fff;
								top: 124px;
								left: 0;
								text-indent: .5em;
								text-shadow: 1px 1px 7px #000;
							}		
                    	}
                    	.scale_tour{
								padding: 5px;
								background: #f7f7f7;
								border-bottom: 1px solid #ccc;
								margin-bottom: 1px;
								p{
									color: #555;
									font: 14px/30px Microsoft yahei;
									margin: 0;
									padding: 0;
								}
							}
                    } 
        		}
        	}
        	.empty{
        		width:100%;
        		height:20px;
        	}
        }
	}
</style>