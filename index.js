const inp = document.querySelector('#inp');
angular.module('mySchedule', []).controller('itemCtrl', function($scope) {
    $scope.items = [];
    $scope.item = '';
    $scope.create = function(item) {
        if ($scope.item.length < 1) {
            alert("Input text!!!")
        } else {
            $scope.items.push($scope.item);
            if ($scope.item == x) {
                alert("You scheduled that already!!!")
            }

        }
        inp.value = '';
    }
    $scope.delete = function(x) {
        $scope.items.splice(x, 1);
    }
})