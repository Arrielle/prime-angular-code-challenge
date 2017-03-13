app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');

    var self = this;
    self.message = "Heroes List";
    self.heroList = { list: [] }
    getHeroes();

    function getHeroes(){
      $http({
        method: 'GET',
        url: '/heroes'
      }).then(function(response){
        self.heroList.list = response.data;
      });
    }
}]);
