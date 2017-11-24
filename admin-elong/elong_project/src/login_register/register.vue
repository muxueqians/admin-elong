<template>
	<div id="register">
       <div class="re_head">
       	  <div class="re_headlogo"></div>
       </div>
       <div class="re_content">
       	  <h1 class="title">
       	  	<label>注册新会员</label>
       	  	<span>已有艺龙账号,</span>
       	  	<a href="javascript:;" @click="toLogin">直接登录</a>
       	  </h1>
       	  <div  class="Cardholders">
       	  	<div class="myCards">
       	  		<input class="ips" type="checkbox"/>我有艺龙合作卡
       	  	</div>
       	  </div>
       	  <ul class="messul">
       	  	<li class="phone">
       	  		<p>
       	  			<span class="cf00">*</span>手机:
       	  		</p>
       	  		<span>
       	  			<span class="phonenum">
       	  				<span class="phonetype">中国大陆+86</span>
       	  				<ul class="phonelist" style="display:none"></ul>
       	  			</span>
       	  			<span>
       	  				<input class="want phone_input" type="text" name="mobile" value="" maxlength="11"/>
       	  			</span>
       	  		</span>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>输入验证码:
       	  		</p>
       	  		<span>
       	  			<input class="yzm" type="text" name="validateCode">
       	  		</span>
       	  		<div class="yzmess"></div>
       	  		<a class="changeCode">看不清,换一张</a>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>短信验证码:
       	  		</p>
       	  		<span>
       	  			<input class="smsinput" maxlength="6" type="text" name="smsCodeInput">
       	  			<span class="getSmsCode">获取短信验证码</span>
       	  		</span>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>邮箱:
       	  		</p>
       	  		<span>
       	  			<input class="want email" name="email">
       	  		</span>
       	  	</li>
       	  	<li class="pass_level">
       	  		<p>
       	  			<span class="cf00">*</span>密码:
       	  		</p>
       	  		<span>
       	  			<input class="want password" type="password" name="password">
       	  		</span>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>再次输入密码:
       	  		</p>
       	  		<span>
       	  			<input class="want rePassword" name="rePassword" type="password">
       	  		</span>
       	  	</li>
       	  	<li>
       	  		<p></p>
       	  		<span class="agree">
       	  			<input class="agreediv" type="checkbox" name="">同意接受艺龙发送的促销信息。
       	  		</span>
       	  	</li>
       	  </ul>
       	  <div class="addhabit">
       	  	<a href="#?">
       	  		填写出行习惯
       	  		<span class=""></span>
       	  	</a>
       	  </div>
       	  <div class="register_agree">
       	  	<input type="checkbox" name="" class="agreencheck">同意艺龙旅行网服务条款<a class="readitems">查看条款</a>
       	  </div>
       	  <div class="agree_re">
       	  	<input class="regsubmit" type="button" name="" method="regSubmit" value="立即注册">
       	  </div>
       </div>
	</div>
</template>
<script>
export default{
  name:'register',
  components:{
    
  },
  data () {
    return {
    }
        
  },
  methods:{
    toLogin(){
      this.$router.push({
          name:'logins',
        })
    },
  },
  watch:{

  },
  mounted(){
    var inps=document.getElementsByClassName('want');
    console.log(inps);
  }
}

