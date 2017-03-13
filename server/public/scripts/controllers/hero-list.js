app.controller('HeroListController', ['$http', function($http){
  console.log('Hero List Controller loaded');

  var self = this;
  self.message = "Heroes List";
  self.heroList = { list: [] }
  self.newHero = {};
  getHeroes();

  function getHeroes(){
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      self.heroList.list = response.data;
    });
  }

  self.killHeroes = function(heroID){
    console.log(heroID);
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroID
    }).then(function(response){
      getHeroes();
    });
  }

  self.addHero = function(newHero){
    $http({
      method: 'POST',
      url: '/heroes/',
      data: newHero
    }).then(function(response){
       getHeroes();
       self.newHero = {};
    });
  }

}]);
