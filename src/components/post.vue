<template>
	<div class="conner">
		<div class="search-wrapper">
			<div class="zan_div" v-if="serach==1" @click="showf">
				<img src='../assets/images/search.png' class='da'></img>
				搜索公司名
			</div>
			<div class='search-box' v-if="serach==2">
				<img src='../assets/images/search.png' class='da'></img>
				<input class='search' type='text' placeholder='搜索公司名' v-model="serachtext"></input>
				<div class="close_wrapper">
					<img src='../assets/images/close.png' class='close'></img>
				</div>
			</div>

		</div>
		<div id="tap_bar">
			<div class="bar " :class="[bar_index == 1 ? 'active':'']" data-index="1" @click="selectjob(1)">按距离</div>
			<div class="bar " :class="[bar_index == 2 ? 'active':'']" data-index="2" @click="selectjob(2)">按时间</div>
		</div>
		<div id="jop_list" v-if="length">
			<router-link to="Detail">
				<div class="item" data-id="" data-juli="">
					<div class="post_wrapper">
						<div class="post">
							<div class="com_name">name</div>
							<div class="money">佣金: red_money元</div>
						</div>
					</div>
					<div class="job_item">
						<div class="job_name">name</div>
						<div class="job_money">money元</div>
					</div>
					<div class="descp">
						<div class="range">
							<img src="../assets/images/position1.png"></img>
							juli
						</div>
						<div class="time">created_at</div>
					</div>
				</div>
				<div class="line"></div>
			</router-link>
		</div>
		<view class="none" v-else>暂无数据</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				length: true,
				serach: 2,
				serachtext: null,
				bar_index: 1
			}
		},
		methods: {
			selectjob: function(e) {
				this.bar_index = e
			}
		}

	}
</script>

<style scoped>
	/**index.wxss**/
	
	#content {
		width: 100%;
		padding-bottom: 1.8rem;
	}
	/*  */
	
	.search-wrapper {
		width: 100%;
		padding: 0.4rem 4%;
		box-sizing: border-box;
		background: #4E87FB;
		position: relative;
	}
	
	.zan_view {
		width: 92%;
		background: #fff;
		font-size: 1rem;
		color: #999;
		text-align: center;
		border-radius: 50%;
		height: 2rem;
		line-height: 2rem;
		position: absolute;
		top: .2rem;
		left: 0;
		margin: auto;
		right: 0;
		z-index: 999;
	}
	
	.zan_div {
		background: white;
		border-radius: 1rem;
		height: 2rem;
		line-height: 2rem;
		color: #999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.zan_view,
	.zan_div img {
		width: 1.3rem;
		height: 1.3rem;
	}
	
	.search-box {
		display: flex;
		flex-direction: row;
		height: 2rem;
		line-height: 3rem;
		border-radius: 2rem;
		background: #fff;
		align-items: center;
		padding: 0 .5rem;
	}
	
	.search-box .da {
		width: 1.3rem;
		height: 1.3rem;
	}
	
	.search-box .search {
		flex: 1;
		text-align: left;
		height: 2rem;
		line-height: 2rem;
		font-size: .8rem;
		color: #333;
		border: none;
		padding-left: .5rem;
		outline: none;
	}
	
	.search-box .close_wrapper {
		padding: 20rpx;
		line-height: 20rpx;
	}
	
	.search-box .close {
		width: 1.2rem;
		height: 1.2rem;
	}
	/*  */
	
	#tap_bar {
		position: fixed;
		left: 0;
		top: 115rpx;
		width: 100%;
		background: #fff;
		display: flex;
		flex-direction: row;
	}
	
	#tap_bar .bar {
		flex: 1;
		height: 2.6rem;
		text-align: center;
		line-height: 2.6rem;
		font-size: 1rem;
		color: #999;
	}
	
	#tap_bar .bar.active {
		color: #4E87FB;
		border-bottom: 1px solid #4E87FB;
	}
	/*  */
	
	#jop_list {
		width: 100%;
		margin-top: 4rem;
	}
	
	#jop_list .item {
		padding: .6rem 4%;
	}
	
	.item .post_wrapper {
		width: 100%;
	}
	
	.post_wrapper .post {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: .4rem;
	}
	
	.post .com_name {
		flex: 1;
		color: #333;
		font-weight: 500;
		font-size: .68rem;
		text-align: left;
		margin-right: .6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.post .money {
		text-align: center;
		font-size: .68rem;
		font-weight: 500;
		color: #FF5650;
	}
	
	.job_item {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: .4rem;
	}
	
	.job_item .job_name {
		flex: 1;
		text-align: left;
		color: #666;
		font-size: .64rem;
		margin-right: .6rem;
	}
	
	.job_item .job_money {
		text-align: center;
		color: #FF5650;
		font-size: .64rem;
	}
	
	.item .descp {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: .8rem;
		line-height: .8rem;
		color: #999;
		font-size: .52rem;
		align-items: center;
	}
	
	.descp .range {
		flex: 1;
		padding-left: 1.2rem;
		text-align: left;
		position: relative;
		display: flex;
		align-items: center;
	}
	
	.range img {
		position: absolute;
		left: 0;
		width: 1.2rem;
		height: 1.2rem;
	}
	
	.descp .time {
		width: 4.4rem;
		text-align: right;
	}
	
	.line {
		width: 100%;
		height: .24rem;
		background: #f9f9f9;
	}
	
	.none {
		width: 100%;
		text-align: center;
		line-height: 2rem;
		font-size: .64rem;
		color: #333;
		margin-top: 3.2rem;
	}
	/*  */
	
	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 999;
	}
	
	.pop {
		width: 80%;
		margin: 7.2rem auto;
		border-radius: 5px;
		background: #fff;
		box-sizing: border-box;
		padding: 1.2rem 1rem;
	}
	
	.pop .text {
		width: 100%;
		text-align: center;
		font-size: .64rem;
		color: #333;
		font-weight: 500;
		line-height: 1.2rem;
		margin-bottom: .8rem;
	}
	
	.pop .lo_btn {
		width: 88%;
		height: 1.4rem;
		line-height: 1.4rem;
		background: #00BB29;
		color: #fff;
		font-size: .64rem;
		border-radius: 4px;
		margin: 0 6%;
		padding: 0;
		padding-left: .4rem;
		box-sizing: border-box;
		position: relative;
		border: none;
	}
	
	.pop .lo_btn::after {
		border: none;
	}
	
	.pop .lo_btn img {
		position: absolute;
		top: .24rem;
		left: 2rem;
		width: .84rem;
		height: .84rem;
	}
</style>