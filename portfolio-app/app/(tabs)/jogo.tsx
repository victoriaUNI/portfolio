import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';

type Attempt = {
  guess: string;
  bulls: number;
  cows: number;
};

export default function JogoSenha() {
  const [secret, setSecret] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // Inicializa o jogo
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Gera um número secreto de 4 dígitos sem repetição
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let newSecret = '';
    
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      newSecret += digits[randomIndex];
      digits.splice(randomIndex, 1);
    }
    
    setSecret(newSecret);
    setAttempts([]);
    setGuess('');
    setGameOver(false);
    setMessage('Tente adivinhar o número de 4 dígitos!');
  };

  const handleGuess = () => {
    if (guess.length !== 4 || !/^\d+$/.test(guess)) {
      Alert.alert('Entrada inválida', 'Por favor, digite um número de 4 dígitos.');
      return;
    }

    if (new Set(guess.split('')).size !== 4) {
      Alert.alert('Entrada inválida', 'Os dígitos não podem se repetir.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        bulls++;
      } else if (secret.includes(guess[i])) {
        cows++;
      }
    }

    const newAttempt = {
      guess,
      bulls,
      cows,
    };

    setAttempts([newAttempt, ...attempts]);
    setGuess('');

    if (bulls === 4) {
      setGameOver(true);
      setMessage(`Parabéns! Você acertou o número ${secret} em ${attempts.length + 1} tentativas!`);
    } else if (attempts.length >= 9) {
      setGameOver(true);
      setMessage(`Game Over! O número correto era ${secret}.`);
    } else {
      setMessage(`Continue tentando! ${10 - (attempts.length + 1)} tentativas restantes.`);
    }
  };

  const showSecret = () => {
    Alert.alert('Número Secreto', `O número secreto é: ${secret}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo Senha (Bulls and Cows)</Text>
      <Text style={styles.instructions}>
        Adivinhe o número de 4 dígitos sem repetição. "Bulls" são dígitos corretos na posição correta. 
        "Cows" são dígitos corretos na posição errada.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={guess}
          onChangeText={setGuess}
          placeholder="Digite seu palpite"
          keyboardType="numeric"
          maxLength={4}
          editable={!gameOver}
        />
        <Button 
          title="Enviar" 
          onPress={handleGuess} 
          disabled={gameOver}
        />
      </View>

      <TouchableOpacity onPress={showSecret} style={styles.secretButton}>
        <Text style={styles.secretButtonText}>Revelar Número Secreto</Text>
      </TouchableOpacity>

      <Text style={styles.message}>{message}</Text>

      {gameOver && (
        <Button 
          title="Jogar Novamente" 
          onPress={startNewGame} 
          color="#4CAF50"
        />
      )}

      <ScrollView style={styles.attemptsContainer}>
        {attempts.map((attempt, index) => (
          <View key={index} style={styles.attempt}>
            <Text style={styles.attemptText}>Palpite: {attempt.guess}</Text>
            <Text style={styles.attemptText}>Bulls: {attempt.bulls}</Text>
            <Text style={styles.attemptText}>Cows: {attempt.cows}</Text>
          </View>
        ))}
      </ScrollView>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  secretButton: {
    padding: 10,
    backgroundColor: '#FF5722',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  secretButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  attemptsContainer: {
    marginTop: 20,
  },
  attempt: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  attemptText: {
    fontSize: 16,
    marginBottom: 5,
  },
});