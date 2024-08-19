import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Avatar from "@/components/avatar";
import React, {useEffect, useState} from "react";
import {Colors} from "@/constants/Colors";
import {Stack, useRouter} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {isValidEmail} from "@/utilities";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {
	useCreateUserWithEmailAndPassword,
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import {auth} from "@/firebaseConfig";

const Accountmod = () => {
	const [createAccount, setCreateAccount] = useState<boolean>(false);
	
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	
	const router = useRouter();
	
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);
	
	const [
		createUserWithEmailAndPassword,
		createUser,
		createLoading,
		createError,
	] = useCreateUserWithEmailAndPassword(auth);
	
	const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
	
	
	const SignInWithEmail = () => {
		if (!isValidEmail(email)) {
			Alert.alert("Error", "Please enter a valid email");
			return;
		}
		
		if (password === "") {
			Alert.alert("Error", "Please enter a valid password");
			return;
		}
		
		signInWithEmailAndPassword(email, password)
			.then((value) => {
				console.log(value);
				Alert.alert("Success", "Signed in successfully");
				router.back();
			})
			.catch((e) => {
				console.log(e);
				Alert.alert("Error", e.message);
			});
	}
	
	const CreateAccountWithEmail = () => {
		if (!isValidEmail(email)) {
			Alert.alert("Error", "Please enter a valid email");
			return;
		}
		
		if (password === "") {
			Alert.alert("Error", "Please enter a valid password");
			return;
		}
		
		createUserWithEmailAndPassword(email, password)
			.then((value) => {
				console.log(value);
				Alert.alert("Success", "Account created successfully");
				router.back();
			})
			.catch((e) => {
				console.log(e);
				Alert.alert("Error", e.message);
			});
	}
	
	const ForgotPasswordPrompt = () => {
		Alert.prompt(
			"Forgot Password",
			"Enter your email to reset your password",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{
					text: "OK",
					onPress: async (email) => {
						if (typeof email !== "string" || email === "" || !email.includes("@") || !email.includes(".")) {
							Alert.alert("Error", "Please enter a valid email");
							return;
						}
						
						const success = await sendPasswordResetEmail(email);
						
						if (success) {
							Alert.alert("Check your email!", `If you have a GameGuide account with that email address, we've sent instructions there on how to reset your password.`);
						} else {
							Alert.alert("Error", "An error occurred while trying to reset your password. Please try again later.");
						}
					}
				}
			],
			"plain-text",
			""
		);
	}
	
	return (
		<>
			<Stack.Screen options={{ headerShown: false }}/>
			
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>{createAccount ? 'Create Account' : 'Sign In'}</Text>
				</View>
				
				
				{createAccount ? (
					<View style={styles.globalContainer}>
						<TextInput inputMode={"email"} style={styles.input} placeholder="Email" onChangeText={e => setEmail(e)} />
						<TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={e => setPassword(e)} />
						<View style={styles.horizontalDivider} />
						
						<View style={styles.socialButtonContainer}>
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-google"} size={24} color="#fff" />
							</TouchableOpacity>
							
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-microsoft"} size={24} color="#fff" />
							</TouchableOpacity>
							
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-discord"} size={24} color="#fff" />
							</TouchableOpacity>
						</View>
						
						<TouchableOpacity style={styles.signIn} onPress={SignInWithEmail}>
							<Text style={styles.signInText}>Create Account</Text>
						</TouchableOpacity>
						
						<TouchableOpacity onPress={ForgotPasswordPrompt}>
							<Text style={{ color: "gray", marginTop: 16 }}>Forgot Password?</Text>
						</TouchableOpacity>
						
						<TouchableOpacity onPress={() => setCreateAccount(!createAccount)}>
							<Text  style={{ color: "gray", marginTop: 12 }}>{createAccount ? 'I have an account' : 'I don\'t have an account'}</Text>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.globalContainer}>
						<TextInput inputMode={"email"} style={styles.input} placeholder="Email" onChangeText={e => setEmail(e)} />
						<TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={e => setPassword(e)} />
						<View style={styles.horizontalDivider} />
						
						<View style={styles.socialButtonContainer}>
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-google"} size={24} color="#fff" />
							</TouchableOpacity>
							
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-microsoft"} size={24} color="#fff" />
							</TouchableOpacity>
							
							<TouchableOpacity style={styles.socialButton}>
								<Ionicons name={"logo-discord"} size={24} color="#fff" />
							</TouchableOpacity>
						</View>
						
						<TouchableOpacity style={styles.signIn} onPress={SignInWithEmail}>
							<Text style={styles.signInText}>Sign In</Text>
						</TouchableOpacity>
						
						<TouchableOpacity onPress={ForgotPasswordPrompt}>
							<Text style={{ color: "gray", marginTop: 16 }}>Forgot Password?</Text>
						</TouchableOpacity>
						
						<TouchableOpacity onPress={() => setCreateAccount(!createAccount)}>
							<Text  style={{ color: "gray", marginTop: 12 }}>{createAccount ? 'I have an account' : 'I don\'t have an account'}</Text>
						</TouchableOpacity>
					</View>
				)}
			</SafeAreaView>
		</>
		
	);
};

export default Accountmod;

const styles = StyleSheet.create({
	container: {
		padding: 32,
		flex: 1,
		backgroundColor: Colors.dark.background,
		color: Colors.dark.text,
	},
	switchPage: {
		color: Colors.dark.text,
		fontSize: 18,
		fontWeight: '600',
	},
	header: {
		marginTop: 16,
		marginHorizontal: 16,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	searchContainer: {
		width: '100%',
		alignItems: 'center',
	},
	globalContainer: {
		width: '100%',
		alignItems: 'center',
	},
	input: {
		color: "#fff",
		backgroundColor: "#131313",
		fontSize: 18,
		fontWeight: '500',
		borderRadius: 8,
		padding: 8,
		marginTop: 16,
		width: '90%',
		height: 50,
	},
	title: {
		color: Colors.dark.text,
		fontSize: 38,
		fontWeight: '700',
	},
	signIn: {
		marginTop: 15,
		paddingVertical: 15,
		backgroundColor: "blue",
		borderRadius: 8,
		padding: 8,
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		color: "#fff",
	},
	signInText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: '600',
	},
	horizontalDivider: {
		width: '75%',
		height: 1,
		backgroundColor: "gray",
		marginTop: 16,
		marginBottom: 16,
	},
	socialButton: {
		paddingVertical: 15,
		backgroundColor: "#141414",
		borderRadius: 8,
		padding: 8,
		width: 120,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		color: "#fff",
	},
	socialButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		marginTop: 16,
	}
});
