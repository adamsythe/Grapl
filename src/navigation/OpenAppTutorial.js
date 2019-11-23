import { createStackNavigator } from 'react-navigation-stack'

import Welcome from '../components/tutorial/Welcome'
import About from '../components/tutorial/About'
import SomeQuestions from '../components/tutorial/SomeQuestions'


const OpenAppTutorial = createStackNavigator({
	  Welcome,
	  About,
	  SomeQuestions,
}, {
  headerMode: 'none',
})

export default OpenAppTutorial
