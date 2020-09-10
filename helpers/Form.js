import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from "react-native-elements"

export const Form = ({fields}) => {
    const fieldKeys = Object.keys(fields)

  const displayForm =  fieldKeys.map((key) => {
      const field = fields[key]

      if(!field.inputProps){
          return (
            <View 
                key={key}
                style={{
                    justifyContent: "center",
                }}>
                <Text>{field.label}:</Text>
              <TextInput />
            </View>
          )
      } else if(field.inputProps.checkbox){
        return (
          <View 
                key={key}
                style={{
                    justifyContent: "center",
                }}>
              <CheckBox
                title={field.label}
              />
            </View>
        )
      } else {
      return (
          <View 
            key={key}
            style={{
                justifyContent: "center",
            }}>
              <Text>{field.label}:</Text>
              <TextInput {...field.inputProps}/>
          </View>
      )
        }
    })

  return (
      <View>
          {displayForm}
          <Button title="Submit" />
      </View>
  )
};
