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
       	  				<!-- <span class="phonetype">中国大陆+86</span>
       	  				<ul class="phonelist" style="display:none"></ul> -->
       	  				<select name="" class="phonetype">
		                	<option value="">中国大陆+86</option>
		                	<option value="">中国香港+852</option>
		                	<option value="">中国澳门+853</option>
		                	<option value="">中国台湾+886</option>
                       </select>
       	  			</span>
       	  			<span>
       	  				<input class="want phone_input" type="text"  @blur="bphone" @focus="fphone" name="mobile" value="" maxlength="11"/>
       	  			</span>
       	  		</span>
       	  		<div class="dis"><i></i><span></span></div>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>输入验证码:
       	  		</p>
       	  		<span>
       	  			<input class="yzm" type="text" name="validateCode">
       	  		</span>
       	  		<div class="yzmess">7862</div>
       	  		<a class="changeCode">看不清,换一张</a>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>短信验证码:
       	  		</p>
       	  		<span>
       	  			<input class="want smsinput" maxlength="6" type="text" name="smsCodeInput">
       	  			<span class="getSmsCode">获取短信验证码</span>
       	  		</span>
       	  		<div class="dis"><i></i><span></span></div>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>邮箱:
       	  		</p>
       	  		<span>
       	  			<input class="want email" @blur="bemail" @focus="femail" name="email">
       	  		</span>
       	  		<div class="dis"><i></i><span></span></div>
       	  	</li>
       	  	<li class="pass_level">
       	  		<p>
       	  			<span class="cf00">*</span>密码:
       	  		</p>
       	  		<span>
       	  			<input class="want password" type="password" name="password">
       	  		</span>
       	  		<div class="dis"><i></i><span></span></div>
       	  	</li>
       	  	<li>
       	  		<p>
       	  			<span class="cf00">*</span>再次输入密码:
       	  		</p>
       	  		<span>
       	  			<input class="want rePassword"  @blur="bpassword"  name="rePassword" type="password">
       	  		</span>
       	  		<div class="dis"><i></i><span></span></div>
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
    // fpassword:function(){
    // 	// alert(1)
    // },
    fphone(){
    	var inps=document.getElementsByClassName('want');
        var divs=document.getElementsByClassName('dis');
        var ic=document.querySelectorAll('.dis i');
        var ics=document.querySelectorAll('.dis span');
        ic[0].className="icf";
    	ics[0].innerHTML="请输入常用的手机号，方便联系";
    	divs[0].style.display="block";
    },    
    bphone(){
    	var inps=document.getElementsByClassName('want');
        var divs=document.getElementsByClassName('dis');
        var ic=document.querySelectorAll('.dis i');
        var ics=document.querySelectorAll('.dis span');
    	var re=/^1[34578]{1}[0-9]{9}$/g;
    	var isok=re.test(inps[0].value);
    	if(!isok){
    		ic[0].className="ice";
    		ics[0].innerHTML="请输入正确的手机号";
    		divs[0].style.display="block";
    	}else{
    		divs[0].style.display="none";
    	}
    },
    femail(){
    	var inps=document.getElementsByClassName('want');
        var divs=document.getElementsByClassName('dis');
        var ic=document.querySelectorAll('.dis i');
        var ics=document.querySelectorAll('.dis span');
        ic[2].className="icf";
    	ics[2].innerHTML="请输入常用的邮箱地址";
    	divs[2].style.display="block";
    },
    bemail(){
    	var inps=document.getElementsByClassName('want');
        var divs=document.getElementsByClassName('dis');
        var ic=document.querySelectorAll('.dis i');
        var ics=document.querySelectorAll('.dis span');
        var re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var isok=re.test(inps[2].value);
        if(!isok){
        	ic[2].className="ice";
    		ics[2].innerHTML="请输入正确的邮箱地址";
    		divs[2].style.display="block";
        }else{
        	divs[2].style.display="none";
        }
    },
    bpassword(){
    	var inps=document.getElementsByClassName('want');
        var divs=document.getElementsByClassName('dis');
        var ic=document.querySelectorAll('.dis i');
        var ics=document.querySelectorAll('.dis span');
        if(inps[3].value!==inps[4].value){
        	ic[4].className="icf";
    		ics[4].innerHTML="两次密码不一致,请重新输入正确的密码";
    		divs[4].style.display="block";
        }else{
        	divs[4].style.display="none";
        }
    }
  },
  watch:{
  	// background:url(../assets/myelong_login.png);background-position: -315px -248px;';

  },
  mounted(){
  //   var inps=document.getElementsByClassName('want');
  //   // console.log(inps);
  //   var divs=document.getElementsByClassName('dis');
  //   var ic=document.querySelectorAll('.dis i');
  //   var ics=document.querySelectorAll('.dis span');
  //   // console.log(divs);// inps[1].value
  //   console.log(ics);
  //   function  phone(){
  //   	var re=/^1[34578]{1}[0-9]{9}$/g;
  //   	var isok=re.test(inps[0].value);
  //   	if(inps[0].value==""){
  //   		ic[0].className="ice";
  //   		ics[0].innerHTML="请输入正确的手机号";
  //   		divs[0].style.display="block";
  //   	}else if(!isok){
  //            ic[0].className="ice";
  //            ics[0].innerHTML="请输入正确的手机号";
  //            divs[0].style.display="block";
  //   	}else{
  //   		divs[0].style.display="none";
  //   	}
//   }
  //   phone();

    var sub=document.querySelector('.regsubmit');
    console.log(sub);	
    var inps=document.getElementsByClassName('want');
    var divs=document.getElementsByClassName('dis');
    var ic=document.querySelectorAll('.dis i');
    var ics=document.querySelectorAll('.dis span');
    sub.onclick=function(){
    	if(inps[0].value!=""&&inps[1].value!=""&&inps[2].value!=""&&inps[3].value!=""&&inps[4].value!=""){
    		alert("恭喜您注册成功！");
    	}else{
    		alert("请将填写项填写完整！");
    	}
    } 	

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
                   display:flex;
                   flex-flow:row nowrap;
                   overflow: hidden;
                   .dis{
                   	margin-left:10px;
                    font-size: 12px;
                    color: #999;
                   	width:auto;
                   	// width:300px;
                   	height:28px;
                   	line-height:28px;
                   	// vertical-align:center;

                   	// border:1px solid red;
                   	i{
                   		display:inline-block;
                   		width:16px;
                   		height:16px;
                        padding-left:5px;
                        margin-top: 7px;
                       
                   	}
                   	.icf{
                   		background:url(../assets/myelong_login.png) no-repeat;
                   		background-position: -315px -267px;
                   	}
                   	.ice{
                   		background:url(../assets/myelong_login.png) no-repeat;
                   		background-position: -315px -248px;
                   	}
                   	span{
                   		display:inline-block;
                   		// width:100%;
                   		height:28px;
                   		line-height:28px;
                   		// padding-bottom:5px;
                   		padding-bottom:10px;
                   		vertical-align:middle;
                   		// margin-bottom:3px;
                   	}

                   }
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
						// background: url(../assets/midify_tel.png) no-repeat 75px -1px;
						border: 1px solid #ccc;
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
							border:0;
							outline:none;
							// border: 1px solid #ccc;
						}
						// .phonelist{
						// 	width: 100%;
						// 	border: 1px solid #ccc;
						// 	position: absolute;
						// 	left: -1px;
						// 	top: 28px;
						// }
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