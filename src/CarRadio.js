(function(win) {
   win.carRadio = (function() {
      var instance; 
      var defaultChannel = 1;
      var channel = null;
      var isOn = false;

      function createRadio() {
         function turnOn() {
            // console.log("Radio: turning on");
            isOn = true;
            channel = defaultChannel;
         }
         function turnOff() {
            // console.log("Radio: turning off");
            isOn = false;
         }
         function getChannel() {
            return channel;
         }
         function changeChannel(val) {
            channel = val;
         }
         function getStatus() {
            return isOn;
         }
         return {
            turnOn: turnOn,
            turnOff: turnOff,
            getChannel: getChannel,
            changeChannel: changeChannel,
            getStatus: getStatus
         }
      }

      return {
         getInstance: function() {
            if(!instance) {
               instance = createRadio();
            }
            return instance;
         }
      }
   })();

   win.driver = carRadio.getInstance();
   win.passenger = carRadio.getInstance();
})(window)