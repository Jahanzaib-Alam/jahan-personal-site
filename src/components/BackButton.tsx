import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
	to: string;
	children?: React.ReactNode;
}

function BackButton({ to, children = 'Back' }: BackButtonProps) {
	return (
		<div className="justify-center">
			<Link
				to={to}
				className="interactive-link w-64 py-4 text-xl font-bold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg shadow-lg transform -skew-x-12 text-center block transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700"
			>
				<span className="block transform skew-x-12">{children}</span>
			</Link>
		</div>
	);
}

export default BackButton;