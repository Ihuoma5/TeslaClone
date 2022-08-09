import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
    <Image 
    source={require('../../assets/images/logo.png')}
    style={styles.logo}
    />
    <Image 
    source={require('../../assets/images/menu.png')}
    style={styles.menu}
    />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain"
    },
    menu: {
        width: 25,
        height: 25,
    },
})