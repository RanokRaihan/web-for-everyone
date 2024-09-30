interface NotFoundPageProps {
  params: {
    otherComponent: string; // Assuming otherComponent is a string from the route
  };
}
const NotFoundPage = ({ params }: NotFoundPageProps) => {
  const { otherComponent } = params;
  return (
    <div className="px-10 space-y-4">
      <h1 className="text-3xl font-bold ">
        {`Requested "${otherComponent}" component is not ready yet!`}
      </h1>
      <p className="text-slate-700 text-lg">
        We are working on it. Please check back later. We aprreciate your
        patience.
      </p>
    </div>
  );
};

export default NotFoundPage;
