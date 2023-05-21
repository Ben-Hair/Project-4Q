function tocm(){

    var base = document.getElementsByName('Input')[0].value;   
    var result = parseInt(base)/10;                                 

    document.getElementsByName('Converted')[0].value = result;
}

function tom(){ //not Tom and Jerry

    var base = document.getElementById('Input')[0].value;
    var result = parseInt(base)/1000;

    document.getElementsByName('Converted')[0].value = result;
}

function tokm(){ 

    var base = document.getElementsByName('Input')[0].value;
    var result = parseInt(base)/1000000;  

    document.getElementsByName('Converted')[0].value = result;
}