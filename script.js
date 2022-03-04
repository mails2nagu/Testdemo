//step 01:create an XHR object
var request = new XMLHttpRequest();

// Step 02:request a connection(whicj data you need toreceive)
request.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//sending a connection request
request.send();
//step 03:once the data  successfully received from the server (200)

request.onload=function(){
    var data=JSON.parse(request.response);
  console.log(data);
//for(var i=0;i<data.length;i++){
//console.log(`Name:${data[i].name} Capital:${data[i].capital}`);
//}
//console.log(`Country Name : ${data[i].name}`); 
//console.log(`Latitude : ${data[i].latlng[0]} Longitude : ${data[i].latlng[1]}`);
//console.log(`currencies : ${data[i].currencies[0].name}`);
//{ console.log(`Flag : ${data[i].flag}`);}
//}
 //print all the countries(250)  name as well as their logitute and latitude values
 //Expected Output:
 //Country name:afganisthan 
 //Latitude:32 
 //Longitude:  33
 //Currencies:

 var reg=data.filter((element)=>element.region==="Asia");
 console.log(reg);

// var res=region.map((element)=>element.name);
 //for (var i=0;i<reg.length;i++){
 // console.log(reg[i].name); }

  let total=reg.reduce((acc,cv)=>acc+cv.population,0);
console.log(total);
}

  
//var final=res.map((ele)=>ele.name);
//console.log(final);


//total population - sum of asia region

//var arr=[11,12,13,14];

//console.log(res);