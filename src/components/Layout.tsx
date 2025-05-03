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
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Layout;