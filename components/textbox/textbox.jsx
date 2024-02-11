import { Text, TextInput, View } from "react-native";
import {s} from './textbox.style';

export function TextBox({ value, changeValue, unit }){
    return(
        <View style={s.inputWrapper}>
            <TextInput 
                style={s.input} 
                placeholder="Enter data" 
                defaultValue={value.toString()} 
                onChangeText={(text) => changeValue(text)}
            />
            <Text style={s.unit}>{unit}</Text>
        </View>
    )
}