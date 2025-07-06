import type { JSX } from 'react';

export const DetailsPhysical = ({
  icon,
  title,
  info,
}: {
  icon: JSX.Element;
  title: string;
  info: string;
}) => {
  return (
    <div className="p-2 bg-gray-600 flex flex-row justify-between rounded-sm">
      <div className="flex gap-2 text-amber-50">
        {icon}
        <p>{title}</p>
      </div>
      <p className="text-amber-50">{info}</p>
    </div>
  );
};
