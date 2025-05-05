interface PageHeadingProps {
	children: React.ReactNode
}

function PageHeading({ children }: PageHeadingProps) {
	return <h2 className="w-full py-4 mb-8 text-l font-bold text-white text-center shadow-lg bg-gradient-to-r from-[#4682B4] to-[#0F4C81]">
		{children}
	</h2>
}

export default PageHeading;