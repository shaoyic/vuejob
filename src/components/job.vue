<template>
	<div>
		<div id="content">
			<div class="desc">
				<div class="com_wrapper">
					<div class="desc_weapper">
						<div class="title"><img src="../assets/images/com_icon1.png"></img>公司名</div>
						<div class="com_name">name</div>
					</div>
					<div class="com_cont" v-if="[content != '']">
						<div class="title"><img src="../assets/images/com_icon2.png"></img>公司简介</div>
						<div class="cont">content</div>
					</div>
				</div>
				<div class="addr_wapper">
					<div class="title">公司地址</div>
					<div class="addr"><img src="../assets/images/position1.png" class="icon"></img>addr</div>
				</div>
				<div class="tel_wrapper">
					<div class="title">联系方式</div>
					<div class="tel">
						<img src="../assets/images/phone.png" class="icon"></img>tel</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="tui_wrapper">
				<div class="title"><span>推广统计</span></div>
				<div class="tui">
					<div class="tui_type">
						<div>红包总数</div>
						<span class="xian"></span>
						<div>剩余红包</div>
					</div>
					<div class="tui_num">
						<div>red_num</div>
						<div>has_red_num</div>
					</div>
					<div class="tui_type">
						<div>推广人数</div>
						<span class="xian"></span>
						<div>关注人数</div>
					</div>
					<div class="tui_num" style="border-bottom:none;">
						<div>enlargePersons</div>
						<div>carePersons</div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="job_wrapper">
				<div class="title"><span>在招职位</span></div>

				<div class="job">
					<div class="job_name">name</div>
					<div class="job_num">num</div>
					<div class="job_money">money元</div>
					<div class="del_btn">删除</div>
				</div>
			</div>
		</div>
		<div class="rel_btn" v-if="status == 0">去发布</div>
		<div class="up_btn" v-else>更新</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: '1',
				status: 0
			}
		}
	}
</script>

