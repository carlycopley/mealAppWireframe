//make the save meal data button function
$(document).ready(function(){
  //code goes here 
  
  $("#saveMeal").on("click", function(){
    // call meal type?\
      let statusText = underConstruction("not ready");
    // update the status
      $("#saveMeal").text(statusText).prop("disabled", true);
  
     });
  
    // pass a status (ready or not ready) and get back a message for user
    // rn, not ready
    function underConstruction(status){
 
      return "not yet ready";
    };
  }
);

//make the education link button functioning
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}