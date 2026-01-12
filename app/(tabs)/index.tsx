import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Logo and Branding */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={styles.logoMP}>MP</Text>
          <Text style={styles.logoGYMBOX}>GYMBOX</Text>
        </Text>
        <Text style={styles.tagline}>Your Ultimate Boxing Companion</Text>
      </View>

      {/* Explore Section */}
      <Text style={styles.sectionTitle}>Explore MPGYMBOX</Text>

      {/* Category Cards Grid */}
      <View style={styles.cardsGrid}>
        <View style={styles.cardRow}>
          {/* Tutorials Card */}
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, styles.orangeIcon]}>
              <Text style={styles.iconText}>🎥</Text>
            </View>
            <Text style={styles.cardTitle}>Tutorials</Text>
            <Text style={styles.cardSubtitle}>Step-by-step video guides</Text>
          </TouchableOpacity>

          {/* Techniques Card */}
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, styles.orangeIcon]}>
              <Text style={styles.iconText}>📖</Text>
            </View>
            <Text style={styles.cardTitle}>Techniques</Text>
            <Text style={styles.cardSubtitle}>Master boxing moves</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          {/* Diet Card */}
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, styles.pinkIcon]}>
              <Text style={styles.iconText}>🍎</Text>
            </View>
            <Text style={styles.cardTitle}>Diet</Text>
            <Text style={styles.cardSubtitle}>Nutrition & meal plans</Text>
          </TouchableOpacity>

          {/* Fitness Card */}
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, styles.purpleIcon]}>
              <Text style={styles.iconText}>💪</Text>
            </View>
            <Text style={styles.cardTitle}>Fitness</Text>
            <Text style={styles.cardSubtitle}>Training programs</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Start Section */}
      <View style={styles.quickStartSection}>
        <View style={styles.quickStartHeader}>
          <View style={styles.quickStartIcon}>
            <Text style={styles.quickStartIconText}>⏱️</Text>
          </View>
          <View>
            <Text style={styles.quickStartTitle}>Quick Start</Text>
            <Text style={styles.quickStartSubtitle}>Begin your workout</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>▶  Start Timer Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoMP: {
    color: '#FF6B2C',
  },
  logoGYMBOX: {
    color: '#FFFFFF',
  },
  tagline: {
    fontSize: 16,
    color: '#999999',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardsGrid: {
    marginBottom: 30,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  orangeIcon: {
    backgroundColor: '#FF6B2C',
  },
  pinkIcon: {
    backgroundColor: '#E91E63',
  },
  purpleIcon: {
    backgroundColor: '#9C27B0',
  },
  iconText: {
    fontSize: 28,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  quickStartSection: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  quickStartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quickStartIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FF6B2C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  quickStartIconText: {
    fontSize: 24,
  },
  quickStartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  quickStartSubtitle: {
    fontSize: 14,
    color: '#999999',
  },
  startButton: {
    backgroundColor: '#FF6B2C',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
