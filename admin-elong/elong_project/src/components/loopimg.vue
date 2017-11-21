<template>
	<div id="loopimg">
       <div class="loop">
       	   <swiper :options="swiperOption" ref="mySwiper">

			    <swiper-slide><img src="../assets/bg1.jpg" /></swiper-slide>
			    <swiper-slide><img src="../assets/bg2.jpg" /></swiper-slide>
			    <swiper-slide><img src="../assets/bg3.jpg" /></swiper-slide>
			    <swiper-slide><img src="../assets/bg4.jpg" /></swiper-slide>
			    <swiper-slide><img src="../assets/bg5.jpg" /></swiper-slide>
			    <swiper-slide><img src="../assets/bg6.jpg" /></swiper-slide>
			    
			    
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			    <div class="swiper-scrollbar"   slot="scrollbar"></div>
		  </swiper>
		  <div class="aside">
		  	<ul class="asideu">
		  		<li class="on">
		  			<i class="ic1"></i><span>酒店</span>
		  		</li>
		  		<li>
		  			<i class="ic2"></i><span>机票</span>
		  		</li>
		  		<li>
		  			<i class="ic3"></i><span>火车票</span>
		  		</li>
		  		<li>
		  			<i class="ic4"></i><span>手机版</span>
		  		</li>
		  		<div class="emp"></div>
		  	</ul>
		  	<!-- <div class="sbox" style="display:none;">
		  	</div> -->
		  	<div class="mbox">
		  		<div class="sbox">
		  			<div class="snbox_t" >
		  				<div class="snboxt on"><i></i>国内酒店</div>
		  				<div class="snboxt"><i></i>国际酒店</div>
		  			</div>
		  			<!-- 国内酒店 -->
		  			<div class="snbox_b" >
		  				<ul class="snbox_bu">
	  						<li><label>目的地</label><input value="黄山" class="first" type="text" name=""/></li>
	  						<li><label>入住</label><span class="spdata"><input class="second" type="text" name="" value="2017-11-21" /><i class="data"></i></span><span class="sps">退房</span><span class="spdata"><input class="second" type="text" name=""value="2017-11-22" /><i class="data"></i></span></li>
	  						<li><label>关键词</label><input class="first" placeholder="如位置\酒店名\品牌" type="text" name=""/></li>	
		  				</ul>
		  				<div class="bdiv"><span class="sps1">搜索</span><span class="sps2"><i class="icm"></i>地图搜索</span></div>
		  			</div>
		  			<!-- 国际酒店 -->
		  			<div class="snbox_b">
		  				<ul class="snbox_bu">
	  						<li><label>目的地</label><input value="首尔" class="first" type="text" name=""/></li>
	  						<li><label>入住</label><span class="spdata"><input class="second" type="text" name="" value="2017-11-24" /><i class="data"></i></span><span class="sps">退房</span><span class="spdata"><input class="second" type="text" name=""value="2017-11-25" /><i class="data"></i></span></li>
	  						<li><label>关键词</label><input class="first" placeholder="商圈\位置\酒店名" type="text" name=""/></li>	
		  				</ul>
		  				<div class="bdiv"><span class="sps1">搜索</span></div>
		  			</div>
		  		</div>
			  	<div class="sbox">
		  			<div class="snbox_t">
		  				<div class="snboxt on"><i></i>国内机票</div>
		  				<div class="snboxt"><i></i>国际机票</div>
		  			</div>
		  			<div class="snbox_b">
		  				<ul class="snbox_bu">
		  					<li><label>航程类型</label><span><input type="radio" name=""/>单程</span><span><input type="radio" name=""/>往返</span></li>
		  					<li><label>往返城市</label><input class="third" type="text" name="" value="北京"><i class="icmy"></i><input class="third" type="text" name=""value="上海"></li>
		  					<li><label>去程</label><span class="spdata"><input class="second" type="text"  value="2017-11-22" name=""><i class="data"></i></span><span class="fc">返程</span><span class="spdata"><input class="second" type="text" placeholder="yyyy-mmm-dd" name=""><i class="data"></i></span></li>
		  				</ul>
		  				<div class="bdiv"><span class="sps1">搜索</span></div>
		  			</div>
		  			<div class="snbox_b">
		  				<ul class="snbox_bu">
		  					<li><label>航程类型</label><span><input type="radio" name=""/>单程</span><span><input type="radio" name=""/>往返</span></li>
		  					<li><label>往返城市</label><input class="third" type="text" name="" value="北京"><i class="icmy"></i><input class="third" type="text" name=""value="香港"></li>
		  					<li><label>去程</label><span class="spdata"><input class="second" type="text"  value="2017-11-25" name="">周六<i class="data"></i></span><span class="fc">返程</span><span class="spdata"><input class="second" type="text" placeholder="2017-11-27" name="">周一<i class="data"></i></span></li>
		  				</ul>
		  				<div class="bdiv"><span class="sps1">搜索</span></div>
		  			</div>
			  	</div>
			  	<div class="sbox">
			  	    <ul class="sboxu">
			  	    	<li><label>往返城市</label><input class="third" type="text" value="北京"><i class="icmy"></i><input class="third" type="text" value="上海"></li>
			  	    	<li><label>出发日期</label><span class="spdata"><input class="second" type="" value="2017-11-22" name="">明天<i class="data"></i></span><span class="dcar"><input type="checkbox" name="">只看动车/高铁</span></li>
			  	    </ul>
			  	    <div class="bdiv"><span class="sps1">搜索</span></div>
			  	</div>
			  	<div class="sbox dsbox">
			        <div class="ids"></div>
			  	</div>
		  	</div>
		  </div>
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
    const lis=document.querySelectorAll(".asideu li");
    // console.log(lis);
    const bs=document.querySelectorAll(".mbox .sbox");
    // console.log(bs);
    const nbs=document.querySelectorAll(".snbox_t .snboxt");
    
    const nts=document.querySelectorAll(".snbox_b");
     console.log(nts);
    let index=0;
    for(let i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
        	for(let j=0;j<lis.length;j++){
        		lis[j].className="";
        		bs[j].style.display="none";
        	}
        	lis[this.index].className="on";
        	bs[this.index].style.display="block";
        }
    }


    for(let k=0;k<nbs.length;k++){
    	nbs[k].index=k;
    	nbs[k].onclick=function(){
    		if(k>1){
    			for(let m=0;m<nts.length;m++){
    			  if(m>1){
    			  	nts[m].style.display="none";
                    nbs[m].className="snboxt";
    			  }
                   
    		   }
    		    nts[this.index].style.display="block";
                nbs[this.index].className="snboxt on"; 
    		}else{
    			for(let m=0;m<nts.length;m++){
    				if(m<=1){
    					nts[m].style.display="none";
                       nbs[m].className="snboxt";
    				}
                   
    		   }
    		    nts[this.index].style.display="block";
                nbs[this.index].className="snboxt on"; 
    		}
    		
    	}
    }
  }
}
</script>
<style lang="scss" scope>
	#loopimg{
		width:100%;
		height:auto;
		.loop{
			width:100%;
			height:380px;
			position:relative;
			overflow:hidde;
			.swiper-wrapper{
				width:100%;
				height:380px;
				// overflow:hidden;
				display:flex;
				flex-flow:row nowrap;
				img{
					width:100%;
					height:100%;
					background-size:cover;
				}
			}
			.aside{
				width:600px;
				height:300px;
				box-shadow: 2px 2px 2px rgba(0,0,0,.2);
                position:absolute;
                z-index:1;
                top:40px;
                left:70px;
                display:flex;
                box-sizing:border-box;
                flex-flow:row nowrap;
                .asideu{
                	width:99px;
                	height:300px;
                	border-right: 1px solid #e1e1e1;
                	li,.emp{
                		width:63px;
                		height:59px;
                		line-height:59px;
                		cursor: pointer;
                		text-align:center;
                		padding:0 18px;
                		background: #f3f3f3;
                		border-bottom:1px solid #e1e1e1;
                		display:flex;
                		flex-flow:row nowrap;
                		justify-content:center;
                		align-items:center;
						i{
							display:inline-block;
							width: 15px;
							height: 15px;
							margin-right:5px;
						}
						.ic1{
							margin-right:7px;
							background:url('../assets/icon_index.png');
							// background-position: -557px -345px;
							background-position: -584px -345px;
						}
						.ic2{
							margin-right:7px;
							background:url('../assets/icon_index.png');
							background-position: -582px -367px;
						}
						.ic3{
							background:url('../assets/icon_index.png');
							background-position: -584px -386px;
						}
						.ic4{
							width:16px;
							height:19px;
							background:url('../assets/icon_index.png');
							background-position: -581px -316px;
						}
                        span{
                        	font-size: 14px;
                        	color: #555;
                        }
                		
                	}
                	.on{
                		background:#FFF;
                		.ic1{
							margin-right:7px;
							background:url('../assets/icon_index.png');
							background-position: -557px -345px;
							
						}
						.ic2{
							margin-right:7px;
							background:url('../assets/icon_index.png');
							background-position: -555px -367px;
						}
						.ic3{
							background:url('../assets/icon_index.png');
							background-position: -557px -386px;
						}
						.ic4{
							width:16px;
							height:19px;
							background:url('../assets/icon_index.png');
							background-position: -554px -316px;
						}
                		span{
                			color: #37D;
                		}
                	}
                	li:nth-of-type(4){

                		border:0;
                	}
                	.emp{
                		border:0;
                	}
                }
                .mbox{
                	width:500px;
                	height:299px;
                	background: #FFF;
                	// border:1px solid blue;
                	.sbox{
                		width:440px;
                		height:300px;
                		padding:0 30px;
                		.snbox_t{
                			margin-top:20px;
                			width:100%;
                			height:30px;
                			display:flex;
                			border-bottom: 2px solid #aaa;
                			flex-flow:row nowrap;
                			.snboxt{
                				width:84px;
                				height:30px;
                				position:relative;
                				text-align:center;
                			}
                			.on{
                				color: #37D;
                				border-bottom: 2px solid #37D;
                				i{
                					display: block;
									width: 7px;
									height: 4px;
									position: absolute;
									left: 42px;
									bottom: 0;
									background: url(../assets/icon_index.png) no-repeat -475px 0;
                				}
                			}
                		}
                		.sboxu{
                			width:100%;
            				height:140px;
            				// border:1px solid red;
            				display:flex;
            				flex-flow:column;
                			margin-top:50px;
                			li{
                				width:100%;
                				height:30px;
                				margin-top:20px;
                				font-size: 14px;
								color: #555;
            					display:flex;
            					flex-flow:row nowrap;
                				label{
                                    display:inline-block;
	        						width:60px;
	        						height:30px;
	        						margin-right:10px;
	        						line-height:30px;
	        						text-align:right;
                				}
                				.third{
                					width:158px;
            						height:30px;
            						border:1px solid #CCC;
                				}
                				.icmy{
                					margin:7px 10px;
									height: 12px;
									width: 20px;
									display: inline-block;
									background: url(../assets/icon.png) no-repeat;
									// background-position: -299px -762px;
									background-position: -267px -762px;
                				}
                				.spdata{
            						display:inline-block;
            						width:152px;
            						height:32px;
            						padding:0 3px;
            						border: 1px solid #CCC;
            						position:relative;
            						.second{
                						width:100px;
                						height:32px;
                						border:0;
            					    }
            					    .data{
            					    	display:inline-block;
            					    	position: absolute;
										display: block;
										top: 9px;
										right: 4px;
										height: 16px;
										width: 16px;
										background: url(../assets/icon.png) no-repeat;
										background-position: -480px -763px;
            					    }
                				}
                				.dcar{
                					margin-left:10px;
                					display:inline-block;
                					margin-top:10px;
                				}
                			}
                		}
                		.bdiv{
                			width:264px;
            				height:32px;
            				padding: 0 0 0 70px;
            				// border:1px solid red;
            				display:flex;
            				flex-flow:row nowrap;
            				.sps1{  
        					    display:inline-block;
        						width:159px;
        						height:32px;
        						background:#f55;
        						width: 159px;
								color: #fff;
								height: 32px;
								line-height: 32px;
								border-radius: 3px;
								font-size: 16px;
								text-align: center;
								cursor: pointer;
                			}
                		}
                		.snbox_b{
                			width:100%;
                			height:250px;
                			// border:1px solid red;
                			.snbox_bu{
                				width:100%;
                				height:174px;
                				// border:1px solid red;
                				display:flex;
                				flex-flow:column;
                				li{
                					width:100%;
                					height:30px;
                					margin-top:20px;
                					font-size: 14px;
									color: #555;
                					display:flex;
                					flex-flow:row nowrap;
                					label{
                						display:inline-block;
                						width:60px;
                						height:30px;
                						margin-right:10px;
                						line-height:30px;
                						text-align:right;
                					}
                					.third{
                						width:158px;
                						height:30px;
                						border:1px solid #CCC;
                					}
                					.icmy{
                						margin:7px 10px;
										height: 12px;
										width: 20px;
										display: inline-block;
										background: url(../assets/icon.png) no-repeat;
										// background-position: -299px -762px;
										background-position: -267px -762px;
										// background-position: -299px -762px;
										// vertical-align:middle;
                					}
                					span{
                						line-height: 30px;
										padding: 0 5px;
										// color: #555;
										// font-size: 14px;
                					}
                					.first{
                						width:346px;
                						height:30px;
                						padding:0 4px;
                						border: 1px solid #CCC;
                					}
                					.spdata{
                						display:inline-block;
                						width:152px;
                						height:32px;
                						padding:0 3px;
                						border: 1px solid #CCC;
                						position:relative;
                						.second{
	                						width:100px;
	                						height:32px;
	                						border:0;
                					    }
                					    .data{
                					    	display:inline-block;
                					    	position: absolute;
											display: block;
											top: 9px;
											right: 4px;
											height: 16px;
											width: 16px;
											background: url(../assets/icon.png) no-repeat;
											background-position: -480px -763px;
                					    }
                					}
                					.sps{
                						width:38px;
                						height:30px;
                						font-size: 14px;
                						text-align:center;
										color: #555;
										line-height: 30px;
										// padding: 0 10px 0 0;
                					}
                				}
                			}
                			.bdiv{
                				width:264px;
                				height:32px;
                				padding: 0 0 0 70px;
                				// border:1px solid red;
                				display:flex;
                				flex-flow:row nowrap;
                				.sps1{  
            					    display:inline-block;
            						width:159px;
            						height:32px;
            						background:#f55;
            						width: 159px;
									color: #fff;
									height: 32px;
									line-height: 32px;
									border-radius: 3px;
									font-size: 16px;
									text-align: center;
									cursor: pointer;
                				}
                				.sps2{
                					display:inline-block;
                					width:73px;
                					height:30px;
                					color: #555;
									padding: 0 10px;
									height: 30px;
									line-height: 30px;
									margin-left:10px;
									border-radius: 3px;
									font-size: 14px;
									cursor: pointer;
									border: 1px solid #ccc;
									.icm{
										display:inline-block;
										width:14px;
										height: 18px;
										background:url(../assets/icon.png) no-repeat;
										background-position: -455px -764px;
										vertical-align:middle;
										margin-right:3px;
									}
                				}
                			}
                		}
                		.snbox_b{
                			display:none;
                		}
                		.snbox_b:nth-of-type(1){
                			display:block;
                		}
                	}
                	.dsbox{
                		width:100%!important;
                		height:100%!important;
                		// border:1px solid red !important;
                		padding:0px;
                		.ids{
                			width:455px;
                			height:300px;
                			margin:0 auto;
                			// border:1px solid yellow;
                			background:url('../assets/mobile_bg.png') no-repeat center bottom;
                		}
                	}
                	.sbox{
                		display:none;
                	}
                	.sbox:nth-of-type(1){
                		display:block;
                	}
                }
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