<template>
	<div id="hot_city">
    <h2>热门城市</h2>
      <p>
        <a title="北京酒店预订">北京酒店</a><span>|</span><a title="上海酒店预订">上海酒店</a><span>|</span><a title="杭州酒店预订">杭州酒店</a><span>|</span>
        <a title="成都酒店预订">成都酒店</a><span>|</span>
        <a title="深圳酒店预订">深圳酒店</a><span>|</span>
        <a title="青岛酒店预订">青岛酒店</a><span>|</span><a title="苏州酒店预订">苏州酒店</a><span>|</span><a title="广州酒店预订">广州酒店</a><span>|</span><a title="香港酒店预订">香港酒店</a><span>|</span><a title="厦门酒店预订">厦门酒店</a><span>|</span><a title="天津酒店预订">天津酒店</a><span>|</span>
        <a title="西安酒店预订">西安酒店</a><span>|</span><a title="武汉酒店预订">武汉酒店</a><span>|</span>
        <a title="重庆酒店预订">重庆酒店</a><span>|</span><a title="沈阳酒店预订">沈阳酒店</a><span>|</span><a title="长沙酒店预订">长沙酒店</a><span>|</span><a title="三亚酒店预订">三亚酒店</a><span>|</span><a title="珠海酒店预订">珠海酒店</a><span>|</span><a title="宁波酒店预订">宁波酒店</a><span>|</span><a title="南京酒店预订">南京酒店</a><span>|</span>
        <a title="大连酒店预订">大连酒店</a><span>|</span><a title="济南酒店预订">济南酒店</a><span>|</span><a title="昆明酒店预订">昆明酒店</a><span>|</span><a title="合肥酒店预订">合肥酒店</a><span>|</span>
      </p>
  </div>
	</div>
</template>
<script>
export default{
  name:'hot_city',
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
	#hot_city{
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
        width:48px;
        height:14px;
        display:inline-block;
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