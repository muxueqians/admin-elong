<template>
	<div id="headers">
     <div class="banner">
       <div class="banner_l"></div>
       <div class="banner_r">
          <div class="banner_r1">
            <a class="abanner">积分商城</a><a>|</a><a class="abanner">礼品卡</a><a>|</a><a class="abanner">在线客服</a><a>|</a>
            <span class="spa1"><a class="abanner">English</a><i class="trigon"></i><p><a>简体版</a><a>繁体版</a></p></span>
          </div>
          <div class="banner_r2">
            <a class="banr2">
              <i class="banr21"></i>
              <em class="banr21g">小程序<br/>体验更轻盈</em>
              <div class="banr2h1"></div>
            </a>
            <a class="banr2">
              <i class="banr22"></i>
              <em class="banr22r">手机版<br/>专享五折起</em>
              <div class="banr2h2"></div>
            </a>
            <a class="banr2d">
              <i></i>
              <p>
                 <em>7×24&nbsp;客服电话</em>
                 <b>4009-333-333<i></i></b>
              </p>
              <div class="banr2h3">
                <i class="com_arrow_tl"></i>
                <ul>
                  <li><h5 class="hp1">国内：4009-333-333</h5></li>
                  <li class="li2">
                    <h5 class="hp1">香港：852-8131-8883</h5>
                    <h5 class=" hp1 txt1">852-8131-8983</h5>
                  </li>
                  <li><h5 class="hp1">海外：86-10-6432-9999</h5></li>
                </ul>
              </div>
            </a>
          </div>
       </div>
     </div>
     <div class="nav">
      <div class="nav_box">
        <div class="navb_l">
         <ul class="navb_lu">
           <li><a title="艺龙旅游网">首页</a></li>
           <li><a title="酒店预定">国内酒店</a></li>
           <li class="navsame ali"><a title="国际酒店">国际酒店</a><i class="sicon1"></i></li>
           <li class="navsame ali"><a title="机票预订">机票</a><i class="sicon2"></i></li>
           <li class="ali"><a title="火车票">火车票</a></li>
           <li class="navsame ali"><a title="汽车票">汽车票</a><i class="sicon3"></i></li>
           <li class="ali"><a title="旅游指南">旅游指南</a></li>
         </ul>
        </div>
        <div class="navb_r">
          <div class="navbc">
             <a href="javascript:;" @click="toLogin">登录</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="javascript:;" @click="toRegister">注册</a>
          </div>
          <div class="navbf">
            <div class="nav_login" @click="toLogin">登录</div>
            <ul class="nav_u">
              <li>
                <!-- <i></i> -->
                <a>酒店订单</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>机票订单</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>火车票订单</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>现金账户</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>汽车票订单</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>酒店收藏</a>
              </li>
              <li>
               <!--  <i></i> -->
                <a>我的点评</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a>跟人设置</a>
              </li>
              <li>
                <!-- <i></i> -->
                <a></a>
              </li>
            </ul>
          </div>
        </div>
      </div>  
     </div>
	</div>
