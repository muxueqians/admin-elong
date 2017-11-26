<template>
	<div id="attractions">
       <div class="attractions_content">
       	  <div class="att_title">
			  	<h2>
			  		<a>目的地指数</a>
			  		<i>覆盖全球75万家酒店，你想住的，我们都有</i>
			  	</h2>
       	  </div>
       	  <!-- 国内 -->
       	  <div class="att_img">
       	  	<h3>
       	  		<a class="att_left">
       	  			<i class="att_icon"></i>
       	  			国内
       	  		</a>
       	  		<span class="on fsp">登高踏青</span><span class="fsp">小憩温泉</span><span class="fsp">天然氧吧</span><span class="fsp">草原撒欢</span><span class="fsp">小镇时光</span><span class="fsp">美食之城</span>
       	  		<em class="more right">
       	  			<a>更多<b>>></b></a>
       	  		</em>
       	  	</h3>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan" @click="tohuangShan">
       	  				<div class="huangShan_img">
       	  					<img src="../assets/hs.jpg">
       	  				</div>
       	  				<div class="city_name">黄山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>春意撩人 登高踏青赏春色</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/ems.jpg">
       	  				</div>
       	  				<div class="city_name">峨眉山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>阳春三月 闻着茶香去峨眉</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/wts.jpg">
       	  				</div>
       	  				<div class="city_name">五台山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>迎春 祈福 登五台</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/ls.jpg">
       	  				</div>
       	  				<div class="city_name">庐山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>亲近自然 春游庐山</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan" >
       	  				<div class="huangShan_img">
       	  					<img src="../assets/xs1.jpg">
       	  				</div>
       	  				<div class="city_name">江苏天目湖</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>古树错落 帝王温泉</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/xs2.jpg">
       	  				</div>
       	  				<div class="city_name">威海天沐威海温泉</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>森林温泉 草本养生</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/xs3.jpg">
       	  				</div>
       	  				<div class="city_name">广东中山温泉</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>毗邻港澳 商务养生</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/xs4.jpg">
       	  				</div>
       	  				<div class="city_name">辽宁大连安波温泉</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>延年益寿 名誉中外</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan">
       	  				<div class="huangShan_img">
       	  					<img src="../assets/ts1.jpg">
       	  				</div>
       	  				<div class="city_name">拉萨</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>高原古城 圣山天湖 沁人心脾</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/ts2.jpg">
       	  				</div>
       	  				<div class="city_name">大理</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>文献名邦 彩云之南 空谷幽兰</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/ts3.jpg">
       	  				</div>
       	  				<div class="city_name">舟山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>东海翡翠 舟山群鸟 气候宜人</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/ts4.jpg">
       	  				</div>
       	  				<div class="city_name">厦门</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>天风海涛 鼓浪岛屿 鸟语芬芳</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan" >
       	  				<div class="huangShan_img">
       	  					<img src="../assets/cs1.jpg">
       	  				</div>
       	  				<div class="city_name">锡林郭勒</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>草原 牧民 小马驹</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/cs2.jpg">
       	  				</div>
       	  				<div class="city_name">坝上</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>帝都最近的草原</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/cs3.jpg">
       	  				</div>
       	  				<div class="city_name">若尔盖</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>高原上的绿洲</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/cs4.jpg">
       	  				</div>
       	  				<div class="city_name">祁连山</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>风景如画 醉美祁连山</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan" >
       	  				<div class="huangShan_img">
       	  					<img src="../assets/xx1.jpg">
       	  				</div>
       	  				<div class="city_name">西塘</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>烟雨长廊 景色好似宣纸画</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/xx2.jpg">
       	  				</div>
       	  				<div class="city_name">和顺</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>古风犹存 如诗如画</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/xx3.jpg">
       	  				</div>
       	  				<div class="city_name">乌镇</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>推窗见水 小桥人家</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/xx4.jpg">
       	  				</div>
       	  				<div class="city_name">平遥</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>晋商遗风 古城探幽</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="huangShan">
       	  				<div class="huangShan_img">
       	  					<img src="../assets/ms.jpg">
       	  				</div>
       	  				<div class="city_name">香港</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>只有想不到，没有找不到</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="eMeiShan">
       	  				<div class="eMeiShan_img">
       	  					<img src="../assets/ms2.jpg">
       	  				</div>
       	  				<div class="city_name">成都</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>不只有火锅, 吃是头等事</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="wuTaiShan" >
       	  				<div class="wuTaiShan_img">
       	  					<img src="../assets/ms3.jpg">
       	  				</div>
       	  				<div class="city_name">扬州</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>吴侬软语 淮味养人</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luShan">
       	  				<div class="luShan_img">
       	  					<img src="../assets/ms4.jpg">
       	  				</div>
       	  				<div class="city_name">长沙</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>美食怕不辣,湘味最十足</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  </div>
       	  <div class="empty"></div>
       	  <!-- 国外 -->
       	   <div class="att_img">
       	  	<h3>
       	  		<a class="att_left">
       	  			<i class="att_icon1"></i>
       	  			海外
       	  		</a>
       	  		<span class="on fsp">文艺清新</span><span class="fsp">面朝大海</span><span class="fsp">别样建筑</span><span class="fsp">浪漫主义</span><span class="fsp">魅力都市</span>
       	  		<em class="more right">
       	  			<a>更多<b>>></b></a>
       	  		</em>
       	  	</h3>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="lunDun" >
       	  				<div class="lunDun_img">
       	  					<img src="../assets/ld.jpg">
       	  				</div>
       	  				<div class="city_name">伦敦</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>风情英伦，帝国余韵</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="qingMai">
       	  				<div class="qingMai_img">
       	  					<img src="../assets/qm.jpg">
       	  				</div>
       	  				<div class="city_name">清迈</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>泰北玫瑰，慢行古城</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="jiZhouDao" >
       	  				<div class="jiZhouDao_img">
       	  					<img src="../assets/jzd.jpg">
       	  				</div>
       	  				<div class="city_name">济州岛</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>最传统的浪漫，最神秘的自然</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luoMa">
       	  				<div class="luoMa_img">
       	  					<img src="../assets/lm.jpg">
       	  				</div>
       	  				<div class="city_name">罗马</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>永恒之城，魅力无限</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="lunDun" >
       	  				<div class="lunDun_img">
       	  					<img src="../assets/hw1.jpg">
       	  				</div>
       	  				<div class="city_name">普吉岛</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>海盗胜地，天人合一</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="qingMai">
       	  				<div class="qingMai_img">
       	  					<img src="../assets/hw2.jpg">
       	  				</div>
       	  				<div class="city_name">马尔代夫</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>一岛一世界</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="jiZhouDao" >
       	  				<div class="jiZhouDao_img">
       	  					<img src="../assets/hw3.jpg">
       	  				</div>
       	  				<div class="city_name">沙巴</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>纯净至极的原生态梦幻岛屿</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luoMa">
       	  				<div class="luoMa_img">
       	  					<img src="../assets/hw4.jpg">
       	  				</div>
       	  				<div class="city_name">夏威夷</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>凝聚着东方妩媚与西方性感</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="lunDun" >
       	  				<div class="lunDun_img">
       	  					<img src="../assets/tw1.jpg">
       	  				</div>
       	  				<div class="city_name">巴塞罗那</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>天使之城,艺术之都</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="qingMai">
       	  				<div class="qingMai_img">
       	  					<img src="../assets/tw2.jpg">
       	  				</div>
       	  				<div class="city_name">米兰</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>在时尚与古典间穿梭</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="jiZhouDao" >
       	  				<div class="jiZhouDao_img">
       	  					<img src="../assets/tw3.jpg">
       	  				</div>
       	  				<div class="city_name">莫斯科</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>畅饮伏特加的英雄之城</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luoMa">
       	  				<div class="luoMa_img">
       	  					<img src="../assets/tw4.jpg">
       	  				</div>
       	  				<div class="city_name">伊斯坦布尔</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>古老与现代辉映，东方与西方交融</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  		<ul class="att_theme">
       	  		<li>
       	  			<a class="lunDun" >
       	  				<div class="lunDun_img">
       	  					<img src="../assets/fa1.jpg">
       	  				</div>
       	  				<div class="city_name">马尔代夫</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>一岛一世界</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="qingMai">
       	  				<div class="qingMai_img">
       	  					<img src="../assets/fa2.jpg">
       	  				</div>
       	  				<div class="city_name">圣托里尼</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>蓝白色的人间伊甸园</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="jiZhouDao" >
       	  				<div class="jiZhouDao_img">
       	  					<img src="../assets/fa3.jpg">
       	  				</div>
       	  				<div class="city_name">巴黎</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>浪漫如斯，热情如是</p>
       	  			</div>
       	  		</li>
       	  		<li>
       	  			<a class="luoMa">
       	  				<div class="luoMa_img">
       	  					<img src="../assets/fa4.jpg">
       	  				</div>
       	  				<div class="city_name">普罗旺斯</div>
       	  			</a>
       	  			<div class="scale_tour">
       	  				<p>薰衣草之乡</p>
       	  			</div>
       	  		</li>
       	  	</ul>
       	  	</div>
       	  	<div class="box">
       	  	    <ul class="att_theme">
	       	  		<li>
	       	  			<a class="lunDun" >
	       	  				<div class="lunDun_img">
	       	  					<img src="../assets/fm1.jpg">
	       	  				</div>
	       	  				<div class="city_name">新加坡</div>
	       	  			</a>
	       	  			<div class="scale_tour">
	       	  				<p>乐享狮城，多彩四季</p>
	       	  			</div>
	       	  		</li>
	       	  		<li>
	       	  			<a class="qingMai">
	       	  				<div class="qingMai_img">
	       	  					<img src="../assets/fm2.jpg">
	       	  				</div>
	       	  				<div class="city_name">阿姆斯特丹</div>
	       	  			</a>
	       	  			<div class="scale_tour">
	       	  				<p>郁金香绽放的水都</p>
	       	  			</div>
	       	  		</li>
	       	  		<li>
	       	  			<a class="jiZhouDao" >
	       	  				<div class="jiZhouDao_img">
	       	  					<img src="../assets/fm3.jpg">
	       	  				</div>
	       	  				<div class="city_name">洛杉矶</div>
	       	  			</a>
	       	  			<div class="scale_tour">
	       	  				<p>好莱坞的风情</p>
	       	  			</div>
	       	  		</li>
	       	  		<li>
	       	  			<a class="luoMa">
	       	  				<div class="luoMa_img">
	       	  					<img src="../assets/fm4.jpg">
	       	  				</div>
	       	  				<div class="city_name">吉隆坡</div>
	       	  			</a>
	       	  			<div class="scale_tour">
	       	  				<p>双子塔上，气度非凡</p>
	       	  			</div>
	       	  		</li>
       	  	    </ul>
       	  	</div>
       	  </div>
       </div>   
	</div>
