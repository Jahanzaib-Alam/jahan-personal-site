function NavBar({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-[#4682B4] to-[#0F4C81] shadow-lg text-center">
			{children}
		</div>
	);
}

export default NavBar;