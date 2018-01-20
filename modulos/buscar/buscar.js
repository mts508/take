app.controller('Buscar', ['$scope', function($scope, $location) {
		$scope.public.selectedTab = 0;
		$scope.rubros = [
			{
				"id"		: 1,
				"name"	: "Comida",
				"icon"	: "restaurant"
			}, {
				"id"		: 2,
				"name"	: "Envios",
				"icon"	: "local_shipping"
			}, {
				"id"		: 3,
				"name"	: "Fiestas y Eventos",
				"icon"	: "camera_alt"
			}, {
				"id"		: 4,
				"name"	: "Jardineria",
				"icon"	: "terrain"
			}, {
				"id"		: 5,
				"name"	: "Salud y Cuidado",
				"icon"	: "tag_faces"
			}
		];

		console.log("loaded");

		$scope.listar = function( id ) {
			$scope.goTo( '/avisos' );
		}
}]);