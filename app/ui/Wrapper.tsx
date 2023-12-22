interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="rounded-xl min-w-[83%] min-h-[480px] p-1 m-2 md:p-8 md:m-6 bg-[url(https://images.unsplash.com/photo-1702988319113-051682d600a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8)] bg-no-repeat bg-cover bg-center flex-col flex justify-start items-center">
      {children}

    </div>
  );
};

export default Wrapper;
