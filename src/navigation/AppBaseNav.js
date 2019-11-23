import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import OpenAppTutorial from './OpenAppTutorial'
import MainDrawerComponent from './MainDrawerComponent'


const nav = createSwitchNavigator({
	MainDrawerComponent,
	OpenAppTutorial,
})

const App = createAppContainer(nav)


export default App