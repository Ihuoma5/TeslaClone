import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={cars}
      renderItem={({item}) => <CarItem car={item}/>}
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarsList

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
})