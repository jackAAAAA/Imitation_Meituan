/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

type Pros = {

}

type State = {

}

class NearbyScene extends PureComponent<Pros, State> {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>NearbyScene</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

})

export default NearbyScene