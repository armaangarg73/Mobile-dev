import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 25,
    paddingTop: 40,
  },

  logo: {
    width: 55,
    height: 55,
    alignSelf: "center",
    marginBottom: 18,
    resizeMode: "contain",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    textAlign: "center",
    color: "#8A8A8A",
    marginTop: 8,
    marginBottom: 28,
    fontSize: 14,
    lineHeight: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    color: "#222",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 58,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#222",
  },

  button: {
    backgroundColor: "#B8F200",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  link: {
    color: "#9CD400",
    fontWeight: "600",
  },

  forgot: {
    textAlign: "center",
    marginTop: 16,
    color: "#9CD400",
    fontWeight: "600",
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  resetCard: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#fff",

    borderWidth: 2,

    borderRadius: 24,

    padding: 18,

    marginBottom: 20,
  },

  iconBox: {
    width: 65,
    height: 65,

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  resetTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  resetSubtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});
