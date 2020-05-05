/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/
import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Heading3 } from '../../widget/Text'
import screen from '../../common/screen'

type Props = {
    onPress?: Function,
    icon: any,
    title: String,

}

type State = {

}
class OrderMenuItem extends PureComponent<Props, State> {

    render() {
        let { onPress, icon, title, } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={icon} resizeMode='contain' style={styles.icon} />
                <Heading3>{title}</Heading3>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 4,
        height: screen.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    },

})

export default OrderMenuItem