app = angular.module( 'TakeApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngMessages', 'ngMdIcons', 'ngSendarea'] );

app.config(['$mdThemingProvider', '$routeProvider', function($mdThemingProvider, $routeProvider){			
	$mdThemingProvider.theme('take').primaryPalette('indigo').accentPalette('blue').warnPalette('red');

	$routeProvider.when("/", {
        templateUrl : "modulos/buscar/buscar.html",
        controller  : "Buscar"
    }).when("/buscar", {
        templateUrl : "modulos/buscar/buscar.html",
        controller  : "Buscar"
    }).when("/buscar/:id", {
        templateUrl : "modulos/buscar/buscar.html",
        controller  : "Buscar"
    }).when("/avisos", {
        templateUrl : "modulos/buscar/avisos.html",
        controller  : "Avisos"
    }).when("/contacto", {
        templateUrl : "modulos/contacto/contacto.html",
        controller	: "Contacto"
    }).when("/mensajes/:id", {
        templateUrl : "modulos/contacto/mensajes.html",
        controller	: "Mensajes"
    }).otherwise("modulos/buscar/buscar.html");
}]);




