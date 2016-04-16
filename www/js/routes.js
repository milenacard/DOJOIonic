angular.module('app.routes', [])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('menu', {
			url:'/menu', //la ventana menu
			templateUrl: 'template/menu.html'
		})
		.state('menu.page',{
			url:'/index',
			view: {
				'side-menu' :{
					template: 'template/page.html',
					controller: 'pageCtrl'
				}
			}
		});
	$urlRouterProvider.otherwise('#/menu');
	});
