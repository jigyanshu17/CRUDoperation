import React from "react";

const StyledDeleteButton = ({ id, handleDelete }) => {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="crush-button"
      style={{
        border: "none",
        width: "140px",
        height: "50px",
        color: "#fff",
        zIndex: 1,
        display: "flex",
        background: "#000",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          textAlign: "center",
          margin: "auto",
          fontSize: "1rem", // text-base is equivalent to 16px/1rem
          fontWeight: "bold",
        }}
      >
       Delete 
      </p>

      <style jsx>{`
        .crush-button::after {
          position: absolute;
          content: "";
          width: 95%;
          z-index: -1;
          height: 10%;
          bottom: 0;
           left: 0;
          clip-path: polygon(
            0% 74%,
            4% 75%,
            8% 76%,
            11% 77%,
            15% 78%,
            20% 78%,
            25% 77%,
            32% 77%,
            37% 75%,
            40% 74%,
            43% 74%,
            46% 73%,
            52% 72%,
            57% 72%,
            65% 74%,
            66% 75%,
            71% 78%,
            75% 82%,
            81% 86%,
            83% 88%,
            88% 91%,
            90% 94%,
            94% 96%,
            98% 98%,
            100% 100%,
            82% 100%,
            0 100%
          );
          background: #c53030;
          transition: 0.2s ease;
        }

        .crush-button::before {
          position: absolute;
          content: "";
          transform: rotate(180deg);
          width: 95%;
          height: 0%;
          transition: 0.2s ease;
          z-index: -1;
          clip-path: polygon(
            0% 74%,
            4% 75%,
            8% 76%,
            11% 77%,
            15% 78%,
            20% 78%,
            25% 77%,
            32% 77%,
            37% 75%,
            40% 74%,
            43% 74%,
            46% 73%,
            52% 72%,
            57% 72%,
            65% 74%,
            66% 75%,
            71% 78%,
            75% 82%,
            81% 86%,
            83% 88%,
            88% 91%,
            90% 94%,
            94% 96%,
            98% 98%,
            100% 100%,
            82% 100%,
            0 100%
          );
          background: #c53030;
        }

        .crush-button:hover::after {
          clip-path: polygon(
            0 30%,
            9% 34%,
            7% 39%,
            11% 43%,
            13% 33%,
            17% 30%,
            24% 34%,
            25% 35%,
            30% 31%,
            30% 38%,
            39% 33%,
            35% 43%,
            43% 45%,
            55% 46%,
            65% 74%,
            67% 66%,
            81% 57%,
            75% 82%,
            81% 86%,
            83% 88%,
            88% 91%,
            90% 94%,
            94% 96%,
            98% 98%,
            100% 100%,
            82% 100%,
            0 100%
          );
          height: 80%;
        }

        .crush-button:hover::before {
          clip-path: polygon(
            0 30%,
            9% 34%,
            7% 39%,
            11% 43%,
            13% 33%,
            17% 30%,
            24% 34%,
            25% 35%,
            30% 31%,
            30% 38%,
            39% 33%,
            35% 43%,
            43% 45%,
            55% 46%,
            65% 74%,
            67% 66%,
            81% 57%,
            75% 82%,
            81% 86%,
            83% 88%,
            88% 91%,
            90% 94%,
            94% 96%,
            98% 98%,
            100% 100%,
            82% 100%,
            0 100%
          );
          height: 80%;
        }
      `}</style>
    </button>
  );
};

export default StyledDeleteButton;
