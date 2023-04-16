import Link from "next/link";
import { useState } from "react";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="max-w-md stroke-alpha mx-auto uppercase font-alpha text-white text-center text-5xl mb-3">Come always vibing at the Egloo</h1>
        <h2 className="max-w-lg mx-auto text-center font-ubuntu text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae egestas sapien.</h2>
        <div className="relative mt-10 mb-28 px-10">
          <img className="border-[15px] border-white rounded-xl" src="/img/animation-alpha.gif" alt="animation" />
          {/* Border - TR */}
          <img className="absolute top-16 right-52 translate-x-1/2 -translate-y-1/2" src="/img/border-alpha-tr.png" alt="" />
          {/* Border - BL */}
          <img className="absolute -bottom-72 -left-40 translate-x-1/2 -translate-y-1/2" src="/img/border-alpha-bl.png" alt="" />
          {/* Border - BR */}
          <img className="absolute -bottom-48 right-36 translate-x-1/2 -translate-y-1/2" src="/img/border-alpha-br.png" alt="" />
          </div>
      </div>
    </>
  );
};
