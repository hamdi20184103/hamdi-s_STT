class MyObject {
    name = String;
    message = String;
    constructor(name, message) {
        this.name = name.toString();
        this.message = message.toString();


        this.getName = function () {
            return this.name;
        };
    }
}
this.getMessage = function(){
    return this.message;
}
