import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <View style={{ height: 70, padding: 16, paddingTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, lineHeight: 28, color: 'red' }}>{this.props.title}</Text>
            </View>
        );
    }
}