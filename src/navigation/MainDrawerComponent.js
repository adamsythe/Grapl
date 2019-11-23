import { createDrawerNavigator } from 'react-navigation-drawer'
import QuestionScreen from '../components/QuestionScreen'
import ExpertsStack from './ExpertsStack'

const MainDrawerComponent = createDrawerNavigator({
  Question: {
    screen: QuestionScreen,
  },
  Experts: {
    screen: ExpertsStack,
  },
}, {
	drawerType: 'front'
});


export default MainDrawerComponent
