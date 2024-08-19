import {View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";
import {Colors} from "@/constants/Colors";
import {Href, useRouter} from "expo-router";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebaseConfig";

const Avatar = () => {
	const router = useRouter();
	const [user, loading, error] = useAuthState(auth);
	
	if (loading) {
		return (
			<ActivityIndicator size="small" color={Colors.dark.text} />
		)
	}
	
	if (user) {
		return (
			<View>
				<TouchableOpacity onPress={() => {
					router.push('/account' as Href);
				}} style={styles.avatarContainer}>
					<Text style={{ color: "black", fontWeight: 600 }}>AB</Text>
				</TouchableOpacity>
			</View>
		)
	} else {
		return (
			<TouchableOpacity onPress={() => {
				router.push('/accountmod' as Href);
			}}>
				<Text style={styles.signinText}>Sign In</Text>
			</TouchableOpacity>
		)
	}
};

const styles = StyleSheet.create({
	signinText: {
		color: Colors.dark.text,
		fontSize: 16,
		fontWeight: '600',
	},
	avatarContainer: {
		backgroundColor: "#BDE4A7",
		color: "#000",
		borderRadius: 50,
		padding: 8,
		width: 45,
		height: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});


export default Avatar;