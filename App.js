import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionar() {
    const nome = texto.trim();
    if (nome === '') return;

    // spread cria um novo array com os itens antigos + o novo (sem usar .push())
    setItens([...itens, { id: Date.now().toString(), nome }]);
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item"
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionar}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#2e7d32',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  textoItem: {
    fontSize: 18,
  },
});
