import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Text, Platform, SafeAreaView} from 'react-native';

import {Colors} from "@/constants/Colors";

export default function TabTwoScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>GameGuide</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.dark.background,
		color: Colors.dark.text,
	},
	text: {
		color: Colors.dark.text,
	},
});
