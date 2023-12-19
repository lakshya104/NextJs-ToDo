interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="rounded-xl min-h-[500px] p-8 m-6 bg-slate-700 flex-col flex justify-start items-center">
      {children}
    </div>
  );
};

export default Wrapper;
