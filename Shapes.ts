class Shapes{
    shapeColor : String;
    shapeFilled : Boolean;

    constructor (shapeColor : String , shapeFilled : Boolean ){
        this.shapeColor=shapeColor;
        this.shapeFilled=shapeFilled;
    }

    public get getColor() : String{
         return "The Color of the shape is " + this.shapeColor ;
    }
    public set setColor(shapeColor : String){
        this.shapeColor=shapeColor;
    }

    public get getFilled() : Boolean{
        return this.getFilled;
    }
    public set setFilled(shapeFilled : Boolean){
        this.shapeFilled = shapeFilled;
    }
    public getAll (){
        return "The Color is " + this.shapeColor + " And " + this.shapeFilled + " for Filling.";
    }
}

class Circles extends Shapes{
    cirRadius : number;
    constructor(shapeColor : String , shapeFilled : Boolean , cirRadius : number){
        super(shapeColor , shapeFilled);
        this.cirRadius=cirRadius;
    }

    public get getRadius(): number{
        return this.cirRadius;
    }
    public set setRadius(cirRadius : number){
        this.cirRadius=cirRadius;
    }
    public get getAreaCir(): number{
        var cirArea = 3.14 * this.cirRadius * this.cirRadius;
        return cirArea;
    }
    public get getPeriCir(): number{
        var cirPeri = 2 * 3.14 * this.cirRadius;
        return cirPeri;
    }
    public getAllCir (){
        return "The Circle Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , And the Radius is " 
        + this.cirRadius ;
    }

}

class Rectangle extends Shapes{
    recWidth:number;
    recLength:number;

    constructor(shapeColor:String , shapeFilled:Boolean , recWidth:number , recLength:number){
    super(shapeColor , shapeFilled);
    this.recLength=recLength;
    this.recWidth=recWidth;
    }
    public get getWidth(): number{
    return this.recWidth;
    }
    public set setWidth(recWidth : number){
        this.recWidth=recWidth;
    }
    public get getLength(): number{
        return this.recLength;
        }
    public set setLength(recLength : number){
            this.recWidth=recLength;
        }
    public get getAreaRec(): number {
        var recArea = this.recLength * this.recWidth;
        return recArea;
    }
    public get getPeriRec(): number {
        var recPeri = 2 * (this.recLength + this.recWidth);
        return recPeri;
    }
    public getAllRec(){
        return "The Rectangle Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , It's width is " + this.recWidth + " And it's length is "
        + this.recLength ;
    }
}
class Square extends Rectangle{
    sqrSides:number;

    constructor(shapeColor:String , shapeFilled:Boolean , recWidth:number , recLength:number , sqrSides:number ){
        super(shapeColor , shapeFilled , recWidth , recLength);
        this.sqrSides=sqrSides;
    }
    public get getSides(): number{
        return this.sqrSides;
    }
    public set setSides(sqrSides : number){
        this.sqrSides=sqrSides;
    }
    public setWidthSqr(sqrSides : number){
        this.recWidth=this.recWidth;
    }
    public setLengthSqr(sqrSides : number){
        this.recLength=this.recLength;
    }
    public getAllSqr(){
        return "The Square Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , It's width is " + this.recWidth + " , it's length is "
        + this.recLength + " ,And it's Sides are " + this.sqrSides;
    }

}






















