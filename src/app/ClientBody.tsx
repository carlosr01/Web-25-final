"use client";

interface ClientBodyProps {
  children: React.ReactNode;
}

export default function ClientBody({ children }: ClientBodyProps) {
  return <div className="relative flex min-h-screen flex-col">{children}</div>;
}
