import {Link, router, Stack} from "expo-router";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "@/constants/Colors";
import Avatar from "@/components/avatar";

const Account = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Account', headerLeft: () => (
				<TouchableOpacity onPress={() => {router.back()}} style={{ marginLeft: 15 }}>
					<Ionicons name="arrow-back" size={24} color={Colors.dark.text} />
				</TouchableOpacity>
			) } } />
			<ThemedView style={styles.container}>
				<ThemedText type="title">Aryan Pai</ThemedText>
				<TouchableOpacity style={styles.signOut}>
					<Text style={styles.signOutText}>Sign Out</Text>
				</TouchableOpacity>
			</ThemedView>
		</>
	);
};

export default Account;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	signOut: {
		marginTop: 15,
		paddingVertical: 15,
		backgroundColor: "red",
		borderRadius: 8,
		padding: 8,
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		color: "#fff",
	},
	signOutText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: '600',
	}
});
