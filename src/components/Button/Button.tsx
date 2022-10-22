import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      {...props}
    />
  );
}
