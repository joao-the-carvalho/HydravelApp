import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textTitle: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },
  textMain: {
    fontSize: 16,
    color: "#000",
    padding: 10,
  },

  button: {
    backgroundColor: "#94a7ff",
    color: "#000",
    padding: 15,
    borderRadius: 10,
  },
  buttonActive: {
    backgroundColor: "#6680f1",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  imageLocal: {
    width: 150,
    height: 150,
    alignItems: "center",
  },
  input: {
    height: 50,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    width: 300,
    borderRadius: 8,
  },
  statusCard: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  statusText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  smallCard: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 180,
  },
  smallCardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginTop: 16,
    textAlign: "center",
  },
});
