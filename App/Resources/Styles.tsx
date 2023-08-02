import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1, // allow the content to grow within the ScrollView
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  titlePrimary: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#C154C1',
  },
  titleSecondary: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  titleLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#D3D3D3',
    marginTop: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cinemaHeader: {
    backgroundColor: '#f0f0f0',
    color: '#C154C1',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  filmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  filmPoster: {
    width: 50,
    height: 80,
  },
  filmBigPoster: {
    width: 150,
    height: 300,
    alignSelf: 'center',
  },
  filmName: {
    fontSize: 16,
    marginLeft: 10,
  },
  filmDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  filmTickets: {
    fontSize: 14,
    lineHeight: 30,
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  filmTicketsAmountValue: {
    width: 80,
    fontSize: 14,
    lineHeight: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  ticketButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketButtonText: {
    fontSize: 14,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    right: 0,
    left: 30,
  },
  ticketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginEnd: 16,
    marginStart: 16,
  },
  ticketIncrementator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginEnd: 16,
  },
  hoursTitle: {
    fontSize: 14,
    lineHeight: 30,
    verticalAlign: 'top',
    fontWeight: 'bold',
    marginStart: 16,
  },
  selectedHour: {
    backgroundColor: '#C154C1',
    width: 60,
    height: 40,
    alignSelf: 'flex-end',
  },
  hour: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 60,
    height: 40,
    alignSelf: 'flex-end',
  },
  selectedHourText: {
    color: 'white',
    lineHeight: 40,
    alignSelf: 'center',
    textAlign: 'center',
  },
  hourText: {
    color: 'black',
    lineHeight: 40,
    alignSelf: 'center',
    textAlign: 'center',
  },
  addToCartContainer: {
    height: 70,
    backgroundColor: 'white',
    left: 0,
    right: 0,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    right: 50,
    backgroundColor: '#C154C1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default styles;
