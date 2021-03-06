angular.module('parserModule', ['parserModule']).factory('parserModule', function (){
  ionic.Platform.ready(function(){

    var appId         = '';
    var clientKey     = '';

    parsePlugin.initialize(appId, clientKey, function() {

      parsePlugin.subscribe('ios', function() {

        //
        parsePlugin.getInstallationId(function(id) {

           var install_data = { installation_id: id, channels: ['ios'};

          $.jStorage.set('pushInfo', install_data);
          $.jStorage.set('pushID', id);


        }, function(e) {
          // callback error installation_id
        });


      }, function(e) {
          // callback error subscribe
      });


    }, function(e) {
      // callback error initialize parsePlugin
    });

    parsePlugin.registerCallback('onNotification', function() {

      window.onNotification = function(pnObj) {
        $.jStorage.set('pushNotification', pnObj);
      };

    }, function(error) {
      console.error(error);
    });

  });

  return{

   }
});
