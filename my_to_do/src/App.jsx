import { useState } from "react";

import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-14">
      <main className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight">To-Do List</h1>

        {/* Empty Workspace */}
        <section className="mt-10 min-h-[500px] rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <div className="flex gap-3 mt-4 mx-4">
            {" "}
            <input
              type="text"
              placeholder="Write To-Do"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-white/30"
            />
            <button className="flex items-center justify-center rounded-xl bg-white px-4 py-2 font-semibold text-slate-950 ">
              Submit
            </button>{" "}
          </div>
        </section>
      </main>
    </div>
  );
}
