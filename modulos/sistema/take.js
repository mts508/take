app.controller('Take', ['$scope','$location', '$http', '$mdToast', '$timeout', function( $scope, $location, $http, $mdToast, $timeout ) {

		/*var exampleSocket = new WebSocket("ws://localhost:5000/chat");
		
		exampleSocket.onopen = function() {
			console.log('connection established')
			exampleSocket.send("new_connection")
		}
		exampleSocket.onmessage = function(event) {
			console.log(event.data)
		}*/
	   

		$scope.history = [];
		$scope.public = {};
		$scope.public.loading = 0;
		$scope.public.url = 'http://192.168.1.103/take/webservices';
		$scope.public.selectedTab = 0;
		$scope.public.show_main_toolbar = true;
		$scope.public.show_search = false;

		$scope.goTo = function( path, hide_toolbar = false ) {
			$scope.history.push( $location.path() );
			console.log( $scope.history );
			$scope.public.show_main_toolbar = !hide_toolbar;
			$location.path( path );
		}

		$scope.showToast = function( text, delay = 3000 ) {
			$mdToast.show(
      $mdToast.simple()
        .textContent(text)
        .hideDelay(delay)
    	);
		}

		$scope.get = function( filename, datos = null ) {
			if( datos == null )
				datos = {};

			var request_data = {
        method  : 'POST',
        url     : $scope.public.url+filename,
        data    : datos,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
      };

			var request = $http( request_data );
			$scope.public.loading += 1;
      request.then(function successCallback(response) {
      	$scope.public.loading -= 1;
        if( response.status == 'ok' ) {
        }else {
        }
      }, function errorCallback(response) {
      	$scope.public.loading -= 1;
        console.log('ERROR, conectando al servidor');
      });

      return request;
		}

		$scope.searchEnabled = function() {
			var search = angular.element('search-bar');
			if( search.length > 0 ) {
				return true;
			} 
			return false;
		}

		$scope.toggleSearch = function() {
			$scope.public.show_search = !$scope.public.show_search;
			if( $scope.public.show_search ) {
				$timeout(function(){
					var search = document.getElementById('search-bar');
					search.focus();
				},100);
			}
		}

		$scope.clearSearch = function() {
			$scope.public.searchText = "";
		}

}]);





