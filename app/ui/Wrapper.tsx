interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="rounded-xl min-h-[480px] p-4 m-2 md:p-8 md:m-6 bg-slate-700 flex-col flex justify-start items-center">
      {children}
    </div>
  );
};

export default Wrapper;
