import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>
        Sou uma desenvolvedora de software com foco em programação backend e uma artista 3D apaixonada pela tecnologia.
      </Text>
      
      <Text style={styles.subtitle}>Habilidades</Text>
      <View style={styles.techList}>
        <Text style={styles.techItem}>- React Native</Text>
        <Text style={styles.techItem}>- Python</Text>
        <Text style={styles.techItem}>- Java</Text>
        <Text style={styles.techItem}>- Spring boot</Text>
        <Text style={styles.techItem}>- Django</Text>
        <Text style={styles.techItem}>- SQL</Text>
        <Text style={styles.techItem}>- Robotica</Text>
        <Text style={styles.techItem}>- Blender</Text>
        <Text style={styles.techItem}>- Figma</Text>
        <Text style={styles.techItem}>- IOT</Text>
        <Text style={styles.techItem}>- Coreographe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  techList: {
    marginLeft: 20,
  },
  techItem: {
    fontSize: 16,
    lineHeight: 24,
  },
});