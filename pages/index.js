
import { useState } from "react";
import Message from "../components/message";
import { useData } from "../hooks/data";
import { parseData } from "../utils";
import MemberList from "../components/member-list";
// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
  console.log("~ start ~");
  const { data, isLoading, isError } =  useData();
  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content= "No data could be loaded..." />

  console.log(data);


  return (
    <>
    <MemberList members={data} />
    </>
  )
}
