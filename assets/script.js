
$("#searchButton").click(function(){

var searchTerm=$("#termInput").val();
var firstYear =$("#yearStart").val();
var lastYear= $("#yearEnd").val();
if(searchTerm != ""){

console.log(searchTerm,firstYear,lastYear);

if(firstYear.length !=4 || parseInt(firstYear <1900) || parseInt(firstYear >2020) ){
    firstYear="";
}

if(lastYear.length !=4 || parseInt(lastYear <1900) || parseInt(lastYear >2020) || parseInt(lastYear)<parseInt(firstYear)){
    lastYear="";
}

getArticles(searchTerm,firstYear,lastYear);

console.log(searchTerm,firstYear,lastYear);
}//at minimun, the program needs a search term to work

});






$("#clearButton").click(function(){

   $(".inputs").each(function(){
    $(this).val("");
   });

    $(".card-body").remove();

});