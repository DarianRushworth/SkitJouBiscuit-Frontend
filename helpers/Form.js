import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from "react-native-elements"
import { useDispatch } from "react-redux"

import { sendUserInfo } from "../store/user/actions"
import { hasValidationError, validateFields } from "./Validations"
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
  const [errorMessage, setErrorMessage] = useState("")
  const [validationErrors, setValidationErrors] = useState(
    initialState(fieldKeys),
  )
  
  const custom = styles

  const changeValues = (key, value) => {
    const newState = {...values, [key]: value}
    setValues(newState)

    if (validationErrors[key]) {
      const newErrors = { ...validationErrors, [key]: "" }
      setValidationErrors(newErrors)
    }
  } 

  const displayForm =  fieldKeys.map((key) => {
      const field = fields[key]
      const fieldError = validationErrors[key]

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
              <Text
                style={custom.validation}>
                {fieldError}
              </Text>
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
                value={owner[key]}
                onPress={() => {
                  if(!owner){
                    setOwner(true)
                  } else if(owner){
                    setOwner(false)
                  }
                  changeValues(key, owner)}}
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
              onChangeText={(text) => changeValues(key, text)}
              />
              <Text
                style={custom.validation}>
                {fieldError}
              </Text>
          </View>
      )
        }
    })
    
    function sendInfo(data){
      setErrorMessage("")
      setValidationErrors(initialState(fieldKeys))

      const errors = validateFields(fields, values)
      if(hasValidationError(errors)){
        return setValidationErrors(errors)
      }

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
