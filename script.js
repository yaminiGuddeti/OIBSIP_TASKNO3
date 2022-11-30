const  calculateTemp = () =>{
    const numberTemp=document.getElementById("temp").value;
    const tempSelected=document.getElementById("select");
    const valueTemp=select.options[tempSelected.selectedIndex].value;
    const cToF =(cel) =>{
    let fahrenheit=Math.round((cel*9/5)+32);
    return fahrenheit;
    }
    const fToC =(fah) =>{
    let celsius=Math.round((fah-32)*5/9);
    return celsius;
    }
    let result;
    if(valueTemp=="cel"){
        result=cToF(numberTemp);
        document.getElementById("resultContainer").innerHTML=result+"°F";
    }
    else{
        result=fToC(numberTemp);
        document.getElementById("resultContainer").innerHTML=result+"°C";
    }
}