<template>
	<div id="loopimg">
       <div class="loop"></div>
       <div class="cont"></div>
       <div class="imgs">
       	 <ul class="imgsu">
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 	<li>
       	 		<a>
       	 			<div>
       	 				<h4>园林酒店</h4>
       	 				<div class="imgs1"></div>
       	 			</div>
       	 		</a>
       	 	</li>
       	 </ul>
       </div>
	</div>
</template>
<script>
export default{
  name:'loopimg',
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
	#loopimg{
		width:100%;
		height:auto;
		background:red;
		.loop{
			width:100%;
			height:380px;
		}
		.cont{

		}
		.imgs{
           width:100%;
           height:260px;
           .imgsu{
           	   width:1200px;
               height:260px;
               margin:0 auto;
               display:flex;
               flex-flow:row nowrap;
               li{
               	 width:172px;
               	 height:260px;
               	 position: relative;
				 overflow: hidden;
				 cursor: pointer;
				 a{
				 	color: #37e;
					text-decoration: none;
					cursor: pointer;
					font-size: 12px;
					font-family: arial,Verdana, Geneva, Helvetica;
					line-height: 20px;
					div{
						position: absolute;
						overflow: hidden;
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						background: rgba(0,0,0,.3);
					}
				 }
               }
           }
		}
	}
</style>