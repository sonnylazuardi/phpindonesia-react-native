import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/icon-construct.png')}
                    style={styles.imageIcon} />
                <Text style={{textAlign: 'center'}}>
                    Sedang dalam pembangunan
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageIcon: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
});

export default Video;