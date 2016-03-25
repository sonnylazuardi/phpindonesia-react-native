import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Toolbar extends Component {
    render() {
        return (
            <View style={[styles.header, this.props.style]}>
                <Image 
                    source={this.props.logo}
                    style={{height: 70, width: 150, marginTop: 10}} 
                    resizeMode={'contain'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
    },
});

export default Toolbar;