</template>
<script>
export default{
  name:'headers',
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
    toRegister(){
      this.$router.push({
          name:'register',
        })
    }
  },
  watch:{

  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
	#headers{
    width:100%;
    height:115px;
    display:flex;
    flex-flow:column;
    .banner{
      width:90%;
      height:50px;
      // border:1px solid blue;
      padding-top:12px;
      margin:0 auto;
      // border:1px solid red;
      display:flex;
      flex-flow:row nowrap;
      justify-content:space-between;
      .banner_l{
        width:130px;
        height:48px;
        background:url('../assets/icon.png') -658px 0px no-repeat;
      }
      .banner_r{
        width:860px;
        height:42px;
        padding-top:5px;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        .banner_r1{
          width:350px;
          height:20px;
          line-height:20px;
          // border:1px solid blue;
          a{
            margin:0px 4px 0px 8px;
            font-size: 12px;
            font-family: arial,Verdana, Geneva, Helvetica;
            color: #999;
            line-height: 20px;
            -webkit-text-size-adjust: none;
          }
          .abanner:hover{
            color:#f55;
          }
          .spa1{
            display:inline-block;
            width:72px;
            height:20px;
            position:relative;
            p{
              width:72px;
              height:60px;
              display:none;
              position:absolute;
              top:0px;
              left:0px;
              a{
                display:block;
                height: 28px;
                line-height: 28px;
                padding: 0px 15px 0 5px;
                border-top: 1px dashed #cacaca;
                margin: 0 5px;
              }
              a:nth-of-type(1){
                margin-top:23px;
              }
            }
          }
          .spa1:hover p{
            width:72px;
            height:83px;
            border:1px solid #c3c3c3;
            display:block;
            a{
              color:#f55;
            }
          }
          .trigon{
            display:inline-block;
            width:11px;
            height:8px;
            background:url("../assets/icon.png") no-repeat;
            background-position:-357px -771px;
            vertical-align:middle;
          }
        }
        .banner_r2{
           width:510px;
           height:42px;
           padding-top:2px;
           padding-left:10px;
           // border:1px solid red;
           display:flex;
           flex-flow:row nowrap;
           // align-items:center;
           .banr2{
            display:inline-block;
            width:150px;
            height:42px;
            cursor:pointer;
            position:relative;
            display:flex;
            flex-flow:row nowrap;
            justify-content:flex-start;
            i{
              display:inline-block;
              width:42px;
              height:42px;
            }
            .banr21{
              background:url('../assets/icon.png') -127px -763px no-repeat;
            }
            .banr22{
              background:url('../assets/icon1.gif') no-repeat;
            }
            em{
              line-height:18px;
              font: 14px/18px Microsoft yahei;
              box-sizing:content-box;
            }
            .banr21g{
              color:#09bb07;
            }
            .banr2h1{
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              display:none;
              width: 217px;
              position: absolute;
              height: 92px;
              top: 54px;
              left: 0px;
              background:url('../assets/icon.png') no-repeat -397px -173px #fff;
              padding:10px;
            }
            .banr22r{
              color:#ff6a6a;
            }
            .banr2h2{
              display:none;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              width: 210px;
              position: absolute;
              height: 92px;
              top: 54px;
              left: 0px;
              background:url('../assets/icon.png') no-repeat -460px -48px #fff;
              padding:10px;
              border: 1px solid #c5c5c5;
            }
           }
           a:nth-of-type(1):hover .banr2h1{
                display:block;
           }
           a:nth-of-type(2):hover .banr2h2{
                display:block;
           }
           .banr2d{
            display:inline-block;
            width:180px;
            height:42px;
            display:flex;
            position:relative;
            flex-flow:row nowrap;
            justify-content:flex-start;
            i{
              width:42px;
              height:42px;
              display:inline-block;
              background:url('../assets/icon.png') -42px -762px no-repeat;
            }
            p{
              width:124px;
              height:42px;
              display:flex;
              flex-flow:column;
              justify-content:flex-start;
              em{
                color: #999;
                font: 14px/18px Microsoft yahei;
              }
              b{
                line-height:18px;
                color: #2064c8;
                font-size: 16px;
                border: 1px solid #fff;
                i{
                  display:inline-block;
                  width: 9px;
                  height:8px;
                  background:url('../assets/icon.png') -378px -772px;
                }
              }
            }
            .banr2h3{
              display:none;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              position: absolute;
              width: 160px;
              border: 1px solid #ccc;
              background: #fff;
              top: 54px;
              left: 0px;
              z-index: 100;
              padding: 4px 10px;
              color: #999;
              font-size:12px;
              .com_arrow_tl{
                position: absolute;
                left: 37px;
                top: -9px;
                display:inline-block;
                height: 9px;
                width: 18px;
                background:url('../assets/icon.png') no-repeat;
                background-position: -209px -758px;
              }
              ul{
                  width:100%;
                  height:113px;
                li{
                  width:100%;
                  height:20px;
                  border-bottom: 1px dashed #c5c5c5;
                  padding: 5px 0;
                  // line-height: 20px;
                  .hp1{
                    line-height: 18px;
                  }
                  .txt1{
                    text-indent:36px;
                  }
                }
                .li2{
                  width:100%;
                  height:40px;
                }
              }
            }
           }
           .banr2d:hover .banr2h3{
              display:block;
           }
        }  
      }
    }
    .nav{
      width:100%;
      margin-top: 13px;
      height: 40px;
      background: #2064c8;
      .nav_box{
        width:90%;
        height:40px;
        margin:0 auto;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        .navb_l{
          width:483px;
          height:40px;
          // border:1px solid red;
          .navb_lu{
            width:100%;
            height:40px;
            display:flex;
            flex-flow:row nowrap;
            justify-content:space-around;
            align-items:center;
            li{
              color: #fff;
              font-size: 14px;
              line-height: 40px;
              padding: 0 12px;
              border-right: 1px solid #3774ce;
            }
            .ali:hover{
              background:#0053ac;
            } 
            li:nth-of-type(1){
              background:#003679;
            }
            .navsame{
              position:relative;
            }
            .sicon1{
              display:inline-block;
              width:21px;
              height:20px;
              background:url('../assets/icon.png') -509px 0;
              position:absolute;
              top:-10px;
              left:56px;
            }
            .sicon2{
              display:inline-block;
              width:41px;
              height:20px;
              background:url('../assets/icon.png') -589px 0;
              position:absolute;
              top:-10px;
              left:30px;
            }
            .sicon3{
              display:inline-block;
              width:39px;
              height:20px;
              background:url('../assets/icon.png') -540px 0;
              position:absolute;
              top:-10px;
              left:30px;
            }
          }     
        }
        .navb_r{
          width:120px;
          height:40px;
          background:#003679;
          position:relative;
          cursor: pointer;
          color:#fff;
          .navbc{
            width:100%;
            height:40px;
            display:flex;
            flex-flow:row nowrap;
            justify-content:center;
            align-items:center;
            a{
              color:#fff;
              font-family: Microsoft YaHei,Tahoma,Geneva,sans-serif;
              font-size: 14px;
            }
            a:hover {
              color: #fff544;
            }
          }
          .navbf{
            display:none;
            position: absolute;
            width: 208px;
            height:279px;
            top:40px;
            right: 0;
            border: 1px solid #c5c5c5;
            background: #fff;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
            .nav_login{
              margin:15px auto 0;
              background: #f80;
              height:34px;
              width:180px;
              display:flex;
              flex-flow:row nowrap;
              justify-content:center;
              align-items:center;
              font: 18px/34px Microsoft YaHei;
              border-radius: 3px;
              a{
                color: #fff;
              }
            }
            .nav_u{
              width: 190px;
              padding: 20px 10px 0;
              height:210px;
              display:flex;
              flex-flow:row wrap;
              li{
                width: 63px;
                height: 60px;
                display:flex;
                flex-flow:column;
                justify-content:center;
                align-items:center;
                margin: 0 0 10px 0;
                position: relative;
                a{
                    width: 60px;
                    height:20px;
                    display: block;
                    padding-top: 34px;
                    text-align: center;
                    color: #999;
                    font-size:12px;
                    line-height:20px;
                    background:url('../assets/icon.png') no-repeat #fff;
                }          
              }
              li:hover a{
                color:#37e;
              }
              li:nth-of-type(1) a{
                background-position:-146px -684px;
              }
              li:nth-of-type(1):hover a{
                background-position:14px -684px;
              }
              li:nth-of-type(2) a{
                background-position: -212px -684px;  
              }
               li:nth-of-type(2):hover a{
                background-position: -44px -684px;  
              }
              li:nth-of-type(3) a{
                background-position: -146px -628px;
              }
              li:nth-of-type(3):hover a{
                background-position: 14px -628px;
              }
              li:nth-of-type(4) a{
                background-position: -210px -627px;
              }
              li:nth-of-type(4):hover a{
                background-position: -42px -627px;
              }
              li:nth-of-type(5) a{
                background-position: -272px -627px; 
              }
              li:nth-of-type(5):hover a{
                background-position: -97px -627px; 
              }
              li:nth-of-type(6) a{
                background-position: -147px -574px;  
              }
              li:nth-of-type(6):hover a{
                background-position: 13px -574px;  
              }
              li:nth-of-type(7) a{
                background-position: -276px -572px;  
              }
              li:nth-of-type(7):hover a{
                background-position: -93px -572px;  
              }
              li:nth-of-type(8) a{
                background-position: -276px -682px;  
              }
               li:nth-of-type(8):hover a{
                background-position: -94px -682px;  
              }
            }
          } 
        }
        .navb_r:hover .navbf{
          display:block;
        }
      }
    }
  }
</style>