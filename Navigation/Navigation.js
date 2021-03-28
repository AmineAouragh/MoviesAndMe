// A file to manage the navigation between the different views
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

function SearchScreen({ navigation }) {
  return (
    <Search />
  )
}

function FilmDetails({ navigation}) {
  return (
    <FilmDetail />
  )
}

const Stack = createStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Search' component={SearchScreen} />
          <Stack.Screen name='FilmDetails' component={FilmDetails} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
