import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-14">
      
      <main className="mx-auto max-w-4xl">

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight">
          To-Do List
        </h1>

        {/* Empty Workspace */}
        <section className="mt-10 min-h-[500px] rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          
        </section>

      </main>
    </div>
  );
}




