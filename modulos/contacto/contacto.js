app.controller('Contacto', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		$scope.public.selectedTab = 1;
		var date = '01/01/2018';
		$scope.contactos = [
			{
				"id"		: 1,
				"name"	: "Lucía Diaz",
				"date"	: date,
				"photo"	: "files/avatar.jpg"
			}, {
				"id"		: 2,
				"name"	: "Fernando Horacio García de la Torre",
				"date"	: date,
				"photo"	: "files/avatar.jpg"
			}, {
				"id"		: 3,
				"name"	: "Alan Lopez",
				"date"	: date,
				"photo"	: "files/avatar.jpg"
			}
		];

		$scope.verMensajes = function( id ) {
			$scope.goTo('mensajes/'+id)
		}

}]);