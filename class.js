class Railwayform{
     submit(){
        console.log("Form is Submitted");
     }
     cancel(){
        console.log(this.name + " form is cancelled with train number"+ this.trainno) ;
     }

    fill(name, trainno){
        this.name  = name;
        this.trainno = trainno;
    }
}
let sakshi = new Railwayform();
sakshi.fill("sakshi", "123456");
sakshi.cancel();