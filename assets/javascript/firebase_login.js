$(document).ready(function(){
    $("#reg-sub").on("click",function(e){
        $(".clear").html("")
        $(".clear").css("display","none")
        e.preventDefault()
        var email=$("#inpemail").val()
        var parol=$("#parol").val()
        firebase.auth().signInWithEmailAndPassword(email,parol).then(function(){
            window.location.href="index.html"

        }).catch(function(error) {

            $(".clear").html("Email və ya şifrə yanlışdır!!!")
            $(".clear").css("display","block")
       });
    })
})