<style scoped="job">
	/* pages/job/job.wxss */
	.tui_type div{
		width: 49%;
	}
	#content {
		width: 100%;
		padding-bottom: 2.25rem;
		text-align: left;
	}
	
	.desc {
		padding: .6rem 4%;
	}
	
	.com_wrapper {
		width: 100%;
		padding-bottom: .5rem;
		margin-bottom: .5rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.desc_weapper {
		width: 100%;
	}
	
	.desc_weapper .title {
		text-align: left;
		font-size: .8rem;
		color: #333;
		padding-left: 1.25rem;
		position: relative;
		font-weight: 500;
	}
	
	.desc_weapper .title img {
		position: absolute;
		top: 2px;
		left: 0;
		width: 1rem;
		height: 1rem;
	}
	
	.desc_weapper .com_name {
		text-align: left;
		font-size: .9rem;
		color: #333;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 2rem;
		line-height: 2rem;
		padding-left: .25rem;
	}
	
	.com_cont .title {
		text-align: left;
		font-size: .8rem;
		color: #333;
		padding-left: 1.25rem;
		position: relative;
		margin-bottom: 2px;
		font-weight: 500;
	}
	
	.com_cont .title img {
		position: absolute;
		top: 2px;
		left: 0;
		width: 1rem;
		height: 1rem;
	}
	
	.com_cont .cont {
		line-height: 1rem;
		font-size: .75rem;
		color: #666;
		padding-left: .25rem;
	}
	
	.addr_wapper {
		width: 100%;
		padding-bottom: .5rem;
		margin-bottom: .5rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.addr_wapper .title {
		text-align: left;
		font-size: .8rem;
		color: #333;
		font-weight: 500;
		margin-bottom: .5rem;
	}
	
	.addr_wapper .addr {
		text-align: left;
		font-size: .75rem;
		color: #333;
		padding-left: 1rem;
		position: relative;
	}
	
	.addr_wapper .addr .icon {
		position: absolute;
		top: 2px;
		left: 0;
		width: .8rem;
		height: .8rem;
	}
	
	.addr_wapper .addr .right {
		position: absolute;
		top: 3px;
		right: .25rem;
		width: .75rem;
		height: .75rem;
	}
	
	.tel_wrapper {
		width: 100%;
	}
	
	.tel_wrapper .title {
		text-align: left;
		font-size: .8rem;
		color: #333;
		font-weight: 500;
		margin-bottom: .5rem;
	}
	
	.tel_wrapper .tel {
		flex: 1;
		text-align: left;
		font-size: .75rem;
		color: #333;
		padding-left: 1rem;
		position: relative;
	}
	
	.tel_wrapper .tel .icon {
		position: absolute;
		top: 2px;
		left: 0;
		width: .8rem;
		height: .8rem;
	}
	
	.tel_wrapper .tel .right {
		position: absolute;
		top: 3px;
		right: .25rem;
		width: .75rem;
		height: .75rem;
	}
	
	.line {
		width: 100%;
		height: .3rem;
		background: #F9F9F9;
	}
	/*  */
	
	.tui_wrapper .title {
		width: 92%;
		padding-top: .5rem;
		margin: auto;
		border-bottom: 1px solid #e9e9e9;
		margin-bottom: .5rem;
	}
	
	.tui_wrapper .title text {
		display: inline-block;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: .8rem;
		border-bottom: 2px solid #0f8eff;
		position: relative;
		top: 1px;
	}
	
	.tui {
		padding-bottom: .25rem;
	}
	
	.tui_type {
		
		width: 90%;
		margin: auto;
		display: flex;
		height: 1.75rem;
		line-height: 1.75rem;
		color: #333;
		font-size: .75rem;
		font-weight: 500;
		flex-direction: row;
		justify-content: center;
		border-bottom: 1px solid #e9e9e9;
		text-align: center;
	}
	
	.tui_type view {
		flex: 1;
	}
	
	.tui_type .xian {
		display: inline-block;
		width: 2px;
		height: .75rem;
		margin-top: .5rem;
		background: #0f8eff;
	}
	
	.tui_num {
		width: 90%;
		margin: auto;
		display: flex;
		height: 2.51rem;
		line-height: 2.51rem;
		color: #666;
		font-size: .75rem;
		font-weight: 500;
		flex-direction: row;
		border-bottom: 1px solid #e9e9e9;
		text-align: center;
	}
	
	.tui_num div {
		flex: 1;
	}
	/*  */
	
	.job_wrapper .title {
		width: 92%;
		padding-top: .5rem;
		margin: auto;
		border-bottom: 1px solid #e9e9e9;
		/* margin-bottom: .5rem; */
	}
	
	.job_wrapper .title span {
		display: inline-block;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: .8rem;
		border-bottom: 2px solid #0f8eff;
		position: relative;
		top: 1px;
	}
	
	.job_wrapper .job {
		width: 100%;
		box-sizing: border-box;
		padding: .6rem 10%;
		border-bottom: 1px solid #e9e9e9;
		display: flex;
		flex-direction: row;
		/* margin-bottom: .5rem; */
	}
	
	.job .job_name {
		flex: 1;
		text-align: left;
		font-size: .8rem;
		color: #333;
		overflow: hidden;
	}
	
	.job .job_num {
		width: 2.5rem;
		text-align: center;
		font-size: .75rem;
		color: #333;
		overflow: hidden;
	}
	
	.job .job_money {
		width: 6.5rem;
		text-align: center;
		font-size: .75rem;
		color: #FF5650;
		overflow: hidden;
	}
	
	.job .del_btn {
		text-align: center;
		font-size: .8rem;
		color: #4E87FB;
		overflow: hidden;
	}
	
	.up_btn {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		margin: auto;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		background: #4E87FB;
		color: #fff;
		border-radius: 2px;
		font-size: .8rem;
	}
	
	.rel_btn {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		margin: auto;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		background: #999999;
		color: #fff;
		border-radius: 2px;
		font-size: .8rem;
	}
</style>