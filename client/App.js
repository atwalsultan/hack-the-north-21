import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
	// Fetch products
	const myFunc = async () => {
		const url = `http://10.0.2.2:8080/api/products`;
		const response = await fetch(url);   // fetch page
		const responseJsonArray = await response.json();  // get response text

		// Create output
		console.log(`\n\nThe products are as follows: \n\n`);
		responseJsonArray.map(product => {
			console.log(`Name: ${product.brand} ${product.model}`);
			console.log(`Price: ${product.price} CAD`);
			console.log(`Vendor: ${product.vendor}`);
			console.log(`\n`);
		});
	}

	return (
		<View style={styles.container}>
			<Button title="Fetch Products" onPress={myFunc} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
