import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import hotBackground from './assets/hot.jpeg'
import coldBackground from './assets/cold.jpeg'
import { TextBox } from './components/textbox/textbox';
import { useEffect, useState } from 'react';
import { UNIT,convertTemp,inverseUnit,isCold } from './convertor';

export default function App() {
let [temp, setTemp] = useState(0);
let [curUnit, setcCurUnit] = useState(UNIT.celcius);
let [curBg, setcCurBg] = useState(hotBackground);

useEffect(()=>{
  if(isCold(temp,curUnit)){
    setcCurBg(coldBackground);
  }else{
    setcCurBg(hotBackground);
  }
},[curUnit,temp]);

console.log(temp," ",curUnit);

function changeValue (value) {
  setTemp(value);
}

function changeUnit(){
  if(curUnit == UNIT.celcius){
    setcCurUnit(inverseUnit(UNIT.celcius));
  }else if (curUnit == UNIT.Fahrenheit){
    setcCurUnit(inverseUnit(UNIT.Fahrenheit));
  }
}

  return (
    <>
      <ImageBackground source={curBg} style={{height:"100%"}}>
        <SafeAreaView style={styles.container}>
          <View style={styles.appWrap}>
            <Text style={styles.display}>{convertTemp(temp,curUnit)} {inverseUnit(curUnit)}</Text>
            <TextBox value={temp} changeValue={changeValue} unit={curUnit}/>
            <TouchableOpacity onPress={changeUnit}>
              <Text style={{textAlign:"center"}}>Change to {inverseUnit(curUnit)}</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  appWrap:{
    height:500,
    justifyContent:"space-evenly",
    padding:10
  },
  display:{
    textAlign:"center",
    fontSize:28,
    fontWeight:"bold"
  }
});
