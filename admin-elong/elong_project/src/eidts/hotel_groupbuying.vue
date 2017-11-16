<template>
	<div id="hotel_groupbuying">
      <h2>酒店团购</h2>
      <p>
        <a title="北京酒店团购">北京酒店团购</a><span>|</span><a title="上海酒店团购">上海酒店团购</a><span>|</span><a title="三亚酒店团购">三亚酒店团购</a><span>|</span><a title="广州酒店团购">广州酒店团购</a><span>|</span><a title="杭州酒店团购">杭州酒店团购</a><span>|</span><a title="厦门酒店团购">厦门酒店团购</a><span>|</span><a title="苏州酒店团购">苏州酒店团购</a><span>|</span><a title="深圳酒店团购">深圳酒店团购</a><span>|</span><a title="西安酒店团购">西安酒店团购</a><span>|</span><a title="成都酒店团购">成都酒店团购</a><span>|</span><a title="丽江酒店团购">丽江酒店团购</a><br/>
        <a title="武汉酒店团购">武汉酒店团购</a><span>|</span><a title="宁波酒店团购">宁波酒店团购</a><span>|</span><a title="重庆酒店团购">重庆酒店团购</a><span>|</span><a title="大连酒店团购">大连酒店团购</a><span>|</span><a title="南京酒店团购">南京酒店团购</a><span>|</span><a title="青岛酒店团购">青岛酒店团购</a><span>|</span><a title="桂林酒店团购">桂林酒店团购</a><span>|</span><a title="天津酒店团购">天津酒店团购</a><span>|</span><a title="沈阳酒店团购">沈阳酒店团购</a><span>|</span>
      </p>
	</div>
</template>
<script>
export default{
  name:'hotel_groupbuying',
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
	 #hotel_groupbuying{
    padding: 20px;
    background: #f0f0f0;
    width: 960px;
    height:44px;
    margin: 0 auto;
    h2{
      font: 16px "Microsoft Yahei",Simsun;
      font-weight: 700;
      color: #555;
    }
    p{
      line-height: 22px;
      font-size: 12px;
      font-family: arial,Verdana, Geneva, Helvetica;
      color: #555;
      a{
        color: #555;
        text-decoration: none;
        cursor: pointer;
        font-size: 12px;
        font-family: arial,Verdana, Geneva, Helvetica;
      }
      span{
        padding:0 5px;
      }
    }
  }
</style>