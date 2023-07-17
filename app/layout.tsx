"use client";

import { useAtom } from "jotai";
import noteSote from "./store/note";
import { useMemo } from "react";
import tasks from "./store/tasks";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text] = useAtom(noteSote);
  const len = useMemo(() => text.length, [text]);

  const [taskLs] = useAtom(tasks);

  const taskLen = useMemo(() => taskLs.length, [taskLs]);
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center w-full  m-0 h-screen">
        <div className="w-full text-center">
          <h1 className="text-center text-4xl font-bold mb-10">Task List</h1>

          <p>Note Length: {len} </p>
          <p>Task Number: {taskLen} </p>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/Notes">Notes</Link>
          <Link href="/Tasks">Task</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
