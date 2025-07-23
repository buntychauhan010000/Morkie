import React from "react";

function NFTCard({ item }) {
  return (
    <article className="group space-y-2">
      <div
        className="relative overflow-hidden transition-all duration-500 border-purple border p-5 space-y-4 rounded-xl shadow min-h-[500px] flex flex-col justify-between bg-white/5 hover:bg-none hover:scale-95"
        style={{
          background: "rgba(255,255,255,0.05)",
          transition: "all 0.4s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(225.05deg, rgba(104, 36, 109, 0.16) -0.02%, rgba(238, 0, 255, 0.16) 97.43%)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
        }
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-96 object-cover rounded-xl"
        />

        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm text-purple-400 mt-1">Mint Price:</p>
            <p className="uppercase text-purple font-black">{item.price}</p>
          </div>
        </div>

        <div>
          <div className="lg:opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full text-white text-sm px-4 py-3 rounded font-Saira font-bold">
              Mint
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NFTCard;
