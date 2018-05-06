import { StackNavigator }  from 'react-navigation';
import View1 from './screens/v1.js';
import View2 from './screens/v2.js';
import Listy from './screens/listy.js';
import styles from './style.js';

export default StackNavigator({
    Home:  { screen: View1},
    Settings: {screen: View2},
    Bruj: {screen: Listy},
},
{

 navigationOptions: {

      headerTintColor: '#F2EFEA',
      headerStyle: {
          backgroundColor: '#F15025'
      }
 }
});
