import React from 'react';

const keyboardLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export function Keyboard({}) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-1">
          {row.map((letter) => {
            return (
              <div
                key={letter}
                className={`w-10 h-10 flex items-center justify-center rounded bg-gray-200 shadow`}
              >
                <span className="text-lg font-semibold">{letter}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

