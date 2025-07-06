import type { JSX } from 'react';

export default function DetailsPresence({
  icon,
  info,
  title,
  color = 'gray',
}: {
  icon: JSX.Element;
  info: number;
  title: string;
  color?: string;
}) {
  return (
    <div
      className={`w-[47%] flex justify-center py-6 bg-gradient-to-br from-${color}-900/20 to-${color}-800/20 flex-col items-center gap-2 text-amber-50 rounded-sm border border-${color}-500`}
    >
      {icon}
      <p>{info}</p>
      <p className="font-bold">{title}</p>
    </div>
  );
}