</template>
<script>
export default{
  name:'attractions',
  components:{
   
  },
  data () {
    return {
    }
        
  },
  methods:{
   tohuangShan(){
   	this.$router.push({
         name:'huangShan',
   	})
   }
   // toRegister(){
   //    this.$router.push({
   //        name:'register',
   //      })
   //  },
  },
  watch:{

  },
  mounted(){
    var spn=document.getElementsByClassName('fsp');
     console.log(spn);
    var bs=document.getElementsByClassName('box');
    console.log(bs);
    var index=0;
    for(let i=0; i<spn.length; i++){
    	spn[i].index=i;
    	spn[i].onclick=function(){
    		if(i>5){
	    		for(let j=0;j<bs.length;j++){
	    			if(j>5){
	    				spn[j].className="fsp";
	    				bs[j].style.display='none';
	    			}
	    		}
	    		spn[this.index].className="on fsp";
	    		bs[this.index].style.display='block';
    		}else{
    			for(let j=0;j<bs.length;j++){
	    			if(j<=5){
	    				spn[j].className="fsp";
	    				bs[j].style.display='none';
	    			}
	    		}
	    		spn[this.index].className="on fsp";
	    		bs[this.index].style.display='block';
    		}
    	}
    }
  }
}

</script>
<style lang="scss" scope>
	#attractions{
		width:100%;
		height:556px;
		// background:#999;
        .attractions_content{
        	width:90%;
        	height:556px;
        	margin:0 auto;
        	.att_title{
        		width:100%;
        		height:46px;
        		font-family: Microsoft Yahei;
        		font-size: 12px;
				color: #555;
				line-height: 20px;
				-webkit-text-size-adjust: none;
				h2{
					border-bottom: 2px solid #f55;
					padding: 5px 0;
					font-size: 100%;
					font-weight: normal;
					a{
						cursor: text;
						font: 24px/30px Microsoft yahei;
						color: #f55;
						padding-right: 10px;text-decoration: none;
					}
					i{
						font: 14px/30px Microsoft yahei;
                        color: #999;
					}
				}
        	}
        	.att_img{
        		width:100%;
        		height:250px;
        		h3{
        			padding: 10px 0;
					font-size: 100%;
					height:28px;
					font-weight: normal;
					margin: 0;
					.att_left{
						font: 18px/26px Microsoft yahei;
						color: #555;
						float: left;
						padding-right: 20px;
						text-decoration: none;
						cursor: pointer;
						i{
							float: left;
							width: 24px;
							height: 24px;
							overflow: hidden;
							padding-right: 5px;color: #555;
						}
						.att_icon{
							background: url(../assets/icon_index.png) no-repeat 0 0;
							background-position: -576px -101px;
						}
						.att_icon1{
							background: url(../assets/icon_index.png) no-repeat 0 0;
							background-position: -576px -131px;
						}
					}
					span{
                                          font: 14px/22px Microsoft yahei;
                                          color:#555;
						padding: 1px 10px;
						margin: 4px 10px 0;
						border-radius: 12px;
						cursor: pointer;
						float: left;
					}
					.on{
						background:#F66;
						color:#fff;
					}
                                   .fsp:hover{
                                          color: #F66;
                                          border: 1px solid #F66;
                                          padding: 0 9px;
                                   }
					.more{
						position: relative;
						top: 6px;
						float: right;
						font-style: normal;
						font-weight: normal;
						a{
							color: #555;
							font: 14px/24px Microsoft yahei;
							text-decoration: none;
							cursor: pointer;
							b{
								font-family: Simsun;
								font-weight: normal;
								color: #555;
								font: 14px/24px Microsoft yahei;
								cursor: pointer;
							}
						}
					}
        		}
        		.box,.box1{
        			width:100%;
        			height:202px;
        			.att_theme{
                    overflow:hidden;
                    width:100%;
                    height:202px;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    li{
                    	width:293px;
                    	margin:0 10px 0 0;
                    	overflow:hidden;
                    	position:relative;
                    	a{
                    		display: block;
							width: 100%;
							background-color: #444;
							color: #37e;
							text-decoration: none;
							cursor: pointer;
							div{
								height: 160px;
								width: 100%;
								overflow: hidden;
								img{
									display: block;
									width: 100%;
									margin-top: -20px;
									position: relative;
									bottom: 0;
									transition: bottom .3s;
                                                               border: 0;
								}
							}
							.city_name{
								position: absolute;
								font: 24px/30px Microsoft yahei;
								color: #fff;
								top: 124px;
								left: 0;
								text-indent: .5em;
								text-shadow: 1px 1px 7px #000;
							}		
                    	}
                    	.scale_tour{
								padding: 5px;
								background: #f7f7f7;
								border-bottom: 1px solid #ccc;
								margin-bottom: 1px;
								p{
									color: #555;
									font: 14px/30px Microsoft yahei;
									margin: 0;
									padding: 0;
								}
							}
                    }
                    li:hover{
                     border-bottom: 2px solid #F66;
                     margin-bottom: 0;
                     img{
                          bottom: 8px;
                          transition: bottom .3s;
                     }
                    } 
        		   }
        		}
        		.box,.box1{
        			display:none;
        		}
        		.box:nth-of-type(1){
        			display:block;
        		}
        		.box1:nth-of-type(7){
        			display:block;
        		}

        	}
        	.empty{
        		width:100%;
        		height:20px;
        	}
        }
	}
</style>