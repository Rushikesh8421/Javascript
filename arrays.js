// Ways to declare an array
var array = new Array();
array[0] = "Rushikesh";
array[1] = "Rajkumar";
array[2] = "Patil";
array[3] = {company : "Astatine"};
array[4] = function(name) {
  console.log("Hello "+name);
}
array[4](array[0]);

// Another way to creat array in js
var names = ["Rushikesh","Rajkumar","Patil"];
console.log(names);
for (var i = 0; i < names.length; i++) {
  console.log(array[i]);
}

// Object with array

var MyObj = {
  Company : "Facebook",
  Ceo : "Mark Zukerberg",
  $sharePrice : "1500"
};
for (var prop in MyObj){
  console.log(prop+": "+ MyObj[prop]);
}


var names2 = ["Rakesh","Tejas","Kamal"];

names2.greeting = "Hi";

for(var name in names2) {
  console.log("Hello "+names2[name]);
}
