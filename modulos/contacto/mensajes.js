app.controller('Mensajes', ['$scope', '$mdDialog', '$interval', '$timeout', function($scope, $mdDialog, $interval, $timeout) {
		$scope.public.show_main_toolbar = false;
		$scope.nombre = 'Nombre persona';

		var socket = io.connect('ws://' + document.domain + ':' + location.port+'/chat');
		$scope.connected = false;

		$scope.messages = [];

		$interval(function(){
			socket.emit('ping');
		}, 500);

		socket.on('connect', function() {
	    console.log("se conecto");
	    $scope.connected = true;
	    socket.emit('ping');
	  });

	  socket.on('disconnect', function() {
	    console.log("desconectado");
	    $scope.connected = false;
	  });

		
    socket.on('message', function(data) {
    	$scope.$apply(function(){
    		$scope.messages.push(data)
    		console.log("mensaje recibido: "+data);
    	});
	  });

	  socket.on('pong', function(data) {
    	console.log("pong");
	  });

	  $scope.enviar = function() {
	  	socket.send( $scope.textoEnviar );
	  	$scope.textoEnviar = '';
	  }


		$scope.salir = function() {
			$scope.public.show_main_toolbar = true;
			$scope.goTo('/contacto');
		}
}]);