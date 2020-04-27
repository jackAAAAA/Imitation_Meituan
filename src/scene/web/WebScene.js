/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

type Props = {

}

type State = {

}

class WebScene extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        alert('url ' + this.props.navigation.state.params.url)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Web</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

})

export default WebScene