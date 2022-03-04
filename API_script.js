var request = new XMLHttpRequest();


request.open("Get", "https://www.anapioficeandfire.com/api/books/1");

request.send();

request.onload=function(){
    var data=JSON.parse(request.response);
  console.log(data);

   
    console.log(`Author Name:${data.authors}`);
    
    console.log(`ISBN:${data.isbn}`);
  console.log(`Number of Pages: ${data.numberOfPages}`);
  console.log(`Publisher: ${data.publisher}`);
  
}
