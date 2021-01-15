var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.name = "Mark Zukerberg";
console.log(company);
console.log("Facebook is owned by: "+company.ceo.name);
var company = {
  name : "Facebook",
  ceo: {
    name: "Mark",
    lastname: " Zukerberg"
  },
  $stock: 1200
};
console.log(company.ceo.name+company.ceo.lastname);
