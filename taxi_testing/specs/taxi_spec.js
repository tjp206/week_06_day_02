const assert = require('assert');
const Taxi = require('../taxi.js')

describe('Taxi', function(){

    let taxi 

    beforeEach(function() {
        taxi = new Taxi('Toyota', 'Prius', 'TJ');
    });
     

    it('should have a manufacturer', function(){
        // Arrange 
        // const taxi = new Taxi('Toyota', 'Prius');
        // Act
        const actual = taxi.manufacturer;
        // Assert
        assert.strictEqual(actual, 'Toyota');
    });

    it('should have model', function(){
        // const taxi = new Taxi('Toyota', 'Prius');
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

    it('should have a driver', function(){
        const actual = taxi.driver;
        assert.strictEqual(actual, 'TJ');
    });

    describe('passengers', function(){
        it('should start with no passengers',function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });

        it('should show number of passengers', function(){
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        });

        it('should add passenger', function(){
            taxi.addPassenger('TJ');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1);
        });

        it('should remove passenger by name', function(){
            taxi.addPassenger('TJ');
            taxi.addPassenger('Ayla');
            taxi.removePassengerByName('TJ');
            const expected = ['Ayla']
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected);
        });

        it('should remove all passengers', function(){
            taxi.addPassenger('TJ');
            taxi.addPassenger('Ayla');
            taxi.removeAllPassengers();
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        });


    
    });

});