</script>
<style lang="scss" scope>
	#register{
		width:100%;
		height:786px;
		background-color: #e8eff6;
		.re_head{
			width:1000px;
			height:50px;
			padding:25px 0;
			margin:0 auto;
            .re_headlogo{
            	width:113px;
            	height:48px;
            	float:left;
            	background:url(../assets/myelong_login.png) no-repeat 0 0;
            }
		}
		.re_content{
			width: 940px;
			height:auto;
			background-color: #fff;
			position: relative;
			padding: 36px 30px;
			margin:0 auto;
			h1{
				color:#555;
				white-space:nowrap;
				label{
					font-size:24px;
					font-family:Microsoft YaHei, SimHei, Arial, Helvetica, sans-serif;
					display: inline-block;
                    margin-right: 20px;
				}
				span{
					font-size: 14px;
                    font-weight: normal;
				}
				a{
					font-size: 14px;
                    font-weight: normal;
                    text-decoration: none;
                    color: #36c;
                    white-space: nowrap;
				}
			}
			.Cardholders{
				width:600px;
				border-bottom: 1px dashed #e0e0e0;
				.myCards{
					font-size:12px;
					margin-top:35px;
					margin-left:135px;
					input{
						vertical-align: middle;
						margin-right: 3px;
						font-size: 12px;
					}
				}
			}
			.messul{
				padding-top:20px;
				li{
                   margin-bottom: 20px;
                   overflow: hidden;
                   p{
                   	float: left;
					width: 135px;
					text-align: right;
					font-size: 14px;
					color: #555;
					height: 30px;
					line-height: 30px;
					white-space: nowrap;
					.cf00{
						color: #f00;
					}
                   }
                   span{

                   }
				}
				.phone{
					height:30px;
					.phonenum{
						width: 105px;
						height: 28px;
						float: left;
						background: url(../assets/midify_tel.png) no-repeat 75px -1px;
						border: 1px solid #ccc;
						// border:1px solid red;
						margin: 0 8px 0 0;
						line-height: 28px;
						cursor: pointer;
						padding: 0 0 0 5px;
						position: relative;
						overflow: visible;
						font-size: 12px;
						z-index: 11;
						.phonetype{
							line-height:28px;
							cursor:pointer;
							font-size:12px;
							// border: 1px solid #ccc;
						}
						.phonelist{
							width: 100%;
							border: 1px solid #ccc;
							position: absolute;
							left: -1px;
							top: 28px;
						}
					}
					.phone_input{
						width:128px;
						height:16px;
						font-size:14px;
						line-height:16px;
						border:1px solid #bbb;
						padding:6px 0;
						float:left;
					}
				}
				.yzm{
					width:118px;
					vertical-align:middle;
					height: 16px;
					font-size: 14px;
					line-height: 16px;
					border: 1px solid #bbb;
					padding: 6px 0;
					float: left;
				}
				.yzmess{
					width:65px;
					height:35px;
					margin: 0 3px 0 8px;
				}
				a{
					font-size: 12px;
					text-decoration: none;
					color: #36c;
				}
				.smsinput{
					width: 118px;
					vertical-align: middle;
					height: 16px;
					font-size: 14px;
					line-height: 16px;
					border: 1px solid #bbb;
					padding: 6px 0;
					float: left;
				}
				.getSmsCode{
					width: 120px;
					height: 30px;
					float: left;
					font: 14px/30px Microsoft Yahei;
					background-color: #37D;
					color: #FFF;
					text-align: center;
					margin: 0 5px 0 8px;
					border-radius: 4px;
					cursor: pointer;
				}
				.email{
					width: 248px;
					height: 16px;
					font-size: 14px;
					line-height: 16px;
					border: 1px solid #bbb;
					padding: 6px 0;
					float: left;
				}
				.pass_level{
					margin-bottom:20px;
					.password{
						width: 248px;
						height: 16px;
						font-size: 14px;
						line-height: 16px;
						border: 1px solid #bbb;
						padding: 6px 0;
						float: left;
					}
				}
				.rePassword{
					width: 248px;
					height: 16px;
					font-size: 14px;
					line-height: 16px;
					border: 1px solid #bbb;
					padding: 6px 0;
					float: left;
				}
				.agree{
					font-size: 12px;
					.agreediv{
						width: 20px;
						vertical-align: middle;
						border: none;
						float: none;
						height: 16px;
						font-size: 14px;
						line-height: 16px;
						padding: 6px 0;
					}
				}
				li:nth-of-type(2){
					display:flex;
					flex-flow:row nowrap;
				}
			}
			.addhabit{
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				color: #999;
				margin-left: 135px;
				a{
					display: inline-block;
					vertical-align: middle;
					text-decoration: none;
					font-size: 14px;
					color: #555;
					padding: 0 10px;
					height: 30px;
					line-height: 30px;
					background: #f8f8f8;
					border: 1px solid #d9d9d9;
					border-bottom: 1px solid #f8f8f8;
				}
			}
			.register_agree{
				padding: 20px 0 10px 0;
				font-size: 12px;
				line-height: 14px;
				color: #555;
				margin-left: 135px;
				.agreencheck{
					vertical-align: middle;
                    margin-right: 3px;
                    .readitems{
                    	text-decoration: none;
						color: #36c;
						font-size: 12px;
						line-height: 14px;
                    }
				}
			}
			.agree_re{
				margin-left:135px;
				.regsubmit{
					font-family: Microsoft YaHei, SimHei, Arial, Helvetica, sans-serif;
					display: block;
					border: none;
					background: url(../assets/myelong_login.png) no-repeat 0 -348px;
					width: 200px;
					height: 40px;
					line-height: 40px;
					color: #fff;
					font-size: 18px;
					margin-top: 30px;
					text-align: center;
					cursor: pointer;
				}
			}
		}
	}
</style>