import Vue from "vue"

// Make upperCase Filter
Vue.filter('makeUpperCase', function(v){
    return v.toUpperCase();
});

// Make revarsing filter 
Vue.filter('makeRevirsing', function(v){
    return v.split("").reverse().join("");
});