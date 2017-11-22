<template>
	<div id="huangShan">
        <Headers></Headers> 
        <section>
        	<Hscontent></Hscontent>
        </section>
	</div>
</template>
<script>
import Headers from '../components/headers'
import Hscontent from '../components/hs_content'
export default{
  name:'huangShan',
  components:{
    Headers,
    Hscontent
  },
  data () {
    return {
    }
        
  },
  methods:{
   // tohuangShan(){
   // 	this.$router.push({
   //       name:huangShan
   // 	})
   // },
   // toRegister(){
   //    this.$router.push({
   //        name:'register',
   //      })
   //  },
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
			height:100%;
			
		}

	}
</style>