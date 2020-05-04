/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import * as api from '../../api'
import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import SpacingView from '../../widget/SpacingView'
import { Heading3 } from '../../widget/Text'
import GroupPurchaseCell from '../../scene/GroupPurchaseCell/GroupPurchaseCell'

type Props = {

}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: Boolean,
    // refreshing: boolean,
}

class HomeScene extends PureComponent<Props, State> {

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

    constructor(props: Props) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }

    }

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        this.setState({ refreshing: true })
        this.requestDiscount()
        this.requestRecommend()
        // try {
        //     let response = await fetch(api.discount)
        //     let json = await response.json()
        //     this.setState({ discounts: json.data })
        //     alert('test ' + JSON.stringify(json.data))
        // } catch (error) {
        //     alert('error ' + error)
        // }
    }

    requestRecommend = async () => {
        try {
            let dataList = api.recommend.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({ refreshing: false })
            alert('error ' + error)
        }
    }


    requestDiscount = async () => {
        try {

            let json = api.discount
            this.setState({ discounts: json.data })
            // alert('test ' + JSON.stringify(json.data))
        } catch (error) {
            alert('error ' + error)
        }
    }

    onGridSelected = (index) => {
        let discount = this.state.discounts[index]
        // alert('discount ' + JSON.stringify(discount))
        if (discount.type == 1) {
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('WebScene', { url: url })
        }
    }

    renderHeader = () => {
        return (
            <View>
                <HomeMenuView
                    menuInfos={api.menuInfos}
                    onMenuSelected={(index) => {
                        alert('test ' + index)
                    }}
                />
                <SpacingView />
                <HomeGridView infos={this.state.discounts} onGridSelected={this.onGridSelected} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }

    onCellSelected = (info: Object) => {
        // alert('test ' + JSON.stringify(info))
        this.props.navigation.navigate('GroupPurchaseScene', {info: info})
    }

    renderItem = (info: Object) => (
        <GroupPurchaseCell
            onPress={this.onCellSelected}
            info={info.item}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={() => this.renderHeader()}
                    data={this.state.dataList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.title}
                    // onRefresh={this.requestData}
                    onRefresh={
                        this.requestData
                    }
                    refreshing={this.state.refreshing}

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
    },
    recommendHeader: {
        height: 35,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white',
    },
})

export default HomeScene