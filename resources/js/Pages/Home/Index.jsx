import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Home({ user }){
  return (
    <>
      <Head title="Home">

      </Head>
      <Authenticated auth={user}>
        <h1>{user.name}</h1>
      </Authenticated>
    </>
  );
}