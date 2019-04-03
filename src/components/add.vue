<template>
	<div class="content">
		<div class="table">

			<div class="flex">
				<label for="name">单位名称</label>
				<input type="text" class="form-control" placeholder="请添加单位名称">
				<label for="name">单位地址</label>
				<div class="address_c" @click="selectmap"><img src="../assets/images/position2.png" />选择地址：{{maptext}}</div>
				<label for="name">联系人</label>
				<input type="text" class="form-control" placeholder="联系人姓名">
				<label for="name">联系电话</label>
				<input type="text" class="form-control" placeholder="联系电话">
				<label for="name">简介</label>
				<input type="text" class="form-control" placeholder="单位简介">
			</div>
			<div class="tr_wrapper">
				<div>
					<div class="tr">
						<div class="title">职位</div>
						<div class="title">人数</div>
						<div class="title">薪资</div>
						<img src="../assets/images/add_icon.png" class="add_tr"/>
					</div>
					<div class="tr">
						<input type="text" placeholder="职位名" class="com_input"/>
						<input type="text" placeholder="人数" class="com_input"/>
						<input type="text" placeholder="薪资" class="com_input"/>
					</div>
				</div>
			</div>
			
			<div class="com_btn_wrapper">
				<button class="add_btn_m">悬赏发布</button>
			</div>
			<!--<div id="addmap" ref="addmap"></div>-->
			<div ref="addmap" class="addmap"></div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				maptext:''
			}
		},
		methods: {
			selectmap:function(){
				var that=this;
				console.log(this.GLOBAL.site())
				console.log(this.GLOBAL.data)
				let data="123"
				this.GLOBAL.data=data
				setTimeout(function(){
					console.log(that.GLOBAL.data)
				},500)
			},
			addmap:function(){
				var that=this;
				let site =that.GLOBAL.site.point;
				let map = new BMap.Map(this.$refs.addmap);
				let point = new BMap.Point(site.lng,site.lat);
				map.centerAndZoom(point, 12);
				let myGeo = new BMap.Geocoder();
				let geolocation = new BMap.Geolocation();
				map.addEventListener("click", function(e) {
				var pt = e.point;
				myGeo.getLocation(pt, function(rs) {
					let site = rs.address
					that.maptext = site
				});
			});
			}

		},
		mounted() {
			this.addmap()
		}
	}
</script>

<style scoped>
	.addmap {
		width: 100%;
		height: 5rem;
		z-index: 999;
	}
	
	.content {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 999;
		background: #4E87FB;
		display: flex;
		justify-content: center;
	}
	
	#app .flex {
		display: flex;
		flex-direction: column;
		text-align: left !important;
		align-items: flex-start;
	}
	
	.flex label {
		margin-left: .75rem;
		margin-top: .5rem;
	}
	
	.com_table {
		width: 100%;
	}
	
	.com_table,
	.table {
		width: 96%;
		background: #fff;
		box-sizing: border-box;
		padding: 1rem;
		margin-top: .5rem;
	}
	
	.table .tr_wrapper {
		width: 100%;
	}
	
	.tr_wrapper .title {
		color: #333;
	}
	
.address_c {
		width: 100%;
		text-align: left;
		font-size: .6rem;
		display: flex;
		height: 2.2rem;
		line-height: 2.2rem;
		position: relative;
		border-radius: 4px;
		border: 1px solid #e9e9e9;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.address_c img {
		width: 2rem;
		height: 2rem;
	}
	
	.tr_wrapper .com_input {
		width: 100%;
		box-sizing: border-box;
		padding-left: 0.4rem;
		margin: .24rem 0;
		height: 2.2rem;
		line-height: 2.2rem;
		font-size: 1rem;
		color: #333;
		border-radius: 4px;
		border: 1px solid #e9e9e9;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.tr_wrapper .tr {
		width: 90%;
		padding-right: 0;
		display: flex;
		flex-direction: row;
		padding-top: 1rem;
		position: relative;
		align-items: center;
	}
	
	.tr .title {
		flex: 1;
		text-align: center;
	}
	
	.tr .com_input {
		flex: 1;
		text-align: center;
		padding: 0;
		margin: 0;
	}
	
	.tr .title:nth-child(2) {
		margin: 0 .2rem;
	}
	
	.tr .com_input:nth-child(2) {
		margin: 0 .2rem;
	}
	
	.tr .add_tr {
		position: absolute;
		right: -2rem;
		width: 2.2rem;
		height: 2.2rem;
	}
	
	.tr .del_tr {
		position: absolute;
		top: 26rpx;
		right: -6rpx;
		width: 54rpx;
		height: 54rpx;
	}
	
	.com_btn_wrapper {
		width: 100%;
		margin-top: 2rem;
	}
	
	.com_btn_wrapper .add_btn_m {
		width: 7rem;
		height: 2.5rem;
		line-height: 2rem;
		background: #4E87FB;
		color: #fff;
		text-align: center;
		font-size: 1rem;
		margin: 0 auto;
		border-radius: 2px;
		border: none;
	}
	
	.com_btn_wrapper .add_btn_m::after {
		border: none;
	}
	/*  */
	
	.picker-view {
		width: 100%;
		display: flex;
		background-color: #fff;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		height: 40vh;
		z-index: 130;
		border-top: 1px solid #e7e7e7;
	}
	
	.picker-item {
		line-height: 70rpx;
		margin-left: 5rpx;
		margin-right: 5rpx;
		text-align: center;
	}
</style>