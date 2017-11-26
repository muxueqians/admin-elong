<template>
	<div id="logins">
       <div class="logins_head">
       	   <div class="logins_icon"></div>
       </div>
       <div class="loginbox">
       	  <div class="logpic">
       	  	<a class="javascript:;" @click="toAdmin">
       	  		<img src="../assets/login_banner.jpg" width="620" height="350"/>
       	  	</a>
       	  </div>
       	  <div class="login_content">
       	  	<div class="login_top">
       	  		<label>
       	  			<input name="loginType" type="radio"/>普通登录
       	  		</label>
       	  		<label>
       	  			<span>
       	  				<input name="loginType" type="radio"/>手机动态密码登录
       	  			</span>
       	  		</label>
       	  	</div>
       	  	<div class="login_middle">
       	  		<div class="inputbox">
       	  			<span class="icon"></span>
       	  			<input class="username" placeholder="用户名/卡号/手机号/邮箱" type="text"/>
       	  			<div class="input_tip" style="display:none;">您输入的用户名和密码不匹配，请重新输入!</div>
       	  		</div>
       	  		<div class="inputbox1">
       	  			<span class="icon1"></span>
       	  			<input class="userpassword" placeholder="密码"  type="text"/>
       	  		</div>
       	  		<div class="inputbox2" style="display:none;">
       	  			<span class="icon1"></span>
       	  			<input class="blur" type="password"/>
       	  		</div>
       	  		<div class="inputbox3">
       	  			<input class="yzm" placeholder="验证码"type="text" @blur="pdy"/>
       	  			<span class="yzm_div">9523</span>
       	  			<a >换一张</a>
       	  			<div class="yzm_result">您输入的验证码不正确</div>
       	  		</div>
       	  		<div class="forget">
       	  			<span>
       	  				<span class="rememberMe"></span>
       	  				<span class="rememberText">两个月内免登录</span>
       	  			</span>
       	  		</div>
       	  		<a class="loginbtn">登录</a>
       	  	</div>
       	  </div>
       </div>
       <div class="register_tip">
       	  <a href="javascript:;" @click="toRegister" title="立即注册">
       	  	立即注册<i></i>
       	  </a>
       </div>
       <div class="login_footer">
       	  <p class="mobile">
       	  	<a class="iphone">
       	  		<span class="icon"></span>
       	  		iPhone / iPad
       	  	</a>
       	  	<a class="android">
       	  		<span class="icon"></span>
       	  		Android
       	  	</a>
       	  </p>
       	  <p class="agent">
       	  	<a>代理合作</a>|<a>广告服务</a>|<a>联系我们</a>©1999 - 2014 eLong, Inc or its affiliates. All Rights Reserved.
    
       	  </p>
       </div>
	</div>
</template>
<script>
export default{
  name:'logins',
  components:{
    
  },
  data () {
    return {
    }
        
  },
  methods:{
    toRegister(){
      this.$router.push({
          name:'register',
        })
    },
    toAdmin(){
      this.$router.push({
      	name:'admin',
      })
    },
    pdy(){
    	var yz=document.querySelector('.yzm');
        var pd=document.querySelector('.yzm_div');
        var ps=document.querySelector('.yzm_result')
        if(yz.value!==pd.innerHTML){
               ps.style.display="block";
        }else{
        	ps.style.display="none";
        }
    }
  },
  watch:{

  },
  mounted(){
    var log=document.querySelector('.loginbtn');
    var fsn=document.querySelector('.username');
    var usp=document.querySelector('.userpassword');
    var yz=document.querySelector('.yzm');
    var pd=document.querySelector('.yzm_div')
     log.onclick=function(){
        if(fsn.value!=""&&usp.value!=""&&yz.value!=""){
        	alert('恭喜登录成功！');
        }else{
        	alert('请完成填写项！');
        }
     }
  }
}

