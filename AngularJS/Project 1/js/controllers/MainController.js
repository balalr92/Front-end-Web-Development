app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Best Sellers';
  $scope.promo = '50% OFF!';
  $scope.products = [
                    {
                      name: 'The Book of Trees',
                      price: 19,
                      pubdate: new Date('2014', '03', '08'),
                      cover: 'img/the-book-of-trees.jpg',
                      likes: 0,
                      dislikes: 0
                    },
                    {
                      name: 'Program or be Programmed',
                      price: 8,
                      pubdate: new Date('2013', '08', '01'),
                      cover: 'img/program-or-be-programmed.jpg',
                      likes: 0,
                      dislikes: 0
                    },
    								{
                    	name: 'Air Frame',
                    	price: 9,
                    	pubdate: new Date('2000','08','02'),
                    	cover: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Airframe_cover.jpg',
                      likes: 0,
                      dislikes: 0
                    },
                    {
                        name: 'Angels and Demons',
                        price: 9,
                        pubdate: new Date('2004','05','05'),
                        cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/AngelsAndDemons.jpg',
                        likes: 0,
                      	dislikes: 0
                    }
                  ];
  $scope.plusOne = function(index) {
                          $scope.products[index].likes += 1;
                          };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes+=1;
  }
}]);
