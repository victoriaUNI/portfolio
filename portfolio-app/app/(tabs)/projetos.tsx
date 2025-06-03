import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>
      
      <View style={styles.project}>
        <Text style={styles.projectTitle}>Funny</Text>
        <Text style={styles.projectDescription}>
          Aplicativo para auxiliar professores na educação de crianças autistas.
        </Text>
      </View>

      <View style={styles.project}>
        <Text style={styles.projectTitle}>Serv</Text>
        <Text style={styles.projectDescription}>
          Plataforma de prestação de serviços.
        </Text>
      </View>
      
      <View style={styles.project}>
        <Text style={styles.projectTitle}>Numeros aleatorios</Text>
        <Text style={styles.projectDescription}>
          um aplicativo em React Native em que o usuário pode digitar um valor mínimo e máximo para um intervalo de números aleatórios que o programa pode gerar, e um botão que ao ser clicado, irá exibir um número aleatório dentro do intervalo configurado pelo usuário.
        </Text>
      </View>
      
      <View style={styles.project}>
        <Text style={styles.projectTitle}>Cartão de visitas</Text>
        <Text style={styles.projectDescription}>
          Aplicativo que serve como cartão de visita
        </Text>
      </View>
    </ScrollView>
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
  project: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
  },
});