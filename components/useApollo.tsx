// "use client";
// import { useMemo } from 'react';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import dotenv from 'dotenv';



// dotenv.config();


// export default function useApollo(initialState = null) {
// 	const client = useMemo(() => {
// 		console.log('Initializing Apollo Client');
// 		return new ApolloClient({
// 			uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL, // replace with your GraphQL server URL
// 			cache: new InMemoryCache(),
// 		});
// 	}, []);

// 	if (initialState) {
// 		console.log('Restoring initial state');
// 		client.cache.restore(initialState);
// 	}

// 	return client;
// }
// now with next 14 this code not supported. used ApolloWrapper.tsx instead