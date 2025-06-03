import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Residencia Onboard</Text>
        <Text style={styles.itemSubtitle}>Porto Digital - 2023-Presente</Text>
        <Text style={styles.itemDescription}>
          A Residência Onboard faz parte do programa Embarque Digital e é promovida pelo Porto Digital em parceria com a UNICAP, onde durante os períodos do curso de Sistemas Para Internet são colocados desafios por empresas parceiras do Porto Digital, que orientam a construção e desenvolvimento de projetos.
        </Text>
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Desenvolvedora Backend</Text>
        <Text style={styles.itemSubtitle}>ABA GLOBAL EDUCATION - 2023</Text>
        <Text style={styles.itemDescription}>
          Desenvolvimento de uma api para acompanhamento dos alunos da escola.
        </Text>
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
  item: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
});