function greet(name, func){
    console.log(name);
    func();
}
function callMe(){
    console.log("call back function");
}

greet("raju",callMe);