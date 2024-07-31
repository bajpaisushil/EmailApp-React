import React from "react";
import { useDispatch } from "react-redux";
import { fetchEmail } from "../features/email/emailsSlice";

function EmailItem({ email }) {
  const dispatch = useDispatch();
  return (
    <div
      className="p-4 m-4 border-2 font-medium text-gray-500 rounded-2xl cursor-pointer"
      onClick={() => dispatch(fetchEmail(email?.id))}
    >
      <p className="text-lg font-semibold">
        From:{" "}
        <span className="text-black">
          {email.from?.name} {"<"} {email.from?.email} {">"}
        </span>
      </p>
      <p className="text-lg font-semibold">
        Subject: <span className="text-black">{email.subject}</span>
      </p>
      <p className="text-lg font-semibold truncate">
        {email.short_description}
      </p>
      <p className="text-lg font-semibold">{new Date(email.date).toLocaleDateString()}</p>
    </div>
  );
}

export default EmailItem;
