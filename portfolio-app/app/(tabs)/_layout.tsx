import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="experiencia-academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => <MaterialIcons name="school" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="experiencia-profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => <MaterialIcons name="work" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <MaterialIcons name="folder" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="jogo"
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color }) => <MaterialIcons name="games" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}