<template>
	<div id="app">
		<app-header :css="css"></app-header>
		<app-nav v-if="show"></app-nav>
		<router-view></router-view>
		<div class="active">云途更改</div>
		<div ref="appmap" class="appmap"></div>
	</div>
</template>

<script>
	import Nav from './components/Nav'
	import Header from './components/header'

	export default {
		name: 'App',
		data() {
			return {
				show: true,
				css: {
					name: '全民招工',
					color: '#4E87FB',
					textcolor: '#ffffff'
				}
			}
		},
		components: {
			"app-nav": Nav,
			"app-header": Header,
		},
		created: function(){
			console.log(this.$route.query)
		},
		methods: {
			appmap:function(){
				var that=this;
				let map = new BMap.Map(this.$refs.appmap);
				let point = new BMap.Point(116.331398, 39.897445);
				map.centerAndZoom(point, 12);

				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r) {
					if(this.getStatus() == BMAP_STATUS_SUCCESS) {
						var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
						map.panTo(r.point);
						that.GLOBAL.site=r
						//console.log(r.point.lng + '经度' + r.point.lat + '纬度');

					} else {
						console.log('failed' + this.getStatus());
					}
				}, {
					enableHighAccuracy: true
				})
			}

		},
		watch: {
			$route: {
				handler: function(val, oldVal) {
					this.$nextTick(function() {
						//console.log('path')
						if(this.$route.path == '/My' || this.$route.path == '/Issue' || this.$route.path == '/Post') {
							this.show = true;
						} else {
							this.show = false;
						}
						if(this.$route.path == '/My') {

							this.css = {
								name: '推广统计',
								color: '#3A489F',
								textcolor: '#ffffff'
							}

						} else if(this.$route.path == '/Issue') {
							this.css = {
								name: '我的招聘',
								color: '#4E87FB',
								textcolor: '#ffffff'
							}

						} else if(this.$route.path == '/Detail') {
							this.css = {
								name: '招聘详情',
								color: '#ffffff',
								textcolor: '#333'
							}
							this.show = false
						} else if(this.$route.path == '/Job') {
							this.css = {
								name: '我的公司',
								color: '#ffffff',
								textcolor: '#333'
							}
							this.show = false
						}else {
							this.css = {
								name: '全民招工',
								color: '#4E87FB',
								textcolor: '#ffffff'
							}
						}
					})
				},
				deep: true

			}

		},
		mounted() {
			this.appmap()
		}

	}
</script>

<style scoped>
	.appmap{
		width: 100%;
		height: 0rem;
		z-index: 999 !important;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0;
	}
</style>
