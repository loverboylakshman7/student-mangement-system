function showNotifications(){

let messages=[

"New student registered",

"Attendance updated",

"Monthly report generated"

];

let text="Notifications\n\n";

messages.forEach((msg,index)=>{

text+=(index+1)+". "+msg+"\n";

});

alert(text);

}