import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class Search extends Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <TextInput style={styles.textInput} placeholder="Movie Title"/>
        <Button title="Search" onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 15,
    marginRight: 5,
    height: 50,
    paddingLeft: 5
  }
})
