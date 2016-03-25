import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={this.props.style}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default Button;