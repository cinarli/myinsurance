
$(document).ready(function(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     
      
      //$("#giris").css("color","white")
      $("#giris").append("<a type='button'  href='contact.html' class='btn btn-outline-light'>Əlaqə</a>")
      if(user.uid==="NTVv1ecxc3adWkCWYuyOplvyFLn2"){
        $("#giris").append('<a type="button" href="sigorta.html" id="add_sigorta" class="btn btn-outline-light">Sigorta elave et</a>')
        $("#add_sigorta").css("margin","20px 4px")
      }
      
      $("#giris").append('<a type="button" id="logout">Çıxış</a>')
      $("#giris").append("<span id='email'>"+user.email+" &nbsp&nbsp| </span>")
      $(".footer-links").append('<a href="contact.html">Əlaqə</a>')
      // ...
    } else {
      $("#giris").append('<a type="button" href="register.html" class="btn btn-outline-light">Qeydiyyat</a>')
    }
  });
  $(document).on("click","#logout",function(){
    firebase.auth().signOut().then(function() {
      window.location.href="login.html"
    }).catch(function(error) {
      console.log("Problem var: "+error.message)
    })
  })
})