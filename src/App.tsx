import './index.css';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Top Bar */}
			<div className="w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-[#4682B4] to-[#0F4C81] shadow-lg text-center">
				Jahanzaib's Site
			</div>

			{/* Main Content */}
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					{/* Projects Link */}
					<div className="inline-flex justify-center">
						<a
							href="./projects.html"
							className="w-64 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#4682B4] to-[#0F4C81] rounded-lg shadow-lg transform -skew-x-12 text-center block transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700"
						>
							<span className="block transform skew-x-12">Projects</span>
						</a>
					</div>

					{/* Resources Link */}
					<div className="inline-flex justify-center">
						<a
							href="./resources.html"
							className="w-64 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#4682B4] to-[#0F4C81] rounded-lg shadow-lg transform -skew-x-12 text-center block transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700"
						>
							<span className="block transform skew-x-12">Resources</span>
						</a>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="fixed bottom-0 w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-gray-500 to-[#0F4C81] shadow-lg text-center">
				{/* You can add footer content here later */}
			</footer>
		</div>
	);
}

export default App;