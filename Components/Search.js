import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

export default class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
      this.setState({ films: data.results })
    })

  }

  render() {
    return (

      <View style={styles.main_container}>

        <TextInput style={styles.textInput} placeholder="Movie Title"/>
        <Button title="Search" onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
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
