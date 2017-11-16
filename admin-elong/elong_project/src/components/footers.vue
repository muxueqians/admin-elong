<template>
	<div id="footers">
     <div class="footers_info">
       <dl>
         <dt>加盟合作</dt>
         <dd><a title="酒店加盟">酒店加盟</a></dd>
         <dd><a title="机票酒店分销联盟">开放平台</a></dd>
         <dd><a title="旅游产品代理合作">代理合作</a></dd>
         <dd><a title="在线广告服务">广告服务</a></dd>
         <dd><a title="艺龙商家中心">商家中心</a></dd>
       </dl>
       <dl>
         <dt>关于艺龙</dt>
         <dd><a title="酒店大全">酒店大全</a></dd>
         <dd><a title="国际酒店">国际酒店</a></dd>
         <dd><a title="校园招聘">校园招聘</a></dd>
         <dd><a title="联系艺龙旅行网">联系我们</a></dd>
       </dl>
       <dl>
         <dt>艺龙APP下载</dt>
         <dd class="pd10">
           <i class="papp"></i>
         </dd>
       </dl>
       <dl>
         <dt>艺龙官方微信</dt>
         <dd class="pd10">
           <i class="pwx"></i>
         </dd>
       </dl>
       <dl>
         <dt>艺龙官方小程序</dt>
         <dd class="pd10">
           <i class="pxcx"></i>
         </dd>
       </dl>
     </div>
     <div class="footers_copy">
        © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
        <a>京ICP证010011号</a>
        <a><i class="cyi"></i> 京公网安备11010502026059号</a>
        <i class="cm_icon"></i>
        <a>经营执照</a>
     </div>
     <div class="footers_safe">
       <a class="sicon1"></a><a class="sicon2"></a><a class="sicon3"></a><a class="sicon4"></a><a class="sicon5"></a><a class="sicon6"></a>
     </div>
	</div>
</template>
<script>
export default{
  name:'footers',
  components:{
    Headers
  },
  data () {
    return {

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
	 #footers{
     width: 100%;
     padding: 20px 0;
     border-top: 1px solid #EEE;
     min-width:1000px;
     margin-top: 20px;
     .footers_info{
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        dl{
          cursor: pointer;
          width:18%;
          padding-left:2%;
          dt{
            border-left: 3px solid #5D96C7;
            padding: 0 0 0 10px;
            height: 18px;
            font: 18px/1 Microsoft Yahei;
            margin-bottom: 10px;
            color: #555;
          }
          dd{
            margin-left:14px;
            line-height: 24px;
            font-size: 12px;
            font-family: arial,Verdana, Geneva, Helvetica;
            color: #555;
            a{
              color:#333;
              font-size: 10px;
              font-family: arial,Verdana, Geneva, Helvetica;
              transition: margin 0.5s;
            }
            a:hover{
              color: #F55;
              margin-left: 5px;
              // -webkit-transition: margin 0.5s;
              transition: margin 0.5s;
            }
          }
          .pd10{
            // padding-left: 14px;
            line-height: 24px;
            padding-top: 10px;
            i{
              width: 100px;
              height: 100px;
              display: inline-block;
              background: url(../assets/icon.png) 0 0 no-repeat;
              // vertical-align: middle;
              overflow: hidden;
            }
            .papp{
                  background-position: -259px -56px;
            }
            .pwx{
                 background-position: -362px -58px;
            }
            .pxcx{
                  background-position: -155px -56px;
            } 
          }
        }
     }
     .footers_copy{
      position: relative;
      text-align: center;
      margin: 20px 0;
      font-size: 12px;
      font-family: arial,Verdana, Geneva, Helvetica;
      color: #555;
      line-height: 20px;
      a{
        color: #333;
        cursor: pointer;
        font-size: 12px;
        font-family: arial,Verdana, Geneva, Helvetica;
        line-height: 20px;
        .cyi{
              background-image: url(http://m.elongstatic.com/pcheaderfooter/2017/06/files/headerfoot/img/anbei.png);
              background-size: contain;
              background-position: 0;
              height: 20px;
              width: 20px;
              display: inline-block;
              vertical-align: middle;
        }
      }
      .cm_icon{
        display: inline-block;
        width: 22px;
        height: 27px;
        background:url('../assets/icon.png');
        background-position: -938px -200px;
        vertical-align: middle
      }
     }
     .footers_safe{
        text-align: center;
        a{
          display: inline-block;
          line-height: 26px;
          text-align: center;
          height: 37px;
          background:url('../assets/icon.png');
          margin: 0 5px;
          color: #666;
          text-indent: -9999em;
          position: relative;
          top: 0;
          transition: top 0.5s;
        }
        a:hover{
          top: -5px;
          transition: top 0.5s;
        }
        .sicon1{
            background-position: -329px -436px;
            width: 80px;
        }
        .sicon2{
            background-position: -331px -482px;
            width: 60px;
        }
        .sicon3{
            background-position: -473px -436px;
            width: 92px;
        }
        .sicon4{
            background-position: -565px -436px;
            width: 92px;
        }
        .sicon5{
           background-position: -657px -436px;
           width: 92px;
        }
        .sicon6{
           background-position: -393px -477px;
           width: 83px
        }
     }
   }
</style>