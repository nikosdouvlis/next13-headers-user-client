"use client";

import { useState } from "react";
// Case 1: import "use server" helpers that use headers() or cookies() directly
// Result: will fail with a ReactServerComponentsError error:
// You're importing a component that needs next/headers.
// That only works in a Server Component but one of its parents is marked with "use client", so it's a Client Component.
// import { getCookie, getHeader } from "./actions";

// Case 2: import pure "use server" helpers not using headers() or cookies()
// Results: works as expected
// import { getCookie, getHeader } from "./pure-actions";

// Case 3: import "use server" helpers that import helpers using headers() or cookies()
// Result: the request will fail with a 500 error:
// Invariant: Method expects to have requestAsyncStorage, none available
// import { getCookie, getHeader } from "./implicit-actions";

export default function UI() {
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>{result}</h1>
      <button
        id="cookie"
        onClick={async () => {
          // set cookie
          const random = Math.random();
          document.cookie = `random=${random}`;
          const res = await getCookie("random");
          const { value } = res || {};
          setResult(random + ":" + (value || ""));
        }}
      >
        getCookie
      </button>
      <button
        id="header"
        onClick={async () => {
          const res = await getHeader("User-Agent");
          setResult(res || "");
        }}
      >
        getHeader
      </button>
      {/*<button*/}
      {/*  id="authed"*/}
      {/*  onClick={async () => {*/}
      {/*    try {*/}
      {/*      const res = await getAuthedUppercase("hello, world");*/}
      {/*      setResult(res);*/}
      {/*    } catch (err: any) {*/}
      {/*      setResult("Error: " + err.message);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*>*/}
      {/*  getAuthedUppercase*/}
      {/*</button>*/}
    </div>
  );
}
