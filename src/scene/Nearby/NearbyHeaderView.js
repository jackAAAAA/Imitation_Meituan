/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/
import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, } from 'react-native'
import { Paragraph } from '../../widget/Text'
import screen from '../../common/screen'
import color from '../../widget/color'

type Props = {
    titles: Array<String>,
    selectedIndex: Number,
    onSelected: Function,
}

type State = {

}
class NearbyHeaderView extends PureComponent<Props, State> {

    render() {
        let { titles, onSelected, selectedIndex, } = this.props
        return (
            <View style={styles.container}>
                {titles.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => {
                            onSelected(i)
                        }}
                        style={[styles.item, { backgroundColor: selectedIndex == i ? '#fe566d' : 'white' }]}
                    >
                        <Paragraph style={{ color: selectedIndex == i ? 'white' : '#555555' }}>{title}</Paragraph>
                    </TouchableOpacity>
                ))}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    }

})

export default NearbyHeaderView