import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={this.props.style}>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;