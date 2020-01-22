'use strict';

function concat(arr1, arr2) {
    
    var a = [];

    if (typeof(arr1) != 'object') {
        a[0] = arr1;

    } else {
        for (var i = 0; i<arr1.length; i++) {
            a[i] = arr1[i];
        };
    };

    if (typeof(arr2) != 'object') {
        a[a.length] = arr2;

    } else {
        for (var i = 0; i<arr2.length; i++) {
            a[a.length] = arr2[i];
        };
    };
    return a;
};
