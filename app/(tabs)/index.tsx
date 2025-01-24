
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";

const Tab = createMaterialTopTabNavigator();

export default function index() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
      }}
    >
  
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );

  // function HomeScreen() {
  //   return (
  //     <View>
  //       <Text>this is home screen</Text>
  //     </View>
  //   );
  // }

  // function ProfileScreen() {
  //   return (
  //     <View>
  //       <Text>This is Profie screen</Text>
  //     </View>
  //   );
  // }
}
