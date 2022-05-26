import { StyleSheet } from "react-native";

export const colores = {
    primary: '#007f5f',
    primary1: '#007f5f',
    primary2: '#2b9348',
    primary3: '#55a630',
    primary4: '#80b918',
    primary5: '#aacc00',
    primary6: '#bfd200',
    primary7: '#d4d700',
    primary8: '#dddf00',
    primary9: '#eeef20',
    primary10: '#ffff3f',
}
export const style = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer:{
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width:150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 50,
        marginHorizontal: 50,

    },
    menuLiga:{
        marginVertical: 10
    },
    menuTexto:{
        fontSize: 20
    }

});