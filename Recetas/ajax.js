function getRecetas(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let receta = JSON.parse(this.responseText);
            let recetas = receta.categories;

            for (let i = 0; i < recetas.length-1; i++){
                let mostrar = 
                "<tr><th>"+ recetas[i].idCategory +"</th> <th>"+ recetas[i].strCategory +"</th><th> <img src="+recetas[i].strCategoryThumb + "></th><th>"+  recetas[i].strCategoryDescription +"</th> </tr>";
                $("#aquiRecetas").append(mostrar)
                //document.getElementById("aquiRecetas").value = parentNode.append(mostrar);
            }
        }
    }
    xhttp.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php",true);
    xhttp.send();

}


function getRecetasJquery(){
    $(document).submit(function(){
        var url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(response) {
                let recetas = response;
                for (let i = 0; i < recetas.length-1; i++){
                    let mostrar = 
                    
                    $("#aquiRecetas").append(mostrar);
                }
            }
        })
}

// $(document).submit(function(){
//     var url = "https://www.themealdb.com/api/json/v1/1/categories.php";

//     $.ajax({
//     url: url,
//     type: "GET",
//     dataType: "json",
//     success: function(response) {
        
//         let recetas = response;

//         for (let i = 0; i < recetas.length-1; i++){
//             let mostrar = 
//             "<tr><th>"+ recetas[i].idCategory +"</th> <th>"+ recetas[i].strCategory +"</th><th> <img src="+recetas[i].strCategoryThumb + "></th><th>"+  recetas[i].strCategoryDescription +"</th> </tr>";
//             $("#aquiRecetas").append(mostrar);
//         }
//     }
    
//     }
// )}