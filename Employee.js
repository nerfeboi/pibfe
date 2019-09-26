class Employee{
var firstName;
var lastName;
var age;
  Employee(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
  getCompleteName(){
    var completeName = '';
    if(this.firstName!='' && this.lastName!=''){
      completeName = this.firstName + ' ' + this.lastName;
    }
    return completeName;
  }
}
