<template>
	<div id="serviceContract">
     <div class="serviceCon">
         <div class="service_top">
           <ul>
              <li><i class="i1"></i><span>全球75万家酒店</span></li>
              <li><i class="i2"></i><span>订酒店返现金高达20%</span></li>
              <li><i class="i3"></i><span>国际酒店8折起</span></li>
              <li><i class="i4"></i><span>7×24小时服务</span></li>
           </ul>
         </div>
         <div class="service_bottom">
           <div class="left"></div>
           <div class="middle">
              <span>亲，留下您的邮箱，会有惊喜呦~</span>
              <em>
                <input type="text" name="" id="email" value="请输入您的E-mail">
              </em>
              <b>
                <input type="buton" name="" value="立即订阅" id="btnSubEmail">
              </b>
           </div>
           <div class="right">
              <a>艺龙服务协议</a>
           </div>
         </div>
     </div>
	</div>
</template>
<script>
export default{
  name:'serviceContract',
  components:{
   
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
	#serviceContract{
    margin-top:20px;
    width:100%;
    height:181px;
    // background:red;
    font-size: 12px;
    font-family: arial,Verdana, Geneva, Helvetica;
    color: #555;
    line-height: 20px;
    -webkit-text-size-adjust: none;
    .serviceCon{
      width:1200px;
      height:181px;
      margin:0 auto;
      .service_top{
        width:1160px;
        height:60px;
        background:#f7f7f7;
        overflow:hidden;
        padding:20px;
        border-bottom:1px solid #e5e5e5;
        ul{
          width:1160px;
          height:60px;
          li{
            float: left;
            width: 290px;
            font: 16px/60px Microsoft yahei;
            i{
              float: left;
              height: 60px;
              width: 60px;
              margin: 0 10px 0 0;
            }
            .i1{
              background: url(../assets/icon_index.png) no-repeat;
              background-position: -91px -4px;
              overflow: hidden;
            }
            .i2{
              background: url(../assets/icon_index.png) no-repeat;
              background-position: -159px -4px;
              overflow: hidden;
            }
            .i3{
              background: url(../assets/icon_index.png) no-repeat;
              background-position: -228px -4px;
              overflow: hidden;
            }
            .i4{
              background: url(../assets/icon_index.png) no-repeat;
              background-position: -295px -6px;
              overflow: hidden;
            } 
            span{
               font: 16px/60px Microsoft yahei;
            }
          }
        }
      }
      .service_bottom{
        width:100%;
        height:80px;
        overflow:hidden;
        background:#f7f7f7;
        .left{
          float:left;
          height: 80px;
          width: 110px;
          margin-left: -20px;
          -webkit-transition: margin .5s;
          background:url(../assets/icon_index.png) no-repeat;
          background-position: -384px -20px;
        }
        .middle{
            width:680px;
            margin: 30px auto 0; 
            span{
              font: 16px/30px Microsoft yahei;
              color: #71829d;
              padding: 0 5px;
              float: left;
            }
            em{
              font-style: normal;
              font-weight: normal;
              input{
                width: 200px;
                height: 28px;
                border: 1px solid #ccc;
                color: #555;
                margin: 0;
                float: left;
                padding: 0 3px;
                font: 14px/30px Microsoft yahei;
                outline: 0;
              }
            }
            b{
              font-family: Microsoft Yahei;
              input{
                width: 80px;
                background: #3377dd;
                color: #fff;
                border: none;
                cursor: pointer;
                text-align: center;
                height: 30px;
                margin: 0;
                float: left;
                padding: 0 3px;
                font: 14px/30px Microsoft yahei;
                outline: 0;
              }
            }
        }
        .right{
            float: right;
            width:84px;
            height:81px;
            // line-height:80px;
            padding: 0 10px 0 0;
            // vertical-align:middle
            a{
              font: 14px Microsoft yahei;
              color: #37e;
              text-decoration: none;
              cursor: pointer;
              // width:84px;
              // height:19px;
            }
        }
      }
    }
  }
</style>