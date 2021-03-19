import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Input, TextInput} from 'react-native';
import Field from './Field';
import { Button } from 'react-native-elements';
import {validateFields, hasValidationError} from './Validations';



const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
        state[key] = '';
    });
    
    return state;
};
    
const Form = ({ fields, buttonText, action, afterSubmit}) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState(
      getInitialState(fieldKeys),
    );
    
    const getValues = () => {
      return fieldKeys.map((key) => values[key]);
    };

    const onChangeValue = (key, value) => {
        const newState = { ...values, [key]: value };
        setValues(newState);
    };
    
    const submit = async () => {
      setErrorMessage('');
      setValidationErrors(getInitialState(fieldKeys));

      const errors = validateFields(fields, values);
      if (hasValidationError(errors)) {
        console.log(errors);
        return setValidationErrors(errors);
      }
      try {
        const result = await action(...getValues());
        afterSubmit();
      } catch (e) {
        setErrorMessage(e.message);
      }
    };

    return (
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          {fieldKeys.map((key) => {
            return (
              <Field
                key={key}
                fieldName={key}
                field={fields[key]}
                error={validationErrors[key]}
                onChangeText={onChangeValue}
                value={values[key]}
              />
            );
          })}
          <Button title={buttonText} onPress={submit}/>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
    },
    error: {
      marginBottom: 20,
      height: 17.5,
    },
    Button: {

      marginTop: 30,
      borderRadius: 8,
      width: 250,

    },
  });

export default Form;
