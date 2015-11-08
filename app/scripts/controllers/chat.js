/**
 * チャットアプリサンプル
*/
app.controller('ChatController', function($scope) {

    'use strict';

    // milkcocoaのインスタンスを作成
    var milkcocoa = new MilkCocoa("flagig8ff9sg.mlkcca.com");// 管理画面で発行されたIDを指定
    // データストアを作成
    $scope.chatApp = milkcocoa.dataStore('chatApp'); // データストアの名称は任意に作成できる

    // message
    $scope.message = "";
    // user
    $scope.user = "";
    // データストアに登録されているメッセージ
    $scope.messageData = "";

    // メッセージの送信
    $scope.sendMessage = function() {
      // データストアへpushする
      $scope.chatApp.push({user: $scope.user, message: $scope.message});
      $scope.message = "";
    };

    // メッセージの削除
    $scope.removeMessage = function(index) {
      $scope.chatApp.remove($scope.messageData[index].id);
    };

    // 送信制御
    // メッセージ未入力の場合は非活性
    $scope.canClickSendMessage = function() {
      return isValidEmpty($scope.message);
    };

    // メッセージの取得
    $scope.readMessage = function() {
      // データの読込み
      $scope.chatApp.stream().next(function(err, data){
        $scope.messageData = data;
        $scope.$apply();
      });
    };

    $scope.chatApp.on('push', function(event){
      $scope.readMessage();
    });

    $scope.chatApp.on('remove', function(event) {
      $scope.readMessage();
    });

    var isValidEmpty = function(value) {
      if (value === null) {
        return true;
      }
      if (value === 'undifined') {
        return true;
      }
      if (value === '') {
        return true;
      }
      return false;
    };

    // 初期処理
    $scope.$on("$routeChangeSuccess", function() {
      $scope.readMessage();
    });
});