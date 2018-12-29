var SocialProfile = /** @class */ (function () {
    function SocialProfile(Name, Age, Profession, Friends) {
        var _this = this;
        this.getName = function () {
            return _this.Name;
        };
        this.getAge = function () {
            return _this.Age;
        };
        this.getProfession = function () {
            return _this.Profession;
        };
        this.getFriends = function () {
            return _this.Friends;
        };
        this.Name = Name;
        this.Age = Age;
        this.Profession = Profession;
        this.Friends = Friends;
    }
    return SocialProfile;
}());
var about = new SocialProfile("kiran", 20, "WEB DEVOLOPER", 25);
console.log(about.getName());
console.log(about.getAge());
console.log(about.getProfession());
console.log(about.getFriends());
