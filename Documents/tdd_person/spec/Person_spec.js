const{Person}= require("../src/oop_person_src")
let person = new Person('Ryan',30,'male',['being a hardarse','agile','ssd hard drves'])

describe("Person",function(){
    it("should show name",function(){
      expect (person.name).toBe('Ryan')   
    })
    it("should show age",function(){
      expect(person.age).toBe (30)
    })
    it("should show gender",function(){
        expect(person.gender).toBe('male')
    })
    it("should show interests",function(){
        expect(person.interests).toEqual(['being a hardarse','agile','ssd hard drves'])
    })
})