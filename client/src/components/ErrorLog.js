import React from "react";
import { UserAuth } from "../context/auth";

const ErrorLog = () => {
  const { errWhileLog } = UserAuth();
  return (
    <div className="fixed mt-4 bottom-0  rounded-none">
      <p className="block max-w-fit">
        Error Occured --{`>`}
        {errWhileLog.message}
      </p>
    </div>
  );
};

export default ErrorLog;
