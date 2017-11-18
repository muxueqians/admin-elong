<template>
	<div id="itinerary">
      <div class="iti_box">
         <div class="iti_title">
            <h2>
               <a>旅游指南</a>
            </h2>
         </div>
         <div class="iti_content"></div>
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
      // margin: 0;
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
      }
   }
</style>