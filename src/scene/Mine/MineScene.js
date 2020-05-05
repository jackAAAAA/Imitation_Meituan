/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, RefreshControl, } from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import SpacingView from '../../widget/SpacingView'
import color from '../../widget/color'
import DetailCell from '../../widget/DetailCell'
import { Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen'


type Pros = {

}

type State = {
    isRefreshing: Boolean,

}

class MineScene extends PureComponent<Pros, State> {

    static navigationOptions = ({ navigation }: any) => ({
        headerTitle: (
            <View>
                <Text></Text>
            </View>
        ),
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={() => {
                        alert('test ')
                    }}
                />
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={() => {
                        alert('test ')
                    }}
                />
            </View>

        ),
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0,
        },
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000)
    }


    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={require('../../img/mine/avatar.png')}
                />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Heading2 style={{ color: 'white' }}>jack</Heading2>
                        <Image source={require('../../img/mine/beauty_technician_v15.png')} />
                    </View>
                    <Paragraph style={{ color: 'white', marginTop: 10 }}>个人信息</Paragraph>
                </View>
            </View>

        )
    }

    getDataList() {
        return (
            [
                [
                    { title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png') },
                    { title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png') },
                    { title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png') },
                    { title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png') }
                ],
                [
                    { title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png') },
                    { title: '我的评价', image: require('../../img/mine/icon_mine_comment.png') },
                    { title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png') },
                    { title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png') },
                    { title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png') }
                ],
                [
                    { title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png') },
                    { title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png') }
                ]
            ]
        )
    }

    renderCells() {

        let cells = []
        let dataList = this.getDataList()

        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = (
                    <DetailCell
                        key={data.title}
                        title={data.title}
                        subtitle={data.subtitle}
                        image={data.image}
                    />
                )
                cells.push(cell)
            }
            cells.push(
                <SpacingView key={i} />
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.paper }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.primary }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }
                >
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51d3c6'
    },
    icon: {
        width: 27,
        height: 27,
    },

})

export default MineScene