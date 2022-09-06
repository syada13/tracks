import * as Location from 'expo-location';

// 10 meters in  longitude or latitude
const tenMetersWithDegrees = 0.0001;

    // Return fake locations starting Apple headquater in Cupertino
const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccurancy: 5,
            altitude: 5,
            longitude: -122.0312186 + increment * tenMetersWithDegrees,
            latitude: 37.33233141 + increment * tenMetersWithDegrees,
        }
    };
};


let counter = 0;
// Every second emits an event directly to Location library
setInterval( () => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000 );

