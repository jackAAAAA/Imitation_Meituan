/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import * as api from '../../api'
import HomeMenuView from './HomeMenuView'

type Pros = {

}

type State = {

}

class HomeScene extends PureComponent<Pros, State> {

    static navigationOptions = () => ({
        headerStyle: { backgroundColor: color.primary },
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
                <Text style={{ fontSize: 14 }}>搜索</Text>
            </TouchableOpacity>
        ),
        headerLeft: (
            <NavigationItem
                title='定位'
                titleStyle={{ color: 'white' }}
                onPress={() => {

                }}
            />
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                onPress={() => {

                }}
            />
        )

    })

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HomeMenuView
                    menuInfos={api.menuInfos}
                    onMenuSelected={(index) => {
                        alert('test ' + index)
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.7,
        height: 30,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
})

export default HomeScene