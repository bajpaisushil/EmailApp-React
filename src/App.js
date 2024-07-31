import React from "react";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";
import { useSelector } from "react-redux";

function App() {
  const {selectedEmail, loading, error, list}=useSelector((state)=> state.emails);
  return (
    <div>
      <h1 className={`flex h-screen bg-[#f4f6fa]`}>
        <div className={`${selectedEmail? 'w-[40%]': 'w-[100%]'}`}>
          <EmailList />
        </div>
        <div className={`${selectedEmail? 'w-[60%]': 'w-[0%]'}`}>
          <EmailDetail />
        </div>
      </h1>
    </div>
  );
}

export default App;
