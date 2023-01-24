


function sendEmail() {
  var inputname = document.getElementById("name").value;
  var inputsubject = document.getElementById("subject").value;
  var inputemail = document.getElementById("email").value;
  var inputmessage = document.getElementById("message").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(!inputname || !inputemail ||!inputmessage || !inputsubject ){
 alert("There was an error All fields must be filled");
 return false;
}else{
if (inputemail.match(validRegex)) {
var yourInformation= "you name is :"+inputname +"\n your email is :"+inputemail;
  confirm(yourInformation +"\n do you want to send the message!!!");
  alert("your message is sending  successfully");

mail.send({
Host : "houdalawad.github.io",
To : 'houdalawad@gmail.com',
From : inputemail ,
Subject : inputsubject ,
Body : inputmessage
}).then(
message => alert("your message is sending  successfully")
);
     } else{
      alert("Invalid email address!");
      return false;
     }
  
}

 
}
//////////////////////////////////////////////
function invoiceAccount() {
  var total_cost=0;
  var details="";
  var Hollywood_smile = document.getElementById("Hollywood_smile");
  var Excavation_filling = document.getElementById("Excavation_filling");
  var Excavation_filling_crown = document.getElementById("Excavation_filling_crown");
  var crown = document.getElementById("crown");
  var Cleaning_tartar = document.getElementById("Cleaning_tartar");
  var Orthodontic = document.getElementById("Orthodontic");
  var Dental_implants = document.getElementById("Dental_implants");
  var Periodontal_treatment = document.getElementById("Periodontal_treatment");
  var Take_off = document.getElementById("Take_off");

  if (Hollywood_smile.checked){
    total_cost +=100;
    var Hollywood_smile_cost=100+"$";
    details="Hollywood smile cost="+Hollywood_smile_cost;
}
if (Excavation_filling.checked){
  total_cost += 30;
  var Excavation_filling_cost=30+"$";
  details +="\n The cost of drilling and filling for one tooth only="+Excavation_filling_cost;
}
if (Excavation_filling_crown.checked){
  total_cost += 80;
  var Excavation_filling_crown_cost=80+"$";
  details +="\n The cost of drilling , filling and crown for one tooth only="+Excavation_filling_crown_cost;
}
if (crown.checked){
  total_cost += 50;
  var crown_cost=50+"$";
  details +="\n The cost of crown for one tooth only="+crown_cost;

}
if (Cleaning_tartar.checked){
  total_cost += 20;
  var Cleaning_tartar_cost=20+"$";
  details +="\n The cost of cleaning teeth from tartar in two sessions="+Cleaning_tartar_cost;

}
if (Orthodontic.checked){
  total_cost += 150;
  var Orthodontic_cost=150+"$";
  details +="\n Orthodontic cost="+Orthodontic_cost;
}
if (Dental_implants.checked){
  total_cost += 1000;
  var Dental_implants_cost=1000+"$";
  details +="\n The cost of implanting one tooth only="+Dental_implants_cost;

}
if (Periodontal_treatment.checked){
  total_cost += 200;
  var Periodontal_treatment_cost=200+"$";
  details +="\n The cost of periodontal treatment over four sessions="+Periodontal_treatment_cost;
}
if (Take_off.checked){
  total_cost += 10;
  var Take_off_cost=10+"$";
  details +="\n Tooth extraction cost="+Take_off_cost;


}
details +="\n \n Total cost= "+total_cost+"$";
details +="\n Note: This cost can change depending on the treatment.... ";

alert(details);
}

////////////////////////////////////////////

function Appointment() {
  var yourInformation="";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phon = document.getElementById("phon").value;
  var problem = document.getElementById("problem").value;
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
  var message = document.getElementById("message").value;
  var sex = document.getElementsByName("sex").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (email.match(validRegex) && phon.match(phoneno)) {
    var yourInformation= "\n you name is :"+name + "\n Your problem is:"+problem+"\n your time :"+day+"at the hour:"+time;
      confirm(yourInformation +"\n are you sure!!!");
      alert("The appointment has been booked successfully");
      
  }else{
    alert("Your email or Your Phone is incorrect");
return false;
  }

  yourInformation +="\n Note:Note: The appointment must be confirmed one day in advance... A confirmation message will be sent to the number(("+phon+"))";

alert(yourInformation);
}