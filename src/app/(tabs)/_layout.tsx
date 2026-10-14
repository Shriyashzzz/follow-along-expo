import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
        tabBarLabelStyle: {
          color: "gray",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={focused ? color : "gray"}
                size={24}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={
                  focused ? "information-circle-sharp" : "information-circle"
                }
                color={focused ? color : "gray"}
                size={24}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
