$(document).ready(function(){
    $("#reg-sub").on("click",function(e){
        e.preventDefault()
        $(".clear").html("").css("display","none")
        var email=$("#inpemail").val().trim()
        var parol=$("#parol").val().trim()
        var parol2=$("#repparol").val().trim()
        var qayda=true;
        if(parol.length<6 || parol2.length<6){
            $(".clear").html("Şifrə ən az 6 xarakterdən ibarət olmalıdır")
            $(".clear").css("display","block")
            qayda=false
        }
        else if(parol!==parol2){
            qayda=false;
            $(".clear").html("Parollar eyni deyil")
            $(".clear").css("display","block")
        }
        else if(email.indexOf(" ")!==-1 || parol.indexOf(" ")!==-1 || parol2.indexOf(" ")!==-1){
            qayda=false;
            $(".clear").html("Email və ya şifrədə boşluq ola bilməz")
            $(".clear").css("display","block")
        }
        else if(parol===''||parol2===''||email===''){
            qayda=false;
            $(".clear").html("Email və ya şifrə boş ola bilməz")
            $(".clear").css("display","block")
        }else if ($('#checkcon').is(":checked")===false)
        {
            qayda=false
            $(".clear").html("Şərtləri qəbul etməlisiniz!")
            $(".clear").css("display","block")
        }
        else if(qayda===true){
            
            firebase.auth().createUserWithEmailAndPassword(email,parol).then(function(){
            
                window.location.href="index.html"
            })
        }
    })
})
