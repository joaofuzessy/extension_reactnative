import { Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LocationScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons size={310} name="location-sharp" style={styles.headerIcon} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nossa Localização</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle">Endereço</ThemedText>
        <ThemedText>
          AF Consultoria{'\n'}
          Rua Fictícia, 123{'\n'}
          Bairro Central{'\n'}
          São Paulo, SP{'\n'}
          CEP 00000-000
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle">Telefone</ThemedText>
        <ThemedText>(11) 1234-5678</ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle">Horário de Funcionamento</ThemedText>
        <ThemedText>
          Segunda a Sexta: 9:00 - 18:00{'\n'}
          Sábado e Domingo: Fechado
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.mapContainer}>
        <Image
          source={require('@/assets/images/static-map.png')} // Atualize com o caminho da imagem do mapa
          style={styles.mapImage}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mapContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  mapImage: {
    width: '90%',
    height: 200,
    borderRadius: 8,
  },
});