import { createDrawerNavigator } from 'react-navigation-drawer'
import ExpertsStack from './ExpertsStack'
import QuestionStack from './QuestionStack'

const MainDrawerComponent = createDrawerNavigator({
  Question: {
    screen: QuestionStack,
  },
  Experts: {
    screen: ExpertsStack,
  },
}, {
	drawerType: 'front'
});


export default MainDrawerComponent
