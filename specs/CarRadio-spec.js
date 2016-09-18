describe('Car Radio Tests - [driver / passenger listening to the radio while driving]', function(){
   it('should get null', function() {
      expect(window.driver.getChannel()).toBe(null);
   });
   it('should return truthy if radio is on', function() {
      window.driver.turnOn();
      expect(window.driver.getStatus()).toBeTruthy();
   });
   it('should return default channel (1) after turning the radio on', function() {
      expect(window.driver.getChannel()).toBe(1);
   });
   it('should change channel to channel 3', function() {
      window.driver.changeChannel(3);
      expect(window.driver.getChannel()).toBe(3);
   });
   it('should return the same channel for the driver as for the passenger', function() {
      expect(window.driver.getChannel()).toEqual(window.passenger.getChannel());
   });
   it('should return falsy if radio is off', function() {
      window.driver.turnOff();
      expect(window.driver.getStatus()).toBeFalsy();
   });
})
