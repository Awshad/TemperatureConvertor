const UNIT = {
    celcius : "°C",
    Fahrenheit : "°F"
};

function convertTemp(temp, unit){
    if(unit == UNIT.celcius){
        return(9/5)*temp+32;
    }else if (unit == UNIT.Fahrenheit){
        return((temp-32)*5)/9;
    }else{
        console.log ("Invalid");
    }
}

function inverseUnit (unit){
    if(unit == UNIT.celcius){
        return  UNIT.Fahrenheit;
    }else if(unit == UNIT.Fahrenheit){
        return  UNIT.celcius;
    }else{
        console.log ("Invalid");
    }
}

function isCold(temp, unit){
    if(unit == UNIT.celcius && temp < 0){
        return true;
    }else if(unit == UNIT.Fahrenheit && temp < 32){
        return true;
    }else{
        return false;
    }
}

export {UNIT,convertTemp,inverseUnit,isCold}