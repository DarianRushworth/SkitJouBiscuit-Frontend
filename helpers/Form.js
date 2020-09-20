import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from "react-native-elements"
import { useDispatch } from "react-redux"

import { sendUserInfo } from "../store/user/actions"
import { styles } from "../StyledComponents/form"

export const Form = ({fields}) => {
  const dispatch = useDispatch()
  
  const fieldKeys = Object.keys(fields)

  const initialState = (fieldKeys) => {
    const state = {}
    fieldKeys.forEach((key) => {
      state[key] = ""
    })
    return state
  }

  const [values, setValues] = useState(initialState(fieldKeys))
  const [owner, setOwner] = useState(false)
  
  const custom = styles

  const changeValues = (key, value) => {
    const newState = {...values, [key]: value}
    setValues(newState)
    if(!owner){
    setOwner(true)
    } else {
      setOwner(false)
    }
  } 

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
              <TextInput 
                value={values[key]}
                onChangeText={(text) => changeValues(key, text)}
              />
            </View>
          )
      } else if(field.inputProps.checkbox){
        return (
          <View 
            key={key}
            style={{
                justifyContent: "center",
          }}>
          <Text
            style={custom.text}>
            {field.label}:
          </Text>
              <CheckBox
                containerStyle={custom.checkbox}
                center
                checked={owner}
                checkedColor="tomato"
                iconRight={true}
                title="Yes I am"
                value={values[key]}
                onPress={(text) => changeValues(key, text)}
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
              <TextInput {...field.inputProps}
              value={values[key]}
              onChangeText={(text) => changeValues(key, text)}/>
          </View>
      )
        }
    })
    
    function sendInfo(data){
      dispatch(sendUserInfo(data))

      setValues("")
      setOwner(false)
    }
    
  return (
      <View>
          {displayForm}
          <View
            style={custom.button}>
            <Button 
              title="Submit"
              color="tomato"
              onPress={() => sendInfo(values)} 
            />
          </View>
      </View>
  )
};
