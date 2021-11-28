import React from 'react'
import { View, Text } from 'react-native'
import Banner from './Banner'
import Header from './Header'

export default function Home() {
    return (
        <View>
            <View>
                <Header />
            </View>
            <View>
                <Banner />
            </View>
            <View style={{width: 300, height: 1, backgroundColor: '#ccc', marginTop: 40, marginHorizontal: 20}}></View>
        </View>
    )
}
