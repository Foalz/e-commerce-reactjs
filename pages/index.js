import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { useState, useEffect } from "react"
import NavigationBar from "../components/NavigationBar/NavigationBar";

const inter = Inter({ subsets: ["latin"] })


export default function Home() {
  return(
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
      </main>
    </>
  )
}
