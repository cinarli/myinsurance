$(document).ready(function(){
   
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user)
            {
            
                $("#inpemail").val(user.email)

                $("#message_send").on("click",function(e){
                    e.preventDefault()
                    var name=$("#inpname").val()
                    var email=$("#inpemail").val()
                    var inp_message=$("#inp_message").val()
                    firebase.database().ref("messages/"+user.uid).push({
                        name:name,
                        email:email,
                        mesaj:inp_message
                    })





                })
            } 
            else {
                window.location.href="login.html"
            }
        });
        
    
})