<template>
	<div class="footer flex">
		<router-link to="Post" class="tabbar colnum">
			<img :src="path=='/Post'?Picon:Punicon" />
			<p :class="[path=='/Post'?'pitch':'unpitch']" style="color: #999;">职位</p>
		</router-link>
		<router-link to="Issue" class="tabbar colnum">
			<img :src="path=='/Issue'?Iicon:Iunicon" />
			<p :class="[path=='/Issue'?'pitch':'unpitch']" style="color: #999;">发布</p>
		</router-link>
		<router-link to="My" class="tabbar colnum">
			<img :src="path=='/My'?Micon:Municon" />
			<p :class="[path=='/My'?'pitch':'unpitch']" style="color: #999;">我的</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: "nav",
		data(){
			return{
				path:'/Post',
				Micon:require('../assets/images/my_icon.png'),
				Iicon:require('../assets/images/search_icon.png'),
				Picon:require('../assets/images/home_icon.png'),
				Municon: require('../assets/images/my1_icon.png'),
				Iunicon: require('../assets/images/search1_icon.png'),
				Punicon: require('../assets/images/home1_icon.png'),
			}
		},
		watch:{
			$route(to, from) {

					this.path=this.$route.path


			}
		},
		methods:{
	
		}
	}
</script>

<style scoped>
	a{text-decoration: none;border: none;}
	a:link{text-decoration:none;}
	.tabbar >.pitch{color: #0489FF !important;}
	.unpitch{color: #999;}
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		box-sizing: border-box;
	}
	/*  */
	
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		/*font-size: 30px;*/
		border-top: 2px solid #E9E9E9;
		z-index: 200;
		padding-top: 4px;
	}
	
	.footer img {
		width: 1.8rem;
		height: 1.8rem;
	}
	
	.tabbar {
		background: #fff;
		color: #0489FF;
		padding: 6px 0;
		margin: 0;
		width: 50%;
		border: none;
		border-radius: 0;
		/*font-size: 20px;*/
	}
	
	.tabbar:after {
		border: none;
	}
	
	.tabbar>p {
		/*  height: 32px;*/
		/*line-height: 32px;*/
		text-decoration: none !important;
		margin-top: 0;
		margin-bottom: 0rem;
		color: #0489FF;
		font-size: 0.8rem;
	}
	
	.shadow {
		background-color: hsla(0, 0%, 100%, 0.4);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
	}
	
	.flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>