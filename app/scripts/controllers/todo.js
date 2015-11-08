/**
 * TODOアプリ
 */
app.controller('TodoController', function($scope) {
  'use strict';

  // milkcocoaのインスタンスを作成
  var milkcocoa = new MilkCocoa("flagig8ff9sg.mlkcca.com");// 管理画面で発行されたIDを指定
  // データストアを作成
  $scope.todoApp = milkcocoa.dataStore('todoApp'); // データストアの名称は任意に作成できる

  $scope.newTask = '';
  $scope.todoList = [];

  $scope.filter = {
    done: {done : true},
    remaining : {done : false}
  };
  $scope.currentFilter = null;

  $scope.addTask = function() {
    $scope.todoList.push({
      title : $scope.newTask,
      done : false
    });

    $scope.newTask = '';
  };

  $scope.changeFilter = function(filter) {
    $scope.currentFilter = filter;
  };

  // 初期処理
  $scope.$on('$routeChangeSuccess', function() {
    // データストアから登録情報を取得する
  });
});