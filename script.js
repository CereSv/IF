var text=document.getElementById("message");
var button1=document.getElementById("knapp");
button1.addEventListener("click",function()
{
  var Person=document.getElementById("alder").value;
  if(Person>66)
  { 
    document.getElementById("message").innerHTML="För Gammal";
    }
    else if(Person<18)
    {
      document.getElementById("message").innerHTML="För Ung";

    }
    else
    {
      document.getElementById("message").innerHTML="Rätt Ålder";
    }
})