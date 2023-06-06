import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import { useState } from 'react'

function StartGameScreen ({ onPickNumber }) {
  const [enteredNumber, setEnterNumber] = useState('')

  function numberInputHandler (enteredText) {
    setEnterNumber(enteredText)
  }

  function resetInputHandler () {
    setEnterNumber('')
  }

  function confirmInputHandler () {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
    }
    onPickNumber(chosenNumber)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 6
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  numberInput: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    height: 50,
    width: 50,
    marginVertical: 8,
    textAlign: 'center'
  }
})

export default StartGameScreen
