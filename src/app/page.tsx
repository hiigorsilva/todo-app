'use client'

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { TaskArea } from "@/components/TaskArea"

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col bg-zinc-900">
      <Header />
      <TaskArea />
      <Footer />
    </main>
  )
}
