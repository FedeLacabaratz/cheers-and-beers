'use strict';


function filter(arr1, condition) {
    
    var arr2= [];
    
    for (var i=0; i<arr1.length; i++) {
        
        if (condition(arr1[i])) {
            arr2[arr2.length] = arr1[i];
        };
     
    };
    return arr2;
};