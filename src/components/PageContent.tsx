import React from 'react';

interface PageContentProps {
	children: React.ReactNode;
}

function PageContent({ children }: PageContentProps) {
	return (
		<div className="flex-1 bg-gray-200 flex items-center justify-center">
			<div className="flex flex-wrap justify-center gap-4">
				{children}
			</div>
		</div>
	);
}

export default PageContent;