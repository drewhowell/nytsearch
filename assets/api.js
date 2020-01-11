var apiKey="4D97BaFaALZ6cyJ07SrGGBsG3dzTTNey";
var search="sports";
var startYear="1995";
var endYear="1996";
var startStuff="start_date="+startYear+"0101";
var endStuff="end_date="+endYear+"1231";
var numArticles=5;



var yearStuff="";


var apiLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&"+yearStuff+"api-key="+apiKey;

console.log("hi");
$.ajax({
    url: apiLink,
    method: "GET"
}).then(function(response){
console.log(response);


var docList=response.response.docs;
console.log("List: "+docList);

for(var i=0; i<numArticles-1;i++){

    let title=docList[i].headline.main;
    let author=docList[i].byline.original;
    let articleLink = docList[i].web_url;

    console.log(title);
    console.log(author);
    console.log(articleLink);
}


});

createYear("a","b");
createYear("a","");
createYear("","b");

function createYear(start,end){

    if(start!="" && end !=""){
        yearStuff=startStuff;
        yearStuff+="&";
        yearStuff+=endStuff;
        yearStuff+="&";
    }//if both years given

    else if(start!=""){
        yearStuff=startStuff;
        yearStuff+="&";
    }//else only start
    else if(end !=""){
        yearStuff=endStuff;
        yearStuff+="&";
    }//else only end
console.log("Years:"+yearStuff);
}//createYear



