import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import hot from './assets/hot.jpeg'
import { TextBox } from './components/textbox/textbox';
import { useState } from 'react';

export default function App() {
const [temp, setTemp] = useState(10);

const changeValue = (data) => {
  setTemp(data);
}

  return (
    <>
      <ImageBackground source={hot} style={{height:"100%"}}>
        <SafeAreaView style={styles.container}>
          <View style={styles.appWrap}>
            <Text style={{textAlign:"center"}}>{temp}</Text>
            <TextBox value={temp} onChangeText={changeValue}/>
            <Text style={{textAlign:"center"}}>Hello</Text>
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
  }
});
