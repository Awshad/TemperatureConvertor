import { Text, TextInput } from "react-native";
import {s} from './textbox.style';

export function TextBox(props){
    return(
        <>
        <TextInput style={s.input} placeholder="Enter data" defaultValue={props.value.toString()} onChangeText={props.onChangeText}/>
        </>
    )
}