<template>
	<div>
		<div class='content'>
			<div class="money_wrapper">
				<div class='money'>总金额<span class='size_m'>（元）</span></div>
				<div class='money_num'>total_money</div>
			</div>
			<div class="ti_btn" @click="mask_show=true">提现</div>
			<div class='getmoney'>
				<div class="getmoney_wrapper">
					<div>今日收入<span class='size_m'>（元）</span></div>
					<div class='getnum'>today_money</div>
				</div>
				<div class="getmoney_wrapper">
					<div>当前金额<span class='size_m'>（元）</span></div>
					<div class='getnum'>cur_money</div>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class='list'>
			<div>
				<span>公司</span>
				<span>用户</span>
				<span>赏金<span>(元)</span> </span>
				<span>时间</span>
			</div>

			<div>
				<span>公司</span>
				<span>name</span>
				<span>money</span>
				<span>created_at</span>
			</div>

		</div>
		<div class="mask" v-if="mask_show" @click.stop="showmask(1)">
			<div class="pop" @click.stop="showmask2">
				<div class="tr_div">
					<div class="title">当前金额 <span>(元)</span></div>
					<div class="money_n">cur_money</div>
				</div>
				<div class="s_btn ">全额提现</div>
				<div class="tixian">提现记录</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mask_show: false
			}
		},
		methods:{
				showmask: function(e) {
					this.mask_show = false
					console.log(e)
				},
				showmask2: function(e) {

				}
			}
	}
</script>

<style scoped>
	/* pages/my/my.wxss */
	
	.content {
		width: 100%;
		background: url(https://qqpublic.qpic.cn/qq_public/0/0-2242700853-616826AA1AE2DE26FC516412A30A5F68/0?fmt=png&size=157&rs=3-4&h=436&w=750&ppv=1)0 0/100% 100%;
		padding-bottom: .6rem;
	}
	
	.money_wrapper {
		width: 100%;
		text-align: center;
		color: #fff;
		padding-top: .4rem;
	}
	
	.money {
		margin-left: .48rem;
		font-size: 1rem;
	}
	
	.size_m {
		font-size: .64rem;
	}
	
	.money_num {
		margin-top: .4rem;
		font-size: .96rem;
	}
	
	.getmoney {
		color: white;
		display: flex;
		width: 100%;
		margin-top: .4rem;
		position: relative;
	}
	
	.getmoney::after {
		content: '';
		width: 1px;
		height: 2.1rem;
		background: #fff;
		position: absolute;
		top: .2rem;
		left: 50%;
	}
	
	.getmoney .getmoney_wrapper {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		font-size: .9rem;
	}
	
	.getmoney_wrapper div:first-child {
		box-sizing: border-box;
		padding-left: 40rpx;
		width: 100%;
	}
	
	.getmoney_wrapper .getnum {
		font-size: .96rem;
		margin-top: .48rem;
		width: 100%;
	}
	
	.line {
		width: 100%;
		height: .4rem;
		background: #F9F9F9;
	}
	
	.list {
		margin-top: .2rem;
	}
	
	.list>div {
		display: flex;
		flex-direction: row;
		font-size: .8rem;
		margin-left: .6rem;
		margin-right: .6rem;
		border-bottom: 1px solid #e9e9e9;
		line-height: 2.2rem;
	}
	
	.list>div>span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .8rem;
	}
	
	.list>div>span:first-child {
		flex: 1;
	}
	
	.list>div>span:nth-child(2) {
		flex: 1;
	}
	
	.list>div>span:nth-child(3) {
		width: 3.6rem;
	}
	
	.list>div>span:last-child {
		width: 5.5rem;
	}
	
	.list>div>span:nth-child(3) span {
		font-size: .68rem;
	}
	
	.ti_btn {
		position: absolute;
		top: 4.2rem;
		right: 4.8rem;
		width: 3rem;
		line-height: 1.8rem;
		font-size: .8rem;
		color: #fff;
		text-align: center;
		background: #ffbe3b;
		border-radius: 3px;
	}
	/*  */
	
	.mask {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 200;
	}
	
	.pop {
		width: 86%;
		background: #fff;
		border-radius: 5px;
		padding: 1rem .4rem;
	}
	
	.pop .tr_view {
		width: 100%;
		color: #333;
	}
	
	.tr_view .title {
		text-align: center;
		height: 1.8rem;
		line-height: 1.8rem;
		margin-left: .4rem;
		font-size: .98rem;
	}
	
	.title span {
		font-size: .68rem;
	}
	
	.tr_view .money_n {
		text-align: center;
		font-size: 1rem;
	}
	
	.s_btn {
		width: 6rem;
		text-align: center;
		height: 1.6rem;
		line-height: 1.6rem;
		margin: 2rem auto .4rem auto;
		color: #fff;
		background: #ffbe3b;
		border-radius: 5px;
		font-size: .64rem;
	}
	
	.tixian {
		width: 100%;
		text-align: center;
		font-size: .76rem;
		color: #999;
	}
</style>