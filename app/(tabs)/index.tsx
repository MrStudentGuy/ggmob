import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import { Colors } from "@/constants/Colors";
import Avatar from "@/components/avatar";
import React from "react";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>GameGuide</Text>
				<Avatar />
			</View>
			
			<View style={styles.globalContainer}>
				<TextInput style={styles.searchBar} placeholder="Search" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 32,
		flex: 1,
		backgroundColor: Colors.dark.background,
		color: Colors.dark.text,
	},
	header: {
		marginTop: 16,
		marginHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	searchBar: {
		color: "#fff",
		backgroundColor: "#000",
		fontSize: 18,
		fontWeight: '600',
		borderRadius: 8,
		padding: 8,
		marginTop: 16,
		width: '75%',
	},
	globalContainer: {
		width: '100%',
		alignItems: 'center',
	},
	title: {
		color: Colors.dark.text,
		fontSize: 38,
		fontWeight: '800',
	},
});
