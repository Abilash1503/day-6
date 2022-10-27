class person {
    constructor(name,livingPlace,Dob,fatherName,email){
        this.name=name;
        this.livingPlace=livingPlace;
        this.Dob=Dob;
        this.fatherName=fatherName;
        this.email=email
    }
    getPersonDetails(){
        return(`name of the person is ${this.name} livingplace of the person is ${this.livingPlace} Dob of tha person is ${this.Dob}
     father name is ${this.fatherName}   email id of tha person is ${this.email}`)
    }
    
}
let person1=new person("arun","coimbatore","3-3-2002","ramesh","arun907@gmail.com");
console.log(person1.getPersonDetails());
