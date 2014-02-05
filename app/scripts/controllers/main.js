'use strict';

angular.module('bcnjs')
	.controller('MainCtrl', function ($scope) {
		var i = 0;
		var today = new Date();
		var yesterday = new Date();

		yesterday.setTime(today.getTime() - 24 * 60 * 60 * 1000);

		while(bcnjs_events[i].date <= yesterday) {
			i++;
		}

		$scope.bcnjs = bcnjs_events[i];

		if(!$scope.bcnjs.special) {

			while($scope.bcnjs.talks.length < 3) {
				var empty = {
					title: 'Free slot',
					description: '**This slot could be yours! Submit your talk now.**  You did some crazy stuff with JavaScript? You want to show it to the community?\nDrop us a line on your topic on [Twitter](https://twitter.com/bcnjs) or to [Google+](https://plus.google.com/u/0/communities/115705669406517039298).'
				};
				$scope.bcnjs.talks.push(empty);
			}

		}
	});
