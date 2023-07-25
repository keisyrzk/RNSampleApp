import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
     flex: 1,
   },
   content: {
     flex: 1,
     marginTop: 10
   },
    titleContainer: {
     width: "100%",
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 20,
   },
    titlePrimary: {
     fontSize: 30,
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 20,
     color: "#C154C1"
    },
    titleSecondary: {
     fontSize: 30,
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 20,
     color: 'black'
    },
    titleLine: {
     width: "90%",
     height: 1,
     backgroundColor: "#D3D3D3",
     marginTop: 5,
     },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    cinemaHeader: {
      backgroundColor: '#f0f0f0',
      color: "#C154C1",
      fontSize: 18,
      padding: 10,
      fontWeight: 'bold'
    },
    filmRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    filmPoster: {
      width: 50,
      height: 80
    },
    filmName: {
      fontSize: 16,
      marginLeft: 10
    },
    separatorLine: {
      height: 1,
      backgroundColor: "#D3D3D3",
      position: 'absolute',
      right: 0,
      left: 30,
    }
  });

  export default styles;