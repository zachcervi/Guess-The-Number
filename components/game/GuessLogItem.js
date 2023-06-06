import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function GuessLogItem ({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: '100%'
  },
  itemText: {
    fontFamily: 'open-sans'
  }
})

export default GuessLogItem
