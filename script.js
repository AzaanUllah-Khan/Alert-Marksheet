
var std_name = prompt("Enter Your Name");
var roll = prompt("Enter Your Roll Number");
var maths =+ prompt("Enter Your Maths marks out of 100");
var sst =+ prompt("Enter Your Social Studies Marks out of 100");
var sci =+ prompt("Enter Your Science Marks out of 100");
var eng =+ prompt("Enter Your English Marks out of 100");
var t_m = maths + sst + sci + eng;
document.write("Student Name = " + std_name + "<br>" + "Total Marks of " + std_name + " = " + t_m + "<br>" + "Percentage of " + std_name + " = " + t_m/400 * 100 + "%");
var percentage =+ t_m/400 * 100;
if(percentage >= 100){
    document.write("<br>" + "Grade of " + std_name + " =" + "A")
}
else if(percentage >= 90){
    document.write("<br>" + "Grade of " + std_name + " =" + "B")
}
else if(percentage >= 80){
    document.write("<br>" + "Grade of " + std_name + " =" + "C")
}
else if(percentage >= 70){
    document.write("<br>" + "Grade of " + std_name + " =" + "D")
}
else{
    document.write("<br>" + "Grade of " + std_name + " =" + "Fail")
}
