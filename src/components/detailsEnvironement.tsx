import type { JSX } from 'react';

export const DetailsEnvironement = ({
  icon,
  title,
  info,
}: {
  icon: JSX.Element;
  title: string;
  info: string;
}) => {
  return (
    <div>
      <div className="flex flex-row justify-between text-amber-50 text-xs items-center">
        <div className="flex flex-row gap-2 items-center">
          {icon} <p>{title}</p>
        </div>
        <div className="bg-gray-600 p-1 rounded-sm">{info}</div>
      </div>
    </div>
  );
};
