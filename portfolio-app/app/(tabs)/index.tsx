import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/foto.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Victoria Luiza</Text>
      <Text style={styles.subtitle}>Desenvolvedora De Software</Text>
      
      <View style={styles.linksContainer}>
        <Link href="/(tabs)/sobre" style={styles.link}>Sobre Mim</Link>
        <Link href="/(tabs)/experiencia-academica" style={styles.link}>Experiência Acadêmica</Link>
        <Link href="/(tabs)/experiencia-profissional" style={styles.link}>Experiência Profissional</Link>
        <Link href="/(tabs)/projetos" style={styles.link}>Projetos</Link>
        <Link href="/(tabs)/jogo" style={styles.link}>Jogar Senha</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  linksContainer: {
    width: '100%',
  },
  link: {
    padding: 15,
    backgroundColor: '#6200ee',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
});