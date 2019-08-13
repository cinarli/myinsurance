$(document).ready(function(){
    $("#add_sigorta").on("click",function(){
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user)
            {

                let user_account_key=user.uid
                let email=$("#inp_email").val()
                let wincode=$("#wincode").val()
                let sigorta_parca=$("#sigorta_parca").val()
                let vesiqe=$("#vesiqe").val()
                let date_first=$("#date_first").val()
                let date_last=$("#date_last").val()
                let type_sigorta=$("#type_sigorta").val()
                let tel_nomre=$("#tel_nomre").val()
                let info=
                {
                    user_key:user_account_key,
                    email:email,
                    wincode:wincode,
                    sigorta_parca:sigorta_parca,
                    vesiqe:vesiqe,
                    date_first:date_first,
                    date_last:date_last,
                    type_sigorta:type_sigorta,
                    tel_nomre:tel_nomre
                }
                
                firebase.database().ref("sigorta/"+wincode).set(info), function(error) 
                {
                    if (error)
                    {
                    alert("Əlavə edilmədi")
                    }
                    else {
                        alert("Əlavə edildi")
                    }
                }
            
            } 
            else {
                window.location.href="login.html"
            }
        });
    })
})