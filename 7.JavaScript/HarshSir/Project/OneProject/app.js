let user = {
  name: "Kajal",
  age: 22,
  info: function() {
    console.log(this.name + " is " + this.age + " years old");
  }
};

user.info(); // Kajal is 22 years old
