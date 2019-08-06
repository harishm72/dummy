/* 
    Moment.js is a good library but adds 54 KB to js bundle, 
    event after gzip.
    
    TODO: Define a function that takes epoch time and probably returns a 
    relative time, like 5 hours ago, 20 minutes ago
*/

let epoch = 1565069407.009332;

let temp = new Date(0);
temp = temp.setUTCSeconds(epoch);
console.log(new Date(temp).toDateString())