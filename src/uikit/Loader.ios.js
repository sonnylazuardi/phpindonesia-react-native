import React, {
    Component,
    ActivityIndicatorIOS
} from 'react-native';

class Loader extends Component {
    render() {
        return (
            <ActivityIndicatorIOS color="#999" />
        );
    }
}

export default Loader;