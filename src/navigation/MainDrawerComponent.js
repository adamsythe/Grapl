import { createDrawerNavigator } from 'react-navigation-drawer'
import ExpertsStack from './ExpertsStack'
import QuestionStack from './QuestionStack'
import QuestionMessage from '../components/QuestionMessage'
import QuestionSuggestion from '../components/QuestionSuggestion'
import Resources from '../components/Resources'
import FavoriteAnswers from '../components/FavoriteAnswers'

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
  Resources: {
    screen: Resources,
  },
  ['Favourite answers']: {
    screen: FavoriteAnswers,
  },
}, {
	drawerType: 'front'
});


export default MainDrawerComponent
