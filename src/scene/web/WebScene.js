/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, InteractionManager } from 'react-native'
import { WebView } from 'react-native-webview'

type Props = {
    navigation: any,
}

type State = {
    source: Object,
}

class WebScene extends PureComponent<Props, State> {

    static nagationOptions = ({ navigation }: any) => ({
        title: navigation.state.params.title,
    })

    constructor(props: Object) {
        super(props)
        this.state = {
            // source: { uri: this.props.navigation.state.params.url }
        }

        // alert('url ' + this.props.navigation.state.params.url)
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({ title: '加载中' })
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    onLoadEnd(e: any) {
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({ title: e.nativeEvent.title })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webview}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    }

})

export default WebScene