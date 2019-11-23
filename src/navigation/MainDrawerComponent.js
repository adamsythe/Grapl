import { createDrawerNavigator } from 'react-navigation-drawer'
import ExpertsStack from './ExpertsStack'
import QuestionStack from './QuestionStack'
import QuestionMessage from '../components/QuestionMessage'
import QuestionSuggestion from '../components/QuestionSuggestion'

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
  Suggestion: {
    screen: QuestionSuggestion,
   },
}, {
	drawerType: 'front'
});


export default MainDrawerComponent
