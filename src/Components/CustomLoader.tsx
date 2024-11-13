import React from "react";

const CustomLoading: React.FC = () => {
  return (
    <div className="bg-white absolute opacity-60 z-50 h-full w-full flex items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="800px"
          width="800px"
          viewBox="0 0 496 496"
          className="absolute top-0 left-0 w-full h-full animate-spin"
        >
          <path
            fill="#76FFE5"
            d="M248,92c-13.6,0-24-10.4-24-24V24c0-13.6,10.4-24,24-24s24,10.4,24,24v44C272,80.8,261.6,92,248,92z"
          />
          <path
            fill="#0DBFBA"
            d="M248,496c-13.6,0-24-10.4-24-24v-44c0-13.6,10.4-24,24-24s24,10.4,24,24v44C272,485.6,261.6,496,248,496z"
          />
          <path
            fill="#BBFFF2"
            d="M157.6,116c-8,0-16-4-20.8-12l-21.6-37.6c-6.4-11.2-2.4-26.4,8.8-32.8s26.4-2.4,32.8,8.8L178.4,80c6.4,11.2,2.4,26.4-8.8,32.8C166.4,114.4,161.6,116,157.6,116z"
          />
          <path
            fill="#1BCEB8"
            d="M360,465.6c-8,0-16-4-20.8-12L317.6,416c-6.4-11.2-2.4-26.4,8.8-32.8c11.2-6.4,26.4-2.4,32.8,8.8l21.6,37.6c6.4,11.2,2.4,26.4-8.8,32.8C368,464.8,364,465.6,360,465.6z"
          />
          <path
            fill="#E1FFF9"
            d="M92,181.6c-4,0-8-0.8-12-3.2l-37.6-21.6c-11.2-6.4-15.2-21.6-8.8-32.8s21.6-15.2,32.8-8.8l37.6,21.6c11.2,6.4,15.2,21.6,8.8,32.8C108,177.6,100,181.6,92,181.6z"
          />
          <path
            fill="#26DBC0"
            d="M442.4,384c-4,0-8-0.8-12-3.2L392,359.2c-11.2-6.4-15.2-21.6-8.8-32.8c6.4-11.2,21.6-15.2,32.8-8.8l37.6,21.6c11.2,6.4,15.2,21.6,8.8,32.8C458.4,380,450.4,384,442.4,384z"
          />
          <path
            fill="#F3FFFD"
            d="M68,272H24c-13.6,0-24-10.4-24-24s10.4-24,24-24h44c13.6,0,24,10.4,24,24S80.8,272,68,272z"
          />
          <path
            fill="#2EE5C6"
            d="M472,272h-44c-13.6,0-24-10.4-24-24s10.4-24,24-24h44c13.6,0,24,10.4,24,24S485.6,272,472,272z"
          />
          <path
            fill="#11AEBA"
            d="M53.6,384c-8,0-16-4-20.8-12c-6.4-11.2-2.4-26.4,8.8-32.8l37.6-21.6c11.2-6.4,26.4-2.4,32.8,8.8c6.4,11.2,2.4,26.4-8.8,32.8l-37.6,21.6C62.4,383.2,58.4,384,53.6,384z"
          />
          <path
            fill="#3BEDCB"
            d="M404,181.6c-8,0-16-4-20.8-12c-6.4-11.2-2.4-26.4,8.8-32.8l37.6-21.6c11.2-6.4,26.4-2.4,32.8,8.8s2.4,26.4-8.8,32.8L416,178.4C412,180.8,408,181.6,404,181.6z"
          />
          <path
            fill="#0FB8BC"
            d="M136,465.6c-4,0-8-0.8-12-3.2c-11.2-6.4-15.2-21.6-8.8-32.8l21.6-37.6c6.4-11.2,21.6-15.2,32.8-8.8c11.2,6.4,15.2,21.6,8.8,32.8l-21.6,37.6C152,461.6,144,465.6,136,465.6z"
          />
          <path
            fill="#57F7D8"
            d="M338.4,116c-4,0-8-0.8-12-3.2c-11.2-6.4-15.2-21.6-8.8-32.8l21.6-37.6c6.4-11.2,21.6-15.2,32.8-8.8c11.2,6.4,15.2,21.6,8.8,32.8L359.2,104C354.4,111.2,346.4,116,338.4,116z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomLoading;