</script>
<style lang="scss" scope>
	#logins{
		width:100%;
		height:626px;
		background-color: #e8eff6;
		.logins_head{
			width:1000px;
			height:50px;
			margin:0 auto;
			padding:25px 0;
			.logins_icon{
				width:113px;
				height:48px;
				float:left;
				background:url(../assets/myelong_login.png) no-repeat 0 0;
			}
		}
		.loginbox{
			width: 1000px;
			height: 350px;
			margin: 0px auto;
			background-color: #fff;
			position: relative;
			.logpic{
				width:620px;
				height:350px;
				float:left;
				a{
					text-decoration: none;
                    color: #36c;
                    img{
                    	border:0;
                    }
				}
			}
			.login_content{
				width: 285px;
				height: 322px;
				padding: 24px 45px 0px;
				float: right;
				position: relative;
				.login_top{
					height: 12px;
					font: 12px/1 Arial;
					color: #555;
					margin-bottom: 20px;
					label{
						margin-right:50px;
					}
					input{
						vertical-align:middle;
						margin-right:3px;
					}
				}
				.login_middle{
					width:285px;
					height:237px;
					.inputbox{
						margin-top: 5px;
						position: relative;
						width: 100%;
						height: 35px;
						.icon{
							width:30px;
							height:30px;
							margin-left:6px;
							display:inline-block;
							vertical-align:middle;
							background:url(../assets/myelong_login.png) no-repeat;
							background-position: -108px -271px;
                            float: right;
						}
						.username{
							width:238px;
							padding-right:2%;
							color:#999;
							box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
							position: absolute;
							z-index: 2;
							height: 21px;
							line-height: 21px;
							padding: 6px 15% 6px 3px;
							left: 0;
							top: 0;
							background-color: transparent;
							border: 1px solid #cccccc;
							border-radius: 2px;
							font-size: 14px;
						}
						.input_tip{
							width: 277px;
							padding-left: 6px;
							background-color: #FFEEED;
							border: 1px solid #FFD1CF;
							color: #E61300;
							font-size: 12px;
							line-height: 18px;
							position: absolute;
							top: 35px;
							left: 0;
							z-index: 10;
							font-family: arial, Verdana, Geneva, Helvetica;
						}
					}
					.inputbox1{
						margin-top:20px;
						position: relative;
						width: 100%;
						height: 35px;
						.icon1{
							float: right;
							width: 30px;
							height: 30px;
							margin-left: 6px;
							display: inline-block;
							vertical-align: middle;
							background: url(../assets/myelong_login.png) no-repeat;
							background-position: -135px -271px;
						}
						.userpassword{
							width: 238px;
							padding-right: 2%;
							color: #999;
							box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
							position: absolute;
							z-index: 2;
							height: 21px;
							line-height: 21px;
							padding: 6px 15% 6px 3px;
							left: 0;
							top: 0;
							background-color: transparent;
							border: 1px solid #cccccc;
							border-radius: 2px;
							font-size: 14px;
						}
					}
					.inputbox2{
						margin-top: 20px;
						position: relative;
						width: 100%;
						height: 35px;
						.icon1{
							float: right;
							width: 30px;
							height: 30px;
							margin-left: 6px;
							display: inline-block;
							vertical-align: middle;
							background: url(../assets/myelong_login.png) no-repeat;
							background-position: -135px -271px;
						}
						.blur{
							width: 238px;
							padding-right: 2%;
							color: #999;
							box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
							position: absolute;
							z-index: 2;
							height: 21px;
							line-height: 21px;
							padding: 6px 15% 6px 3px;
							left: 0;
							top: 0;
							background-color: transparent;
							border: 1px solid #cccccc;
							border-radius: 2px;
							font-size: 14px;
						}
					}
					.inputbox3{
                       margin-top:20px;
                       position: relative;
					   width: 100%;
					   height: 35px;
					   // display:flex;
					   // flex-flow:row nowrap;
					   // align-items:center;
					   .yzm{
					   	padding-right: 2%;
					   	color: #999;
					   	width: 109px;
					   	border: 1px solid #E81300;
						box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
						position: absolute;
						z-index: 2;
						height: 21px;
						line-height: 21px;
						padding: 6px 15% 6px 3px;
						left: 0;
						top: 0;
						background-color: transparent;
						border-radius: 2px;font-size: 14px;
					   }
					   .yzm_div{
					   	display:inline-block;
					   	width:65px;
						margin-left: 160px;
						vertical-align: middle;
						height: 35px;
						line-height:35px;
						text-align:center;
						// border:1px solid red;
					   }
					   a{
					   	font-size: 12px;
						margin-left: 5px;
						text-decoration: none;
						color: #36c;
					   }
					   .yzm_result{
					   	width: 277px;
						padding-left: 6px;
						background-color: #FFEEED;
						border: 1px solid #FFD1CF;
						color: #E61300;
						font-size: 12px;
						line-height: 18px;
						position: absolute;
						top: 35px;
						left: 0;
						z-index: 10;
						font-family: arial, Verdana, Geneva, Helvetica;
						display:none;
					   }
					}
					.forget{
						margin: 20px 0 13px 0;
						height: 12px;
						line-height: 12px;
						width: 285px;
						span{
							font-size: 12px;
							color: #555;
							float: left;
							line-height: 12px;
							font-family: arial, Verdana, Geneva, Helvetica;
							.rememberMe{
                                background-position: -67px -102px;
								width: 12px;
								height: 12px;
								margin-right: 3px;
								display: inline-block;
								vertical-align: middle;
								background: url(../assets/myelong_login.png) no-repeat;
								background-position: -67px -102px;
						    }
						    .rememberText{
						    	font-size: 12px;
								color: #555;
								float: left;
								line-height: 12px;
								font-family: arial, Verdana, Geneva, Helvetica;
						    }
						}	
					}
					.loginbtn{
						font: 18px Microsoft YaHei;
						display: block;
						text-align: center;
						width: 285px;
						height: 40px;
						line-height: 40px;
						color: #fff;
						background-color: #ff8800;
						border-radius: 2px;
						margin-top: 20px;
						text-decoration: none;
					}
				}
			}
		}
		.register_tip{
			width: 1000px;
			margin: 0 auto;
			margin-top: 20px;
			height: 15px;
			padding-right: 12px;
			text-align: right;
			color: #999999;
			font-size: 12px;
			line-height: 15px;
			font-family: arial, Verdana, Geneva, Helvetica;
			a{
				margin-left: 5px;
				color: #3365CB;
				text-decoration: none;
				i{
					display: inline-block;
					width: 15px;
					height: 15px;
					vertical-align: -4px;
					margin-left: 3px;
					background: url(../assets/myelong_login.png) no-repeat 0 -430px;
					overflow: hidden;
					color: #3365CB;
				}
			}
		}
		.register_tip a:hover{
			color: #FF6500;
			i{
				background: url(../assets/myelong_login.png) no-repeat 0 -445px;
			}
		}
		.login_footer{
			text-align: center;
			padding: 50px 0 30px;
			width: 1000px;
			margin: 0 auto;
			border-top: 1px solid #EEE;
			min-width: 1000px;
			.mobile{
				color: #555555;
				font-size: 12px;
				line-height: 30px;
				.iphone{
					color: #555555;
					font-size: 12px;
					margin: 0 5px;
					text-decoration: none;
					line-height: 30px;
					font-family: arial, Verdana, Geneva, Helvetica;
					.icon{
							width: 18px;
							height: 22px;
							margin: 0 5px 0 30px;
							display: inline-block;
							vertical-align: middle;
							background: url(../assets/myelong_login.png) no-repeat;
							 background-position: 0 -277px;
					}
				}
				.iphone:hover{
					color: #f60;
					.icon{
						background: url(../assets/myelong_login.png) no-repeat;
					    background-position: 0 -304px;
					}
				}
				.android{
					color: #555555;
					font-size: 12px;
					margin: 0 5px;
					text-decoration: none;
					line-height: 30px;
					font-family: arial, Verdana, Geneva, Helvetica;
					.icon{
                       
						width: 18px;
						height: 22px;
						margin: 0 5px 0 30px;
						display: inline-block;
						vertical-align: middle;
						background: url(../assets/myelong_login.png) no-repeat;
						background-position: -25px -276px;
					}
				}
				.android:hover{
					color: #f60;
					.icon{
						background: url(../assets/myelong_login.png) no-repeat;
					    background-position: -25px -303px;
					}
				}
			}
			.agent{
				color: #555555;
				font-size: 12px;
				line-height: 30px;
				text-align: center;font-family: arial, Verdana, Geneva, Helvetica;
				a{
					color: #555555;
					font-size: 12px;
					margin: 0 5px;
					text-decoration: none;
					line-height: 30px;
					text-align: center;
					font-family: arial, Verdana, Geneva, Helvetica;
				}
				a:hover{
					color: #f60;
				}
			}
		}
	}
</style>