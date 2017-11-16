<template>
	<div id="partners">
    <h2>合作伙伴</h2>
    <p>
      <a title="住哪网">住哪网</a><span>|</span><a title="TripAdvisor">TripAdvisor</a><span>|</span><a title="吉祥航空">吉祥航空</a><span>|</span><a title="北京房产">北京房产</a><span>|</span><a title="装修家居">装修家居</a><span>|</span><a title="住哲酒店管理系统">住哲酒店管理系统</a>
    </p>
	</div>
</template>
<script>
export default{
  name:'partners',
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
	#partners{
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