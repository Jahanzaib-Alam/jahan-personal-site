import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	title: string;
	children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
	return (
		<>
			<Header title={title} />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;