const NotFoundRoot = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-hidden flex flex-col item-center justify-center text-center">
      <h1 className="text-4xl font-bold ">Requested page not found</h1>
      <p className="text-slate-700 text-lg">
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
    </div>
  );
};

export default NotFoundRoot;
