import React, { useState, useEffect } from "react";

function getRandomInt(max: number, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generateRandomHex() {
  const hexDigits = "0123456789ABCDEF";
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexDigits[getRandomInt(16)];
  }
  return hexValue;
}

function generateRandomAvatar(dimension: number) {
  let av: string[][] = [];
  for (let i = 0; i < dimension; i++) {
    const r: string[] = [];
    for (let j = 0; j < dimension; j++) {
      r.push(generateRandomHex());
    }
    av.push(r);
  }
  return av;
}

const avatar = generateRandomAvatar(32);

export const Avatar = ({ status }: { status: string }) => {
  const [sprite, setSprite] = useState(avatar);
  const [spriteDimension, setSpriteDimension] = useState(avatar.length);

  function spriteHandler(newDimension: number) {
    setSpriteDimension(newDimension);
    setSprite(generateRandomAvatar(newDimension));
  }

  return (
    <div className="w-auto h-auto">
      {sprite.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="square"
              style={{
                backgroundColor: color,
                width: `${100 / spriteDimension}%`,
                paddingBottom: `${100 / spriteDimension}%`,
              }}
            ></div>
          ))}
        </div>
      ))}
      {/* <button
        className="absolute text-sm border-2 rounded p-1 border-current hover:bg-slate-400"
        onClick={() => spriteHandler(getRandomInt(3, 48))}
      >
        Randomize
      </button> */}
    </div>
  );
};
