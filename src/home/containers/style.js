import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FDFDFD', 
        height:'100%',
    },
    card_container: {
        width: '90%',
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:'center',
        justifyContent: 'space-between',
    },
    card_view: {
        width: 170,
        height: 200,
        borderColor: '#5dbcd2',
        borderWidth: 0.5,
        borderRadius: 3.3,
        marginTop: 16
    },
    product_image: {
        width: '100%',
        height: 100
    },
    product_text: {
        color: '#000000',
        fontSize: 18,
        marginLeft: 16,
        marginTop: 5
    }
});

export default styles;