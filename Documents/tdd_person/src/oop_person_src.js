class Person{
    constructor(name,age,gender,interests){
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.interests = interests;
      }
      Hello(){
      return('Hello, My name is '+this.name+' and I am '+this.age +' year old My interests are '+this.interests[0]+", "+this.interests[1]+ " and " +this.interests[2])
      }
    }
    module.exports= {Person}