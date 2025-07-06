import type { JSX } from 'react';

export default function DetailsMetadata({
  icon,
  title,
  info,
}: {
  icon: JSX.Element;
  title: string;
  info: string;
}) {
  return (
    <>
      <div className="text-amber-50 text-sm flex justify-between text-sm items-center">
        <div className="flex items-center gap-2">
          {icon}
          <p>{title}</p>
        </div>
        <p>{info}</p>
      </div>
      <hr className="border-gray-600" />
    </>
  );
}
