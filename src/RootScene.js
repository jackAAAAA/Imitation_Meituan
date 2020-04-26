/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation'
import HomeScene from './scene/Home/HomeScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'
import MineScene from './scene/Mine/MineScene'


class RootScene extends PureComponent<{}> {

    render() {
        return (
            <Appcontainer />
        )
    }

}

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeScene,
        navigationOptions: () => ({
            tabBarLabel: '团购',
            tabBarIcon: ({ focused, tintColor }) => (
                <image
                    source={require('./img/tabbar/tabbar_homepage.png')}
                />
            )
        })
    },
    Nearby: {
        screen: NearbyScene,
        navigationOptions: () => ({
            tabBarLabel: '附近',
            tabBarIcon: ({ focused, tintColor }) => (
                <image
                    source={require('./img/tabbar/tabbar_merchant.png')}
                />
            )
        })

    },
    Order: {
        screen: OrderScene,
        navigationOptions: () => ({
            tabBarLabel: '订单',
            tabBarIcon: ({ focused, tintColor }) => (
                <image
                    source={require('./img/tabbar/tabbar_order.png')}
                />
            )
        })
    },
    Mine: {
        screen: MineScene,
        navigationOptions: () => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <image
                    source={require('./img/tabbar/tabbar_mine.png')}
                />
            )
        })
    }
})

const Appcontainer = createAppContainer(Tab)

const styles = StyleSheet.create({

})

export default RootScene