
import { useState } from "react";
import { useEffect } from "react";

import Message from "../components/message";
import MemberList from "../components/member-list";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready




export default function IndexPage() {
  return (
    <>
    <Message content = {
      <>
      <h1>לובי 99<br/>
        סיכום שנה</h1>
    </>} />
    </>
  )
}
