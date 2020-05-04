/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { Heading3, Paragraph, } from '../../widget/Text'
import color from '../../widget/color'
import screen from '../../common/screen'


type Pros = {

}

type State = {

}

class NearbyScene extends PureComponent<Pros, State> {

    static navigationOptions = ({ navigation }: any) => ({
        // headerStyle: { backgroundColor: color.primary },
        headerTitle: (
            <View>
                <Text></Text>
            </View>
        ),
        headerLeft: (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Image
                    style={{ width: 13, height: 16, marginRight: 5 }}
                    source={require('../../img/public/icon_food_merchant_address.png')}
                />
                <Heading3>深圳  动物园</Heading3>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        )
    })

    render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部',]
        return (

            <ScrollableTabView>
                {titles.map((title, i) => (
                    <Text tabLabel={title}>{title}</Text>
                ))}
            </ScrollableTabView>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //     {/* <Text style={{ fontSize: 30 }}>Nearby</Text> */}
            // </View>

        )
    }

}

const styles = StyleSheet.create({
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },

})

export default NearbyScene