import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
function Card ({ children }) {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 6
  }
})

export default Card
