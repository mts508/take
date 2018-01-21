app.controller('Avisos', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		$scope.public.selectedTab = 0;

		$scope.avisos = [
			{
				"id"		: 1,
				"titulo"	: "Jardinero",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 2,
				"titulo"	: "Contador",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 3,
				"titulo"	: "Tramites AFIP",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 4,
				"titulo"	: "Peluquera a domicilio",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 5,
				"titulo"	: "Soporte Técnico, Reparacion y Limpieza de COmputadoras",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 1,
				"titulo"	: "Jardinero",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 2,
				"titulo"	: "Contador",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 3,
				"titulo"	: "Tramites AFIP",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 4,
				"titulo"	: "Peluquera a domicilio",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}, {
				"id"		: 5,
				"titulo"	: "Soporte Técnico",
				"usuario" : "Nombre del usuario",
				"photo"	: "files/no-image.png"
			}
		];


		$scope.verAviso = function( id ) {
			$mdDialog.show({
	      templateUrl: 'modulos/buscar/dialog_mostrar_aviso.html',
	      controller: $scope.ctrlAvisos,
	      parent: angular.element(document.body),
	      clickOutsideToClose:false,
	      fullscreen: true
	    })
		}

		$scope.ctrlAvisos = function( scope, $mdDialog ) {
	    scope.cancel = function() {
	      $mdDialog.cancel();
	    }
		}

		
}]);