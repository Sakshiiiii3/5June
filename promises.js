const ticket = new Promise(function(resolve,reject){
  const isBoarded = false;
  if(isBoarded){
    resolve("YOU ARE IN A FLIGHT");
  }else{
   reject("your flight has been cancelled");
  }

});

ticket 
  .then((data)=>{
    console.log("wohoo",data);
  })
  .catch((data)=>{
    console.log("oh no",data);
  })
  .finally(()=>{
    console.log("I will always be executed");
  })