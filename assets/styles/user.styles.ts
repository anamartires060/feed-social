import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },

  cover: {
    height: 150,
    backgroundColor: "#bbb",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#777",
    position: "absolute",
    bottom: -50,
  },

  info: {
    marginTop: 60,
    padding: 20,
  },

  name: {
    height: 20,
    backgroundColor: "#777",
    marginBottom: 10,
  },

  bio: {
    height: 15,
    backgroundColor: "#999",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  button: {
    width: 70,
    height: 30,
    backgroundColor: "#aaa",
    borderRadius: 8,
  },

  card: {
    margin: 20,
    height: 200,
    backgroundColor: "#ccc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  postAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#777",
  },
});