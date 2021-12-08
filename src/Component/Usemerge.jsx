import { useMergeState } from "../Hooks/CustomHooks";
import React, { useState } from "react";
export const Merge = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    email: email,
    password: password,
    username: name
  };

  const { state } = useMergeState(data);

  return (
    <div>
      <input
        type="text"
        //value={state?state.email:email}
        onChange={(e) => setEmail(e.value)}
        placeholder="email"
      />
      <input
        type="text"
        // value={state?state.username:name}
        onChange={(e) => setName(e.value)}
        placeholder="name"
      />
      <input
        type="text"
        //value={state?state.password:password}
        onChange={(e) => setPassword(e.value)}
        placeholder="password"
      />
      <input type="button" value="submit" onClick={useMergeState(data)} />

      <div>
        <h1>username:{state ? state.username : name}</h1>
        <h1>password:{state ? state.password : password}</h1>
        <h1>email:{state ? state.email : email}</h1>
      </div>
    </div>
  );
};
