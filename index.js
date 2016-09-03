module.exports = function(ngModule){
    ngModule.directive('slider',['$interval',function ($interval) {
        return {
            restrict: 'E',
            template: '<ul style="{{Sliders.boxCss}} margin-left:{{move}}px;">' +
            '<li style="{{Sliders.childCss}}" ng-repeat="item in Sliders.data"><a href="{{item.link}}"><img ng-src="{{item.img}}"/></a></li></ul>',
            transclude: true,
            scope: true,
            controller:['$scope', '$element', '$attrs' ,function ($scope, $element, $attrs) {
                var _w = $element.parent()[0].offsetWidth;
                var _data =$scope.data;
                var _length = _data.length;
                var _h = $element.parent()[0].offsetHeight;
                var _animateType=$attrs['animateType'];
                var _animateTime=$attrs['animateTime'];
                console.log($attrs['animateType']);
                $scope.move = 0;
                $scope.num = 0;
                $scope.Sliders = {
                    boxCss: 'width:' + (_w * _length) + 'px;transition:all '+_animateTime+'s '+_animateType+';position:absolute; top:0;left:0;',
                    childCss: 'float:left; vertical-align: top;width:' + _w + 'px;height:' + _h + 'px',
                    data: _data,
                    timer: $attrs.timer
                };
                //监听 $scope.num 变化
                $scope.$watch('num',function(value){
                    $scope.move =-value * _w;
                    $scope.num=  value <= _length-1 ? (value <0?_length-1:value)  : 0;
                });
                //图片滚动定时器
                $scope.fnTimer=function(){
                    return $interval(function () {
                        $scope.num++
                    }, $scope.Sliders.timer * 1000);
                }

                $scope.timerInval = $scope.fnTimer();
            }],
            link:['$scope', 'iElement','attrs', function ($scope, iElement,attrs) {
                iElement.parent().on('mouseover', function () {
                    $interval.cancel($scope.timerInval);
                });
                iElement.parent().on('mouseout', function () {
                    $scope.timerInval = $scope.fnTimer();
                })
                angular.element(document.querySelector(attrs['btnRight'])).on("click", function () {
                    $scope.num++;
                    $scope.$apply($scope.num);
                })
                angular.element(document.querySelector(attrs['btnLeft'])).on("click", function () {
                    $scope.num--;
                    $scope.$apply($scope.num);
                })
            }]
        }
    }]);
}

