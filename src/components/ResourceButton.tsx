interface ResourceButtonProps {
  to: string;
  children: React.ReactNode;
}

function ResourceButton({ to, children }: ResourceButtonProps) {
  return (
    <div className="inline-flex justify-center">
      <a
        href={to}
        className="w-64 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#4682B4] to-[#0F4C81] rounded-lg shadow-lg transform -skew-x-12 text-center block transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700 active:scale-105 active:from-red-500 active:to-red-700"
      >
        <span className="block transform skew-x-12">{children}</span>
      </a>
    </div>
  );
}

export default ResourceButton;
