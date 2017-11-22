<template>
    <div id="hs_content">
       <div class="c_one">
           <b>黄山酒店预订</b><span>首页</span><i>></i><span>酒店</span><i>></i><span>黄山酒店</span><i>></i><span>黄山汤口酒店</span>
       </div>
       <div class="c_two">
           <div class="c_twl">
               <label>
                   <span>目的地</span>
                   <input type="text" name="" value="黄山市">
               </label>
           </div>
           <div class="c_tw2">
               <label>
                   <span>入住</span>
                   <input type="text" name="" value="2017-11-23">
                   <i class="icdata1"></i>
               </label>
               <label>
                   <span>离店</span>
                   <input type="text" name="" value="2017-11-24">
                   <span>(共1晚)</span>
                   <i class="icdata2"></i>
               </label>
           </div>
           <div class="c_tw3">
               <label>
                   <span>关键词</span>
                   <input type="text" name="" placeholder="如位置\酒店名\品牌">
               </label>
           </div>
           <div class="c_tw4"><i class="icss"></i>搜索</div>
       </div>
       <div class="c_three">
           <ul class="ct_u">
               <li class="ld">
                   <div class="dv0"><p class="p1"><i class="ico1"></i><span>位置</span></p></div>
                   <div class="dv1">
                        <p class="pt">
                            <b>不限</b>
                            <span>行政区<i class="delta"></i></span>
                            <span>商圈<i class="delta"></i></span>
                            <span>机场/车站<i class="delta"></i></span>
                            <span>医院<i class="delta"></i></span>
                            <span>大学<i class="delta"></i></span>
                            <span>市内景点<i class="delta"></i></span>
                            <span>市外景点<i class="delta"></i></span>
                        </p>
                        <p class="pb">
                            <span><i class="circle"></i>黄山山顶</span>
                            <span><i class="circle"></i>黄山市区(屯溪)</span>
                            <span><i class="circle"></i>汤口地区</span>
                            <span><i class="circle"></i>太平湖</span>
                            <span><i class="circle"></i>黄山南大门</span>
                            <span><i class="circle"></i>黄山区(太平)</span>
                            <span><i class="circle"></i>山下</span>
                            <span><i class="circle"></i>歙县</span>
                        </p>
                   </div> 
               </li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
       </div>
    </div>
</template>
<script>
export default{
  name:'hs_content',
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
#hs_content{
    width:90%;
    height:auto;
    margin:0 auto;
    border:1px solid red;
    .c_one{
        width:100%;
        height:25px;
        margin:10px 0;
        b{
            line-height: 24px;
            margin-right: 20px;
            font-family: Microsoft Yahei !important;
            font-size: 24px !important;
            color: #555;
        }
        span{
            font-size: 12px;
            font-family: arial,Verdana, Geneva, Helvetica;
            color: #555;
            line-height: 20px;
            -webkit-text-size-adjust: none;
        }
    }
    .c_two{
        width:1182px;
        height:34px;
        background:#eff4fa;
        padding:9px;
        border-top:2px solid #b5cbe6;
        margin-bottom:5px;
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        .c_twl,.c_tw3{
            width:258px;
            // height:32px;
            border:1px solid #8db9ef;
            background-color:#FFF;
            margin-right:8px;
            color:#999;
            font-size: 14px;
            line-height: 32px;
            label{
                height: 32px;
                width:258px;
                display: block;
                padding: 0 2%;
                overflow: hidden;
                span{
                    color: #999;
                    font-size: 14px;
                }
                input{
                    color:#555;
                    margin-left:3px;
                    width:65%;
                    height: 31px;
                    font: 16px/30px Microsoft Yahei;
                    border:0;
                }
            }
        }
        .c_tw2{
            width:496px;
            height:32px;
            border:1px solid #8db9ef;
            display:flex;
            flex-flow:row nowrap;
            background-color: #FFF;
            margin-right: 8px;
            color: #999;
            font-size: 14px;
            font-family: arial,Verdana, Geneva, Helvetica;
            label{
                border-right: 1px solid #CDE;
                margin-right: -1px;
                width: 46%;
                position: relative;
                height: 32px;
                display: block;
                padding: 0 2%;
                overflow: hidden;
                span{
                    color: #999;
                    font-size: 14px;
                }
                input{
                    color:#555;
                    margin-left:3px;
                    width:55%;
                    height: 31px;
                    border:0;
                    font: 16px/30px Microsoft Yahei;
                }
                .icdata1{
                    display:inline-block;
                    width: 18px;
                    height: 16px;
                    background: url(../assets/iconf.png) no-repeat;
                    background-position: 0 -77px;
                    position: absolute;
                    right: 6px;
                    top: 8px;
                }
                .icdata2{
                    display:inline-block;
                    width: 18px;
                    height: 16px;
                    background: url(../assets/iconf.png) no-repeat;
                    background-position: -34px -77px;
                    position: absolute;
                    right: 6px;
                    top: 8px;
                }
            }
        }
        .c_tw4{
            width: 140px;
            height: 34px;
            font: 18px/34px Microsoft yahei;
            background-color: #F55;
            border-radius: 3px;
            color: #FFF;
            text-align: center;
            cursor: pointer;
            .icss{
                display:inline-block;
                width: 18px;
                height: 17px;
                margin-right: 10px;
                // vertical-align: -1px;
                background: url(../assets/iconf.png) no-repeat;
                background-position: -71px -78px;
                // display: inline-block;
                vertical-align:middle;
                
            }
        }
    }
    .c_three{
        width:100%;
        height:auto;
        // background-color: #eff4fa;
        .ct_u{
            width:100%;
            height:auto;
            
            .ld{
                width:100%;
                height:67px;
                display:flex;
                // flex-flow:row nowrap;
                .dv0{
                    margin-right:20px;
                    width:96px;
                    height:67px;
                    background-color:#eff4fa;
                    .p1{
                       width: 86px;
                       height:20px;
                       padding: 8px 0 8px 10px;
                       font-size: 14px;
                       border:1px solid red;
                       .ico1{
                        margin-right:5px;
                        width: 18px;
                        height: 18px;
                        display: inline-block;
                        background: url(../assets/iconf.png) no-repeat;
                        background-position: -98px -3px;
                        vertical-align: middle;
                       }
                    }
                }
                .dv1{
                    width:91%;
                    height:67px;
                    border:1px solid blue;
                    .pt{
                        width:100%;
                        height:25px;
                        
                    }
                    // border:1px solid blue;
                }
            }
        }
    }
}
</style>