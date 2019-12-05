// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {return arr.slice(1,2)};
const returnLastTwoDrivers = function(arr) {return arr.slice(-2)};

let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
createFareMultiplier = function(i){ return function(){i*5}};
 const fareDoubler = function(fareMultiplier){return fareMultiplier*2};
 const fareTripler = function(fareMultiplier){return fareMultiplier*3};
 
 function selectDifferentDrivers(driverArr,selectingDrivers )
 {
   return selectingDrivers(driverArr);
 }