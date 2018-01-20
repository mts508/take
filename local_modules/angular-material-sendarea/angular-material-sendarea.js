/*
EJ:
  <md-sendarea ng-model="model" ng-send="function()" ng-maxlength="400"></md-sendarea>

  con ng-maxlength muestra cantidad de caracteres escritos y caracteter maximos. sin ng-maxlength esto no se muestra.
*/
mdSendAreaModule = angular.module('ngSendarea', ['ngMaterial', 'ngMdIcons']);

mdSendAreaModule.directive('mdSendarea', ['$parse', function($parse) {
  var scripts = angular.element('script'), script;
  for (var each in scripts) {
    script = scripts[each];
    if (script.src && script.src.match(/angular-material-sendarea(\.min)?\.js$/)) {
      break;
    }
  }
  var template = script.src.replace(/\.js$/, '.html');
  return {
      templateUrl: template,
      require: "ngModel",
      scope: {
        maxlength: '=ngMaxlength'
      },
      link: function(scope, element, attrs, ngModel) {
        var writingArea = element[0].getElementsByClassName("textarea")[0];
        var button = angular.element(element[0].getElementsByClassName("md-icon-button")[0]);
        var expressionHandler = $parse(attrs.ngSend);
        scope.currentWrittingLength = 0;
        scope.sendEnabled = true;
        ngModel.$validators.maxlength = function(modelValue, viewValue) {
          if(scope.maxlength){
            if(!modelValue){
              return false;
            }

            return viewValue.length<=scope.maxlength;
          }
          return true;
        }

        element.bind("blur keyup change focusout submit", function(event) {
          var txt = "";
          for(var i=0; i<writingArea.childNodes.length; i++){
            if(i>0){
              txt+= "\n";
            }
            txt += writingArea.childNodes[i].textContent;
          }


          scope.sendEnabled = txt!=undefined?(txt.trim()?true:false):false;
          scope.currentWrittingLength = txt.length;
          ngModel.$setViewValue( txt );//writingArea.textContent
          //scope.$apply(function(){scope.currentWrittingLength = txt.length;});//writingArea.textContent.length
        });

        ngModel.$render = function() {
          if(!ngModel.$viewValue){
            scope.sendEnabled = false;
          }
          writingArea.textContent = ngModel.$viewValue || "";
        };

        button.bind('click', function(){
          scope.$parent.$apply(function() {expressionHandler(scope.$parent);});
        });
      }


   };
}]);