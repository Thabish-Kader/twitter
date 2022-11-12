import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({
	Component,
	pageProps,
}: AppProps<{
	session: Session;
}>) {
	const queryClient = new QueryClient();
	return (
		<SessionProvider session={pageProps.session}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</SessionProvider>
	);
}

export default MyApp;
