class Employee{
    login(){
        console.log("Employee has log in");
    }
    logout(){
        console.log("Employee has log out");
    }
    requestLeaves(leaves){
        console.log(`Employee is in ${leaves} days leave`)
    }
}
 
class developer extends Employee{
    requestLeaves(leaves){
    super.requestLeaves(4);
    }
      coffee(x){
        console.log(`Employee has requested ${x} coffee`)
      }
}
let m = new developer();
m.login();
m.requestLeaves();