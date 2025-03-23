import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [state, setState] = useState(0)
    const handleClick = () => {
        setState(prev => prev + 1)

    }
    return (
        <View style={styles.main}>
            <Button title='Click me' testID='click-btn' onPress={handleClick} />
            <Text>{state}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})