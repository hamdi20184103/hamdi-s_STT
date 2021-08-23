var student = /** @class */ (function () {
    function student(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
    student.prototype.setstudent = function (studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    };
    student.prototype.getstudent = function () {
        return "Student Id is " + this.studentId + "\n And the Student Name is " + this.studentName + ".";
    };
    return student;
}());
var std = new student(20184413, "Salem");
std.setstudent(2154, "Ali");
console.log(std.getstudent);
console.table(std.getstudent);
//std.getstudent;
