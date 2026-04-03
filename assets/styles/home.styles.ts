import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8a6ca",
    padding: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },

  imagePost1: {
    width: '100%',
    height: '100%',
  },

  cardFooter: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  imageUserIndex:{
    width: "100%",
    height: "100%",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#777",
    overflow: "hidden",
  },

  username: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  button: {
    width: 70,
    height: 30,
    backgroundColor: "#bbb",
    borderRadius: 8,
  },

  card: {
    width: 600,
    height: 300,
    margin: 10,
    backgroundColor: "#fff", 
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignSelf: "center"
  },

  imagePlaceholder: {
    height: 200,
    backgroundColor: "#bbb",
    borderRadius: 15,
    marginBottom: 10,
  },

  cardFooter: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  likeButton:{
    width: 80,
    height: 40,
    borderRadius: 15,
    justifyContent: "center", 
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  textLine: {
    height: 10,
    width: "80%",
    marginBottom: 5,
  },

  smallLine: {
    height: 10,
    borderRadius: 5,
    width: '40%',
  },
  },);