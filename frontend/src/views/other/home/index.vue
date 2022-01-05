<template>
	<div id='app-demo-db'>
	 <div class="markdown">
	        <Markdown/>
	    </div>
	</div>
</template>
<script>
import Markdown from 'vue-meditor'
 export default {
    	components:{
	        Markdown
		  },
    }
</script>
<style>
#show-content{
  padding:25px;
}
#app-demo-db {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
}
</style>


