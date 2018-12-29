class SocialProfile {
private Name :string;
private Age :number;
private Profession:string;
private Friends:number;

constructor (Name :string,Age :number,Profession:string,Friends:number) {
    this.Name =Name;
    this.Age =Age;
    this.Profession=Profession;
    this.Friends=Friends;
}
    
  
      getName=()=>{
          return this.Name
      }
      getAge=()=>{
        return this.Age
    }
    getProfession=()=>{
        return this.Profession
    }
    getFriends=()=>{
        return this.Friends
    }
}
let about = new SocialProfile("kiran",20,"WEB DEVOLOPER",25)
 console.log(about.getName())
 console.log(about.getAge())
 console.log(about.getProfession())
 console.log(about.getFriends()) 


