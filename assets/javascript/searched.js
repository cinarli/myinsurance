$("#search_btn").on("click",function(){
    var searched=$("#search_inp").val()
    
    firebase.database().ref("sigorta/"+searched).once('value').then(function(snapshot) {
        $("#con_xidmet").html("")
        $("#con_xidmet").append('<table class="table"></table')
        $(".table").append('<thead><tr><th scope="col">#</th><th scope="col">First</th></tr></thead>')
        $(".table").append("<tbody></tbody>")
        var cedvel=$(".table")
        if(snapshot.val()!==null)
        {
            
            
            cedvel.append("<tr><th scope='row'>User key: </th><td>"+snapshot.val().wincode+"</td></tr>")

            cedvel.append("<tr><th scope='row'>User key: </th><td>"+snapshot.val().user_key+"</td></tr>")
            cedvel.append("<tr><th scope='row'>Vəsiqə id: </th><td>"+snapshot.val().vesiqe+"</td></tr>")

            cedvel.append("<tr><th scope='row'>Telefon: </th><td>"+snapshot.val().tel_nomre+"</td></tr>")
            cedvel.append("<tr><th scope='row'>Siğorta olunan hissə: </th><td>"+snapshot.val().sigorta_parca+"</td></tr>")
            cedvel.append("<tr><th scope='row'>Siğorta tipi: </th><td>"+snapshot.val().type_sigorta+"</td></tr>")
            cedvel.append("<tr><th scope='row'>Siğorta başlanğıc tarixi: </th><td>"+snapshot.val().date_first+"</td></tr>")
            cedvel.append("<tr><th scope='row'>Siğorta bitiş tarixi: </th><td>"+snapshot.val().date_last+"</td></tr>")
        }
        else
        {
            cedvel.append("<tr><th scope='row'>Wincode: </th><td>Tapılmadı</td></tr>")
        }
      });
      

//alert("fdsfdsf")
})