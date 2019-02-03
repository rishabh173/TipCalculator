function tipCalculator(){
    var oops;
    if(document.getElementById('billAmount').value===" " || document.getElementById('Service').value==0){
        window.alert('Please enter some values to get this baby up and running');
        return;
    }
    
   
    if(document.getElementById('numPeople').value=="" || document.getElementById('numPeople').value==1){
        document.getElementById('each').style.display="none";
        oops=document.getElementById('billAmount').value*document.getElementById('Service').value;
    }
    else{
        document.getElementById('each').style.display="block";
        oops=document.getElementById('billAmount').value*document.getElementById('Service').value/document.getElementById('numPeople').value;
    }

    document.getElementById('totalTip').style.display="block";
    document.getElementById('tip').innerHTML=oops;

}

document.getElementById('totalTip').style.display="none";

document.getElementById('Calculate').onclick=function() {tipCalculator();};

