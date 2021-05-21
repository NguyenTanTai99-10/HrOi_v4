import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import  React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';

import { colors } from './src/res/style/theme';
import { useTranslation } from 'react-i18next';
import RNBootSplash from "react-native-bootsplash";

////////////////////////////////////////////////////////////
import LoginContainer from './src/container/login/LoginContainer';

import HomeContainer from './src/container/home/HomeContainer';
import  DetailContainer from './src/container/home/DetailContainer';





////////////////////////////////////////////////////////////

import  DrawerComponent from './src/component/drawer/DrawerComponent';
import  DrawerConatiner  from './src/container/DrawerContainer/DrawerConatiner';

import RequireLateContainer from './src/container/RequireLate/RequireLateContainer';
import FogetPasswordConatiner from './src/container/FogetPasswordConatiner/FogetPasswordConatiner';
import ChangePasswordContainer from './src/container/ChangePasswordContainer/ChangePasswordContainer';
import AttendanceContainer from './src/container/AttendanceContainer/AttendanceContainer';
import CompanyMemberContainer from './src/container/CompanyMemberContainer/CompanyMemberContainer';
import InfoMemberComponent from './src/component/InfoMemberComponent';
import YourGetPermissionContainer from './src/container/GetPermissionContainer/YourGetPermissionContainer';
import ButtonGetPemissionComponent from './src/component/ButtonGetPemissionComponent';
import CheckGetPemissionContainer from './src/container/GetPermissionContainer/CheckGetPemissionContainer';
import AddRequiesComponent from './src/component/AddRequiesComponent';
import UpdateInfoPersonContainer from './src/container/UpdateInfoPersonContainer/UpdateInfoPersonContainer';
import i18n from './src/Language/LanguageContext';
import SettingLanguage from './src/component/SettingLanguage';
import DatetimePickerRequiest from './src/component/custom/DatetimePickerRequiest';
















//bottom-tab
const Tab = createMaterialBottomTabNavigator();
const bottomTab = () => {
   const { t, i18n } = useTranslation();
   

   //hospital-user
   //CompanyMemberContainer
   return (
      <Tab.Navigator
         initialRouteName="Home"
         activeColor={colors.white}
         inactiveColor={colors.black1}
         shifting={true}
         barStyle={{ backgroundColor: '#bb64a1', height: 48, justifyContent: 'center' }}
         backBehavior="initialRoute">
         <Tab.Screen
            name="Home"
            component={HomeContainer}
            options={{
               tabBarLabel : `${t('Trang chủ')}`,
               tabBarIcon: ({ color }) => <Icon name="home" color={color} size={25} />,
            }}
         />
         <Tab.Screen
            name="AttendanceContainer"
            component={AttendanceContainer}
            options={{
               tabBarLabel: `${t('Điểm danh')}`,
               tabBarIcon: ({ color }) => <Icon name="clock" color={color} size={25} />,
            }}
         />
          <Tab.Screen
            name="CompanyMemberContainer"
            component={CompanyMemberContainer}
            options={{
               tabBarLabel: `${t('Thành viên')}`,
               tabBarIcon: ({ color }) => <Icon name="user" color={color} size={25} />,
            }}
         />
         <Tab.Screen
            name="ButtonGetPemissionComponent"
            component={ButtonGetPemissionComponent}
            options={{
               tabBarLabel: `${t('Xin phép')}`,
               tabBarIcon: ({ color }) => <Icon name="calendar-check" color={color} size={25} />,
            }}
         />
      </Tab.Navigator>
   );
};
//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerConatiner {...props} />}>
         <Drawer.Screen name="Drawer" component={bottomTab} />
      </Drawer.Navigator>
   );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
   useEffect(() => {
      setTimeout(() => {
         RNBootSplash.hide()

         
      }, 1000);
     
   }, [])
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               ...TransitionPresets.SlideFromRightIOS,
            }}>
            
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="Drawers" component={Drawers} />
            
            <Stack.Screen name="RequireLateContainer" component={RequireLateContainer} />
            <Stack.Screen name="FogetPasswordConatiner" component={FogetPasswordConatiner} />
            <Stack.Screen name="ChangePasswordContainer" component={ChangePasswordContainer} />
            <Stack.Screen name="AttendanceContainer" component={AttendanceContainer} />
            <Stack.Screen name="CompanyMemberContainer" component={CompanyMemberContainer} />
            <Stack.Screen name="YourGetPermissionContainer" component={YourGetPermissionContainer} />
            <Stack.Screen name="InfoMemberComponent" component={InfoMemberComponent} />
            <Stack.Screen name="ButtonGetPemissionComponent" component={ButtonGetPemissionComponent} />
            <Stack.Screen name="CheckGetPemissionContainer" component={CheckGetPemissionContainer} />
            <Stack.Screen name="AddRequiesComponent" component={AddRequiesComponent} />
            <Stack.Screen name="UpdateInfoPersonContainer" component={UpdateInfoPersonContainer} />
            <Stack.Screen name="SettingLanguage" component={SettingLanguage} />
            <Stack.Screen name="DatetimePickerRequiest" component={DatetimePickerRequiest} />
            {/* DatetimePickerRequiest */}
            {/* UpdateInfoPersonContainer */}
            {/* ButtonGetPemission */}
            {/* CompanyMemberComponent */}
            {/* AttendanceContainer */}
            {/* ChangePasswordContainer */}
            {/* FogetPasswordConatiner */}
            {/* InfoPerson */}
            {/* RequireLateContainer */}
            {/* GetPermissionContainer */}
            {/* InfoMemberComponent */}
            {/* CheckGetPemissionContainer */}
            {/* AddRequiesComponent */}
            {/* SettingLanguage */}
            
            
            
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;

