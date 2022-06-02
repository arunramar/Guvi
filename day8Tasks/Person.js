class Person {
  fname = "";
  lname = "";
  age = "0";

  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = Number(age);
  }

  getFname() {
    return this.fname;
  }

  getLname() {
    return this.lname;
  }

  getAge() {
    return this.age;
  }
  setFname(fname) {
    this.fname = fname;
  }
  setLname(lname) {
    this.lname = lname;
  }
  setAge(age) {
    this.age = Number(age);
  
    toString(){
        return `User ${this.lname}, ${this.lname}, is this.age} years old`;
    }
}
