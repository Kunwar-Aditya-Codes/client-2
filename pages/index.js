import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Welcome />
        <div className="flex flex-col justify-center items-center my-8 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
          <h1 className=" text-3xl lg:text-5xl tracking-wide flex  h-11 lg:h-14 font-medium">
            ASIACON
            <p className="ml-2 flex items-end animate-pulse font-bold text-amber-400">
              2022
            </p>
          </h1>
          <hr className="block border-2 my-4 border-gray-300 bg-gray-300 w-44 " />
          <p className="text-justify mx-8  text-gray-700">
            Welcome to the ASIANCON 2021 , this year we will organize this
            conference in Hybrid Mode (Virtual and Physical Presentation will be
            accepted).
          </p>
          <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center">
            <Card
              title={"Comittee"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
              }
            />
            <Card
              title={" Technical  Comittee"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
              }
            />
            <Card
              title={"Review Process"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
              }
            />
            <Card
              title={"Plagiarism Policy"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2041&q=80')]"
              }
            />
            <Card
              title={"Camera Ready Info"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
              }
            />
            <Card
              title={"Registration Details"}
              bg={
                "bg-[url('https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
              }
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
