import { createStackNavigator } from 'react-navigation-stack'

import ExpertsScreen from '../components/ExpertsScreen'
import ExpertsAdvice from '../components/ExpertAdvice'

const ExpertsStack = createStackNavigator({
	  ExpertsScreen,
	  ExpertsAdvice,
}, {
  headerMode: 'none',
})

export default ExpertsStack
