class movie{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
    
    getrating(){
        if(this.rating.length==0){
           var result ="pg"
        }else{
            result =rating;
        }
        return result;
    }
    display(){
        return(`movie name is ${this.tittle} movie studio is ${this.studio} rating of tha movie is`);
    } 
}
let movie1= new movie("Casino Royale","Eon Productions","");

console.log(movie1.display());
console.log(movie1.getrating());
