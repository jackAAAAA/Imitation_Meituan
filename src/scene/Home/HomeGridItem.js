/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'

type Props = {

}

type State = {

}

class HomeGridItem extends PureComponent<Props, State> {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Text style={{ fontSize: 15, color: 'red', marginBottom: 10 }}>吃吃喝喝</Text>
                    <Text style={{ fontSize: 14, color: '#333333' }}>年底聚会</Text>
                </View>
                <Image style={styles.icon} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - StyleSheet.hairlineWidth,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
        backgroundColor: 'blue',
        marginLeft: 10,
    },

})

export default HomeGridItem