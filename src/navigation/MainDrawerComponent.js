import { createDrawerNavigator } from 'react-navigation-drawer'
import ExpertsStack from './ExpertsStack'
import QuestionStack from './QuestionStack'
import QuestionMessage from '../components/QuestionMessage'

const MainDrawerComponent = createDrawerNavigator({
  Question: {
    screen: QuestionStack,
  },
  Experts: {
    screen: ExpertsStack,
  },
  Message: {
   screen: QuestionMessage,
  },
}, {
	drawerType: 'front'
});


export default MainDrawerComponent
