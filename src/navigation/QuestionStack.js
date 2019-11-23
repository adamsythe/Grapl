import { createStackNavigator } from 'react-navigation-stack'

import QuestionScreen from '../components/QuestionScreen'
import AnsweredQ from '../components/AnsweredQ'

const QuestionStack = createStackNavigator({
	  QuestionScreen,
	  AnsweredQ,
}, {
  headerMode: 'none',
})

export default QuestionStack
