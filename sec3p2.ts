class student{
    private studentId : Number;
    private studentName : String;
    
    constructor (studentId : Number , studentName : String){
    this.studentId = studentId;
    this.studentName = studentName;
    
    }

    public setstudent (studentId : Number , studentName : String){
        this.studentId = studentId;
        this.studentName = studentName;
        
        }
    public getstudent():string{
        return "Student Id is " + this.studentId + "\n And the Student Name is " + this.studentName + ".";
    }       
    
    
    }
    
    const std = new student(20184413 , "Salem");
    std.setstudent(2154 , "Ali");
    console.log(std);
    std.getstudent;