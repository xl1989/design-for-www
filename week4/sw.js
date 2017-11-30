var students=[{
    firstName:"Xingming",
    lastName:"Li",
    hobbies:["read","dance","travel"]
},
{
    firstName:"Mina",
    lastName:"Sun",
    hobbies:["swim","play computer games","smile"]
},
{
    firstName:"Matt",
    lastName:"Weigel",
    hobbies:["hiking","watch movies","download apps"]
}
]

var myContent = document.getElementById("content");
var myHeader = document.getElementById("header");
var myPageContent= document.getElementById("pageContent");

myHeader.innerHTML = "Students' hobbies";
myPageContent.innerHTML = "Here are some students' info:";

var studentList = document.createElement("ul");
myContent.appendChild(studentList);

for(var i=0;i<students.length;i++){
 
    var string = students[i].firstName+" "+students[i].lastName+" "+"likes to"+" ";
 

  for(var j=0;j<students[i].hobbies.length;j++){
     if(j<students[i].hobbies.length-1){
    string +=students[i].hobbies[j] +","; }else{
        string +="and"+" "+students[i].hobbies[j]+".";
    }    
  }
        var studentItem = document.createElement("li");
studentList.appendChild(studentItem);
var studentText=document.createTextNode(string);
 
 studentItem.appendChild(studentText); 
}

 







