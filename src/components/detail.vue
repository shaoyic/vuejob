<template>
	<div id="content">
		<div class="desc">
			<div class="com_wrapper">
				<div class="desc_weapper">
					<div class="com_name">name</div>
					<div class="yong_monry">佣金: red_money元</div>
				</div>
				<div class="com_cont" v-if="[info.content != '']">
					<div class="title">公司简介</div>
					<div class="cont">content</div>
				</div>
			</div>
			<div class="addr_wapper">
				<div class="title">公司地址</div>
				<div class="addr" bindtap="open_map">
					<img src="../assets/images/position1.png" class="icon"></img>
					addr
					<image src="../assets/images/right1.png" class="right"></image>
				</div>
			</div>
			<div class="tel_wrapper">
				<div class="title">联系方式</div>
				<div class="tel" bindtap='call'>
					<img src="../assets/images/phone.png" class="icon"></img>
					tel
					<img src="../assets/images/right1.png" class="right"></img>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="job_wrapper">
			<div class="title"><span>在招职位</span></div>
			<div class="job_list">
				<div class="item">
					<div class="name">name</div>
					<div class="money">money元</div>
				</div>
			</div>
		</div>
		<div class="btn_wrapper">
		  <div class="share_btn"></div>
		  <div class="draw_btn" ></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	/* pages/detail/detail.wxss */
	
	#content {
		width: 100%;
		padding-bottom: 2.6rem;
	}
	
	.desc {
		padding: .4rem 4%;
	}
	
	.com_wrapper {
		width: 100%;
		padding-bottom: .4rem;
		margin-bottom: .4rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.desc_weapper {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.desc_weapper .com_name {
		flex: 1;
		text-align: left;
		font-size: .96rem;
		color: #333;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: .4rem;
		height: 1.8rem;
		line-height: 1.8rem;
	}
	
	.desc_weapper .yong_monry {
		text-align: center;
		font-size: .94rem;
		color: #FF5650;
		height: 1.8rem;
		line-height: 1.8rem;
	}
	
	.com_cont {
		padding-top: .4rem;
	}
	
	.com_cont .title {
		text-align: left;
		font-size: .96rem;
		color: #333;
		font-weight: 500;
		margin-bottom: .4rem;
	}
	
	.com_cont .cont {
		text-align: left;
		line-height: 1rem;
		font-size: .8rem;
		color: #666;
	}
	
	.addr_wapper {
		width: 100%;
		padding-bottom: .4rem;
		margin-bottom: .4rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.addr_wapper .title {
		text-align: left;
		font-size: .64rem;
		color: #333;
		font-weight: 500;
		margin-bottom: .4rem;
	}
	
	.addr_wapper .addr {
		text-align: left;
		font-size: .8rem;
		color: #333;
		padding-left: 1.4rem;
		position: relative;
	}
	
	.addr_wapper .addr .icon {
		position: absolute;
		top: 2px;
		left: 0;
		width: 1.2rem;
		height: 1.2rem;
	}
	
	.addr_wapper .addr .right {
		position: absolute;
		top: 3px;
		right: 5px;
		width: .6rem;
		height: .6rem;
	}
	
	.tel_wrapper {
		width: 100%;
	}
	
	.tel_wrapper .title {
		text-align: left;
		font-size: .96rem;
		color: #333;
		font-weight: 500;
		margin-bottom: .4rem;
	}
	
	.tel_wrapper .tel {
		display: flex;
		align-items: center;
		text-align: left;
		font-size: .8rem;
		color: #333;
		padding-left: 1.4rem;
		position: relative;
		line-height: 1.4rem;
	}
	
	.tel_wrapper .tel .icon {
		position: absolute;
		top: 2px;
		left: 0;
		width: 1.2rem;
		height: 1.2rem;
	}
	
	.tel_wrapper .tel .right {
		position: absolute;
		top: 3px;
		right: .2rem;
		width: .8rem;
		height: .8rem;
	}
	
	.line {
		width: 100%;
		height: .4rem;
		background: #F9F9F9;
	}
	
	.job_wrapper .title {
		text-align: left;
		width: 92%;
		padding-top: .4rem;
		margin: auto;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.job_wrapper .title span {
		display: inline-block;
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 1rem;
		border-bottom: 2px solid #0f8eff;
		position: relative;
		top: 1px;
	}
	
	.job_list {
		width: 100%;
	}
	
	.job_list .item {
		padding: .6rem 4%;
		border-bottom: 1px solid #e9e9e9;
		display: flex;
		flex-direction: row;
	}
	
	.item .name {
		flex: 1;
		text-align: left;
		font-size: .8rem;
		color: #333;
		margin-right: .4rem;
	}
	
	.item .money {
		font-size: .8rem;
		color: #FF5650;
		text-align: center;
	}
	/*  */
	
	.btn_wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		padding-bottom: .4rem;
		background: #fff;
	}
	
	.share_btn {
		flex: 1;
		height: 3rem;
		background: url("https://qqpublic.qpic.cn/qq_public/0/0-2974046248-8A34D6D908017AE16353D61C2E901C9E/0?fmt=png&size=8&rs=6-6&h=147&w=546&ppv=1")no-repeat 0 0/100% 100%;
		margin: 0 .5rem;
		border: none;
		padding: 0;
	}
	
	.share_btn::after {
		border: none;
	}
	
	.draw_btn {
		flex: 1;
		height: 3rem;
		background: url("https://qqpublic.qpic.cn/qq_public/0/0-2972053204-F960B3E4690D7C35CBA381B8132AB4EF/0?fmt=png&size=8&rs=8-8&h=147&w=546&ppv=1")no-repeat 0 0/100% 100%;
		margin: 0 .5rem;
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
		background: rgba(0, 0, 0, 0.8);
	}
	
	.step1 .yin1 {
		position: absolute;
		top: .8rem;
		right: .6rem;
		width: 4rem;
		height: 1.2rem;
	}
	
	.step1 .yin2 {
		position: absolute;
		top: 2.4rem;
		right: 2.8rem;
		width: 11.8rem;
		height: 21.6rem;
		transform: rotate(180deg);
	}
	
	.step1 .yin3 {
		position: absolute;
		top: 4.6rem;
		left: 50px;
		width: 6rem;
		height: 2.04rem;
	}
	
	.step1 .text {
		position: absolute;
		top: 7.5rem;
		left: 65px;
		font-size: .64rem;
		color: #fff;
	}
	
	.step2 .yin2 {
		position: absolute;
		bottom: 1.6rem;
		left: 1.8rem;
		width: 11.8rem;
		height: 21.6rem;
	}
	
	.step2 .yin3 {
		position: absolute;
		bottom: 185px;
		left: 175px;
		width: 6rem;
		height: 2.04rem;
	}
	
	.step2 .yin4 {
		position: absolute;
		bottom: .4rem;
		left: 0;
		width: 100%;
		height: 2rem;
	}
	
	.step2 .text {
		position: absolute;
		bottom: 4.7rem;
		right: 2.4rem;
		font-size: .6rem;
		width: 5.8rem;
		color: #fff;
	}
</style>