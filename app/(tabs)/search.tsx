import React from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput, View} from "react-native";
import {Colors} from "@/constants/Colors";
import Avatar from "@/components/avatar";

const Search = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Search</Text>
				<Avatar />
			</View>
			
			<View style={styles.searchContainer}>
				<TextInput style={styles.searchBar} placeholder="Search" />
			</View>
		</SafeAreaView>
	);
};

export default Search;

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
	searchContainer: {
		width: '100%',
		alignItems: 'center',
	},
	searchBar: {
		color: "#fff",
		backgroundColor: "#131313",
		fontSize: 18,
		fontWeight: '600',
		borderRadius: 8,
		padding: 8,
		marginTop: 16,
		width: '90%',
		height: 35,
	},
	title: {
		color: Colors.dark.text,
		fontSize: 38,
		fontWeight: '700',
	},
});
