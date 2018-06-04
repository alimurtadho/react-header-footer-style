import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Header extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <View style={{ height: 70, padding: 16, paddingTop: 30, backgroundColor: this.props.backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, lineHeight: 28, color: 'white' }}>{this.props.title}</Text>
            </View>
        );
    }
}
// const Header = (judul, warna) => {
//     return (
//         <View style={{ height: 70, padding: 16, paddingTop: 30, backgroundColor: warna, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 18, lineHeight: 28, color: 'white' }}>{judul}</Text>
//         </View>
//     );
// export default Header;