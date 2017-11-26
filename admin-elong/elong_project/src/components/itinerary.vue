<template>
	<div id="itinerary">
      <div class="iti_box">
         <div class="iti_title">
            <h2>
               <a>旅游指南</a>
            </h2>
         </div>
         <div class="iti_content">
            <div class="itil_content">
            <!--    <div class="itil_c"> -->
                <ul class="itil_c">
                   <li><span></span><a>小朋友超爱的三亚酒店</a></li>
                   <li><span></span><a>7条航线带你“邮”世界</a></li>
                   <li><span></span><a>盘点国内52处世界遗产</a></li>
                   <li><span></span><a>青岛七星酒店住一晚</a></li>
                    <div class="itil_i divi"></div>
                </ul>
               <!-- </div> -->
              
            </div>
            <div class="itir_content">
              <div class="itir_contl stm">
                <a><img src="../assets/ly05.jpg"/></a>
                <p><a>探秘海岛，赵薇在象岛开的中餐厅</a></p>
              </div>
              <div class="itir_contr stm">
                <a><img src="../assets/ly06.jpg"/></a>
                <p><a>毛里求斯 海誓山盟</a></p>
              </div>
            </div>
         </div>
      </div>
	</div>
</template>
<script>
export default{
  name:'itinerary',
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
	 #itinerary{
      width:100%;
      height:274px;
      margin-top: 20px;
      padding: 0;
      .iti_box{
        font-family: Microsoft Yahei;
        margin: 0 auto;
        min-width: 1200px;
        width: 1200px;
        font-size: 12px;
        color: #555;
        line-height: 20px;
        -webkit-text-size-adjust: none;
        .iti_title{
            width:100%;
            height:42px;
            font-family: Microsoft Yahei;font-size: 12px;
            color: #555;
            line-height: 20px;
            -webkit-text-size-adjust: none;
            h2{
                border-bottom: 2px solid #77cc11;
                padding: 5px 0;
                font-size: 100%;
                font-weight: normal;
                margin: 0;
                a{
                  font: 24px/30px Microsoft yahei;
                  color: #77cc11;
                  text-decoration: none;
                  cursor: pointer;
                }
            }
        }
        .iti_content{
          width:100%;
          height:222px;
          margin-top:10px;
          cursor: pointer;
          display:flex;
          flex-flow:row nowrap;
          justify-content:space-between;
          .itil_content{
            width:580px;
            height:220px;
            display:flex;
            flex-flow:row nowrap;
            .itil_c{
              width:580px;
              height:220px;
              box-sizing:border-box;
              // border:1px solid red;
              position:relative;
              li{
                 width:200px;
                 height:54px;
                 position:relative;
                 line-height:54px;
                 border-bottom:1px solid #ccc;
                 a{
                  font: 14px/57px Microsoft yahei;
                  color: #555;
                  padding: 0 10px;
                  text-decoration: none;
                 }
              }
              .itil_i{
                    width:380px;
                    height:220px;
                    position:absolute;
                    right:0;
                    top:0;
              }
              .divi{
                background:url('../assets/ly01.jpg') no-repeat;
              }
              // li:nth-of-type(1):hover ~.divi{
              //   background:url('../assets/ly02.jpg') no-repeat;
              // }
              li:hover{
                background: #89ca00;
                span{
                  width: 12px;
                  height: 19px;
                  display: block;
                  position: absolute;
                  top: 17px;
                  right:-12px;
                  background: url("../assets/icon_index.png") no-repeat;
                  background-position: -547px 0;
                  z-index:1;
                }
                a{
                  color: #fff;
                }    
              }
              li:nth-of-type(1):hover ~.divi{
                   background:url('../assets/ly01.jpg') no-repeat;
              }
              li:nth-of-type(2):hover ~.divi{
                   background:url('../assets/ly02.jpg') no-repeat;
              }
              li:nth-of-type(3):hover ~.divi{
                   background:url('../assets/ly03.jpg') no-repeat;
              }
              li:nth-of-type(4):hover ~.divi{
                   background:url('../assets/ly04.jpg') no-repeat;
              }
            }
          }
          .itir_content{
            width:600px;
            height:222px;
            // border:1px solid yellow;
            display:flex;
            flex-flow:row nowrap;
            justify-content:space-between;
            .stm{
              width:290px;
              height:222px;
              // border:1px solid red;
              a{
                display:block;
                width:290px;
                height:180px;
                overflow: hidden;
                color: #37e;
                text-decoration: none;
              }
              p{
                height: 40px;
                font: 14px/40px Microsoft yahei;
                background: #f7f7f7;
                color: #555;
                border-bottom: 1px solid #ccc;
                margin-bottom: 1px;
                a{
                  height: 40px;
                  font: 14px/40px Microsoft yahei;
                  padding: 0 5px;
                  display: block;
                  width: 100%;
                  overflow: hidden;
                }
              }
            }
            .stm:hover{
              // border-bottom:
              a{
                color: #F55;
              }
              p{
                border-bottom: 2px solid #7C1;
              }
            }
          }
        }
      }
   }
</style>