import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Input, TextInput} from 'react-native';
import Field from './Field';



const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
        state[key] = '';
    });
    
    return state;
};
    
const Form = ({ fields }) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
    const buttonText = 'Valider'
    
    const onChangeValue = (key, value) => {
        const newState = { ...values, [key]: value };
        setValues(newState);
    };
    
    return (
        <View style={styles.container}>
          {fieldKeys.map((key) => {
            return (
              <Field
                key={key}
                fieldName={key}
                field={fields[key]}
                
                onChangeText={onChangeValue}
                value={values[key]}
              />
            );
          })}
          <Button title={buttonText}/>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    error: {
      marginBottom: 20,
      height: 17.5,
    },
  });

export default Form;

/*const FormData = {
    name: string,
    email: string,
    password: string
}*/
//https://dev.to/elaziziyoussouf/forms-in-react-native-the-right-way-4d46
//const { handleSubmit, register, setValue, errors } = useForm<FormData>()
