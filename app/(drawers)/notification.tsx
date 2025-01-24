import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
}

const notificationsData: Notification[] = [
  {
    id: '1',
    title: 'New Message',
    message: 'You have a new message from John Doe.',
    timestamp: new Date(),
  },
  {
    id: '2',
    title: 'Reminder',
    message: 'Don\'t forget your appointment tomorrow.',
    timestamp: new Date(Date.now() - 3600000), // One hour ago
  },
  {
    id: '3',
    title: 'Update Available',
    message: 'A new version of the app is available.',
    timestamp: new Date(Date.now() - 86400000), // One day ago
  },
  // Add more notifications as needed
];

const NotificationItem = ({ item }: { item: Notification }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationTitle}>{item.title}</Text>
    <Text style={styles.notificationMessage}>{item.message}</Text>
    <Text style={styles.notificationTimestamp}>
      {item.timestamp.toLocaleString()} {/* Format the timestamp */}
    </Text>
  </View>
);

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Notifications</Text>
        <FlatList
          data={notificationsData}
          renderItem={NotificationItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#888',
  },
});