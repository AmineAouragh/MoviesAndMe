import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textInput} placeholder="Movie Title"/>
        <Button title="Search" onPress={() => {}}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    paddingLeft: 5
  }
})
