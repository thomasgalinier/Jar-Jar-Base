import type { JSX } from 'react';

export default function CardDetails({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: JSX.Element;
  title: string;
}) {
  return (
    <div className="border border-gray-600 p-4 rounded-sm shadow-md p-6 min-w-sm w-full bg-gray-900 justify-between">
      <div className="flex gap-2 text-amber-500 mb-5">
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
