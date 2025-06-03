import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Sistemas para internet</Text>
        <Text style={styles.itemSubtitle}>UNICAP - 2023-2025</Text>
        <Text style={styles.itemDescription}>
          Foco em desenvolvimento de software web e mobile.
        </Text>
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Desenvolvimento de sistemas</Text>
        <Text style={styles.itemSubtitle}>ETE Porto Digital - 2022-2023</Text>
        <Text style={styles.itemDescription}>
          Aprendizado de desenvolvimento de software backend e frontend.
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