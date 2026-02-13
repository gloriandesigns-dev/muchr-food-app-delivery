import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { BlurView } from 'expo-blur';
import { ThemedText } from '../../components/ThemedText';

const { width } = Dimensions.get('window');

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.floatingTabBar,
        tabBarBackground: () => (
            <BlurView intensity={30} tint="dark" style={StyleSheet.absoluteFill} />
        ),
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#999',
        tabBarItemStyle: styles.tabItemContainer,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Delivery',
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabItem}>
              <Ionicons name={focused ? "bicycle" : "bicycle-outline"} size={24} color={color} />
              <ThemedText style={[styles.tabLabel, { color }]} fontFamily="dmsans" weight="medium">Delivery</ThemedText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="under25"
        options={{
          title: 'Under $25',
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabItem}>
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                 <MaterialIcons name="attach-money" size={20} color={focused ? Colors.white : color} />
              </View>
              <ThemedText style={[styles.tabLabel, { color }]} fontFamily="dmsans" weight="medium">Under $25</ThemedText>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="dining"
        options={{
          title: 'Dining',
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabItem}>
              <Ionicons name={focused ? "restaurant" : "restaurant-outline"} size={24} color={color} />
              <ThemedText style={[styles.tabLabel, { color }]} fontFamily="dmsans" weight="medium">Dining</ThemedText>
            </View>
          ),
        }}
      />
      
      <Tabs.Screen
        name="live"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  floatingTabBar: {
    position: 'absolute',
    bottom: 20,
    left: width * 0.15, // Center horizontally with 15% margin on each side
    width: width * 0.7, // 70% width
    height: 65,
    borderRadius: 32.5, // Pill shape
    backgroundColor: 'rgba(30,30,30,0.7)', // Slightly transparent dark bg
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    overflow: 'hidden',
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly', // Even spacing
  },
  tabItemContainer: {
    height: 65,
    padding: 0,
    flex: 1, // Ensure items take equal space
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: '100%',
    width: '100%',
  },
  tabLabel: {
    fontSize: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    width: 32,
    height: 24, 
    marginBottom: -2,
    marginTop: -2,
  },
});
