<template>
	
	<div class="header"  ref="bg">
		{{headercss}}
		<img src="../assets/images/back.png" class="back" v-if="showback" @click="toback"/>
	</div>
</template>

<script>
	export default{
		name:'header',
		props:['css'],
		data(){
			return{
				showback:false,
				headercss:this.css.name

			}
		},
		methods:{
			toback:function(){
				this.$router.go(-1)
			}
		},
		created:function(){

			console.log(this.css.name)
		},
		watch:{
			$route(to, from) {
				if(this.$route.path=='/My'||this.$route.path=='/Issue'||this.$route.path=='/Post'){
					this.showback=false;
				}else{
					this.showback=true;
				}
					

			},
			css:function(e){
				//console.log('css')
				this.headercss=e.name
				this.$refs.bg.style.background=e.color;
				this.$refs.bg.style.color=e.textcolor;
			},
			deep:true
		},
	}
</script>

<style scoped>
	.header{
		height: 4rem;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		background: #4E87FB;
	}
	.back{
		position: absolute;
		left: .5rem;
		top: 1rem;
		width: 1.4rem;
		height: 1.4rem;
	}
	.color1{background: #4E87FB;}
	.color2{background: #3A489F;}
</style>