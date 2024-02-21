import MainNavigator from './src/navigation/MainNavigator'
import { StatusBar } from 'expo-status-bar'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.brown1} />
      <MainNavigator />
    </>
  )
}

export default App

