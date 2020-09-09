import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export const Form = ({fields}) => {
    const fieldKeys = Object.keys(fields)

  const displayForm =  fieldKeys.map((key) => {
      const field = fields[key]

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
  })

  return (
      <View>
          {displayForm}
          <Button title="Submit" />
      </View>
  )
};
