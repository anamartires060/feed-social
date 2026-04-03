import { View, ScrollView } from "react-native";
import { styles } from "@/assets/styles/user.styles";

export default function UserScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Capa + Avatar */}
      <View style={styles.cover}>
        <View style={styles.avatar} />
      </View>

      {/* Info */}
      <View style={styles.info}>
        <View style={styles.name} />
        <View style={styles.bio} />
      </View>

      {/* Ações */}
      <View style={styles.actions}>
        <View style={styles.button} />
        <View style={styles.button} />
        <View style={styles.button} />
        <View style={styles.button} />
      </View>

      {/* Post */}
      <View style={styles.card}>
        <View style={styles.postAvatar} />
      </View>

    </ScrollView>
  );
}