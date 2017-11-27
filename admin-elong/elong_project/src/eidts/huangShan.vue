<template>
	<div id="huangShan">
        <Headers></Headers> 
        <section>
        	<Hscontent></Hscontent>
        </section>
        <Footers></Footers>
	</div>
</template>
<script>
import Headers from '../components/headers'
import Hscontent from '../components/hs_content'
import Footers from '../components/footers'
export default{
  name:'huangShan',
  components:{
    Headers,
    Hscontent,
    Footers
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
	#huangShan{
		width:100%;
		height:100%;
		section{
			width:100%;
			height:2024px;
			
		}

	}
</style>