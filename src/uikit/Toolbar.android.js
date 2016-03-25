import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';

class Toolbar extends Component {
    render() {
        return (
            <ToolbarAndroid {...this.props}>
                {this.props.children}
            </ToolbarAndroid>
        );
    }
}

export default Toolbar;