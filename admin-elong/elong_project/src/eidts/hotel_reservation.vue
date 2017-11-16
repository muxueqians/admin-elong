<template>
	<div id="hotel_reservation">
     <h2>酒店预订</h2>
     <p>艺龙旅行网提供全球50万家酒店的预订服务和酒店团购服务。通过真实的酒店照片、酒店评价，无论您是和家人一起旅游度假还是商务出行，我们都能为您提供称心如意的酒店。</p>
     <h2><a>艺龙酒店地标大全</a></h2>
     <p>为了方便用户快速定位酒店而存在，我们涵盖了北京、西安、上海、成都、广州、武汉、南京、东莞、长沙、深圳、重庆等城市的常见地标类型。</p>
	</div>
</template>
<script>
export default{
  name:'hotel_reservation',
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
	#hotel_reservation{
		padding: 20px;
    background: #f0f0f0;
    width: 960px;
    height:88px;
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
    }
	}
</style>