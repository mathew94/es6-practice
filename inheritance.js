class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(cName){
        super(); //"extend" korle "super" call korte hobe
        this.name = cName;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());