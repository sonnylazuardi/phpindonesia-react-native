import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import Button from './uikit/Button';
import ViewPager from 'react-native-viewpager';
const SLIDES = [
    {type: 'home', image: require('../img/splash-1.jpg')},
    {type: 'page', image: require('../img/icon-event.png'), text: 'Lihat event terbaru dari komunitas PHP Indonesia, mencakup konferensi, seminar, dan workshop'},
    {type: 'page', image: require('../img/icon-gallery.png'), text: 'Gambar gambar dari acara komunitas PHP Indonesia yang seru abis dan kece kece'},
    {type: 'page', image: require('../img/icon-watch.png'), text: 'Tonton video tutorial, tech talk, atau informasi terbaru dari teknologi terkini'},
    {type: 'page', image: require('../img/icon-chat.png'), text: 'Saling sapa satu dengan yang lain untuk berdiskusi atau bertanya'},
];

class Intro extends Component {
    constructor(props, context) {
        super(props, context);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(SLIDES),
        }
    }
    onEnterApp() {
        this.props.navigator.resetTo({
            name: 'home',
        });
    }
    _renderPage(data, pageID) {
        return (
            <View style={styles.pageStyle}>
                {data.type === 'home' ?
                    <Image source={data.image} style={styles.imageFullWidth} resizeMode={'cover'}/>
                    :
                    <View>
                        <Image source={data.image} style={styles.imageIcon} resizeMode={'contain'}/>
                        <Text style={styles.textCaption}>{data.text}</Text>
                    </View>}
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ViewPager
                    style={styles.viewPager}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true} />
                <View style={styles.buttonWrap}>
                    <Button onPress={this.onEnterApp.bind(this)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Masuk Aplikasi
                            </Text>
                        </View>
                    </Button>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    viewPager: {
        flex: 1
    },
    pageStyle: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    imageFullWidth: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height
    },
    imageIcon: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    textCaption: {
        fontSize: 13,
        marginTop: 30,
        margin: 30,
        textAlign: 'center'
    },
    buttonWrap: {
        position: 'absolute', 
        bottom: 45, 
        left: 0, 
        right: 0,
    },
    button: {
        backgroundColor: '#569080', 
        borderRadius: 50, 
        margin: 23, 
        padding: 20, 
        borderWidth: 0
    },
    buttonText: {
        color: '#fff', 
        fontSize: 18,
        textAlign: 'center'
    }
});

export default Intro;