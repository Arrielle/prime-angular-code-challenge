app.controller('HeroListController', ['$http', function($http){
  console.log('Hero List Controller loaded');

  var self = this;
  self.message = "Heroes List";
  self.heroList = { list: [] };
  self.heroPowers = { list: [] };

  self.newHero = {};
  getHeroes();
  getPowers();

  function getHeroes(){
    console.log(self.heroPowers.list);
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      self.heroList.list = response.data;
    });
  }

    function getPowers(){
      $http({
        method: 'GET',
        url: '/powers'
      }).then(function(response){
        self.heroPowers.list = response.data;
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

  self.editHero = function(hero){
    console.log('hero', hero);
    console.log('hero.id', hero.id);
    $http({
      method: 'PUT',
      url: '/heroes/' + hero.id,
      data: hero
    }).then(function(response){
       getHeroes();
    });
  }

}]);
