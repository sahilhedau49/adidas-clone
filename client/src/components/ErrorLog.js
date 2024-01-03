import React from "react";
import { UserAuth } from "../context/auth";

const ErrorLog = () => {
  const { errWhileLog } = UserAuth();
  return (
    <div className="w-fit px-8 mt-4 py-4 text-center mx-auto bg-red-400 rounded-3xl">
      <p className="block max-w-fit">
        Error Occured --{`>`}
        {errWhileLog.message}
      </p>
    </div>
  );
};

export default ErrorLog;
