import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from "react-native-elements"

import { styles } from "../StyledComponents/form"

export const Form = ({fields}) => {
    const fieldKeys = Object.keys(fields)
    const custom = styles

  const displayForm =  fieldKeys.map((key) => {
      const field = fields[key]

      if(!field.inputProps){
          return (
            <View 
                key={key}
                style={{
                    justifyContent: "center",
                }}>
                <Text
                  style={custom.text}
                >
                  {field.label}:
                </Text>
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
              <Text 
                style={custom.text}
              >
                {field.label}:
              </Text>
              <TextInput {...field.inputProps}/>
          </View>
      )
        }
    })

  return (
      <View>
          {displayForm}
          <View
            style={custom.button}>
            <Button 
              title="Submit"
              color="tomato" 
            />
          </View>
      </View>
  )
};
