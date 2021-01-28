// this
var obj1 = {
  name : 'Rushikesh',
  var4 : function(){
    console.log(this);
  }
}
obj1.var4();

var obj2 = {
  name : 'Kamal',
  obj3 : {
    name : 'Aditya',
    var3 : function(){
      console.log(this);
    }
  }
}
obj2.obj3.var3();

var obj4 = {
  name : 'Kamal',
  var1 : function(){
    console.log(this);
  },
  obj5 : {
    name : 'Aditya',
    var2 : function(){
      console.log(this);
    }
  }
}
obj4.var1();
