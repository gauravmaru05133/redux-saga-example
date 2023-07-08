import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './Stack/AppStack';

export const Routes = ()=>{
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}
