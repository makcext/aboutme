"use client";
import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function useApollo(initialState = null) {
	const client = useMemo(() => {
		console.log('Initializing Apollo Client');
		return new ApolloClient({
			uri: 'https://abtm-c97ea3f9a33e.herokuapp.com/status', // replace with your GraphQL server URL
			cache: new InMemoryCache(),
		});
	}, []);

	if (initialState) {
		console.log('Restoring initial state');
		client.cache.restore(initialState);
	}

	return client;
}