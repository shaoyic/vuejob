<template>
	<div>
		<!--<div class="desc_wrapper" data-id="{{item.id}}" bindtap='open_job'>
			<div class="com_desc">
				<div class="name">{{item.name}}</div>
				<div class="rel_btn"><img src='../assets/images/bianji.png'></img>
				</div>
				<div class="del_btn" data-id="{{item.id}}" catchtap='del_company'><img src='../assets/images/laji.png'></img>
				</div>
			</div>
			<div class="desc_type" v-if="{{item.status == 0}}">未发布</div>
			<div class="desc_type" v-if="{{item.status == 1}}" style="color:#FF5650;">已发布</div>
		</div>-->
		<div class="com_wrapper">
			<div class="desc_wrapper" @click="tojob">
				<div class="com_desc">
					<div class="name">
						单位
					</div>
					<div class="rel_btn">
						<img src="../assets/images/bianji.png" />
					</div>
					<div class="rel_btn">
						<img src="../assets/images/laji.png" />
					</div>
				</div>
				<div class="desc_type" v-if="status == 0">未发布</div>
        		<div class="desc_type" v-if="status == 1" style="color:#FF5650;">已发布</div>
			</div>
			<div class="add_btn" @click="add_com">添加</div>
			<app-add v-if="showadd"></app-add>
		</div>
	</div>
</template>

<script>
	import Add from './add'
	export default {
		data() {
			return {
				showadd: false,
				status:0

			}
		},
		components: {
			"app-add": Add
		},
		methods: {
			add_com: function() {
				this.showadd = true
			},
			tojob:function(){
				this.$router.push({path:'/Job',query:{id:'123'}})
			}
		}
	}
</script>

<style scoped>
	#content {
		width: 100%;
	}
	
	.add_com {
		width: 100%;
		padding: 300rpx 0;
	}
	
	.add_com,
	.add_btn {
		width: 4rem;
		margin: auto;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		background: #4E87FB;
		color: #fff;
		border-radius: 3px;
	}
	/*  */
	
	.com_wrapper {
		padding: .1rem 4%;
	}
	
	.desc_wrapper {
		margin-bottom: 1.4rem;
		padding-top: 0.5rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.com_desc {
		will-change: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.com_desc .name {
		flex: 1;
		text-align: left;
		height: 1.8rem;
		line-height: 1.8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1rem;
		color: #333;
	}
	
	.com_desc .rel_btn {
		width: 100rpx;
		text-align: center;
		height: 1.8rem;
		line-height: 1.8rem;
		margin-left: .4rem;
		border-radius: 3px;
	}
	
	.rel_btn img {
		width: 1.2rem;
		height: 1.2rem;
		margin: 3px .6rem;
	}
	
	.com_desc .del_btn {
		display: flex;
		width: 100rpx;
		text-align: center;
		height: 54rpx;
		margin-left: 20rpx;
		border-radius: 6rpx;
	}
	
	.del_btn image {
		width: 42rpx;
		height: 42rpx;
		margin: 6rpx 29rpx;
	}
	
	.desc_type {
		width: 100%;
		text-align: right;
		box-sizing: border-box;
		padding-right: .6rem;
		font-size: .8rem;
		color: #666;
		line-height: 1.6rem;
	}
	
	.com_wrapper .add_btn {
		width: 200rpx;
		margin: auto;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		background: #4E87FB;
		color: #fff;
		font-size: 32rpx;
		border-radius: 6rpx;
		margin-top: 100rpx;
	}
</style>