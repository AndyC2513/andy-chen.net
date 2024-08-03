const Alert = ({ type, text }) => {
  // returns an alert component with a message and a type based on whether message was sent successfully or not
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-green-700"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-green-700"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left py-1">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
