import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/office-building.png')} // Atualize com uma imagem do escritório
          style={styles.officeImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo à AF Consultoria</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Sobre Nós</ThemedText>
        <ThemedText>
          A **AF Consultoria** é um escritório de advocacia dedicado a oferecer serviços de alta qualidade nas áreas de Direito Empresarial, Direito Civil e Direito Trabalhista. Nossa equipe é composta por advogados experientes, comprometidos em fornecer soluções jurídicas eficazes e personalizadas para nossos clientes.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Nossos Valores</ThemedText>
        <ThemedText>
          Na **AF Consultoria**, valorizamos a ética, a transparência e a dedicação. Nosso objetivo é construir relacionamentos de confiança e duradouros com nossos clientes, sempre mantendo a integridade e o profissionalismo em cada atendimento.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Serviços Oferecidos</ThemedText>
        <ThemedText>- Direito Empresarial</ThemedText>
        <ThemedText>- Direito Civil</ThemedText>
        <ThemedText>- Direito Trabalhista</ThemedText>
        <ThemedText>
          Nosso escritório também oferece atendimento pro bono para casos que atendam a critérios específicos de elegibilidade.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Entre em Contato</ThemedText>
        <ThemedText>
          Para mais informações, entre em contato conosco pelo telefone (11) 1234-5678 ou envie um e-mail para contato@afconsultoria.com.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 8,
  },
  officeImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});