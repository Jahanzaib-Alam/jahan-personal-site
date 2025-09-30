import React from "react";

interface PageContentProps {
  children: React.ReactNode;
}

function PageContent({ children }: PageContentProps) {
  return (
    <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center pb-20">
      {children}
    </div>
  );
}

export default PageContent;
