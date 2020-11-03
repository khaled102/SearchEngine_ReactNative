import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    header_view: {
        backgroundColor:'transparent', 
        flexDirection: 'row',
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 16,
        // flex:2
    },
    header_text: {
        color: '#000000',
        fontSize: 18,
        flex : 0.6
    },
    menu_icon: {
        marginRight: 'auto',
        marginLeft: 16,
        flex: 0.1
    }
});

export default styles;