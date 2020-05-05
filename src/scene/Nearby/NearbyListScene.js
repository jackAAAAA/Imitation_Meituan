/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/
import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import NearbyHeaderView from './NearbyHeaderView'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import * as api from '../../api'
import GroupPurchaseCell from '../GroupPurchaseCell/GroupPurchaseCell'


type Props = {

}

type State = {
    typeIndex: Number,
    data: Array<Object>,
    refreshState: Number,

}
class NearbyListScene extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            typeIndex: 0,
            data: [],
            refreshState: RefreshState.Idle,
        }
    }


    componentDidMount() {
        this.requestFirstPage()
    }

    requestData = async () => {
        let dataList = api.recommend.data.map((info) => {
            return {
                id: info.id,
                imageUrl: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}]${info.title}`,
                price: info.price
            }
        })

        dataList.sort(() => (0.5 - Math.random()))
        return dataList
    }


    requestFirstPage = async () => {
        try {
            this.setState({ refreshState: RefreshState.HeaderRefreshing })
            let dataList = await this.requestData()
            this.setState({
                data: dataList,
                refreshState: RefreshState.Idle,
            })
        } catch (error) {
            this.setState({ refreshState: RefreshState.Failure })
            alert('error ' + error)
        }
    }

    requestNextPage = async () => {
        try {
            this.setState({ refreshState: RefreshState.FooterRefreshing })
            let dataList = await this.requestData()
            this.setState({
                data: [...this.state.data, ...dataList],
                refreshState: this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        } catch (error) {
            this.setState({ refreshState: RefreshState.Failure })
            alert('error ' + error)
        }
    }

    renderHeader = () => {
        return (
            <NearbyHeaderView
                titles={this.props.types}
                selectedIndex={this.state.typeIndex}
                onSelected={(index) => {
                    if (index != this.state.typeIndex) {
                        this.setState({ typeIndex: index })
                    }
                    this.requestFirstPage()
                }}
            />
        )
    }

    onCellSelected = (info: Object) => {
        // alert('test ' + JSON.stringify(info))
        this.props.navigation.navigate('GroupPurchaseScene', { info: info })
    }

    renderItem = (info: Object) => (
        <GroupPurchaseCell
            onPress={this.onCellSelected}
            info={info.item}
        />
    )

    render() {
        return (
            <View>
                <RefreshListView
                    ListHeaderComponent={this.renderHeader}

                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}

                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.requestFirstPage}
                    onFooterRefresh={this.requestNextPage}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({

})

export default NearbyListScene