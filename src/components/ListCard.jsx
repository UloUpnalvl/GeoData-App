import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function ListCard({ country }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li
        onClick={() => setShowModal(!showModal)}
        className="size-full relative cursor-pointer "
      >
        <h2 className="absolute top-0 left-0 bg-gray-100 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-slate-900 rounded p-2">
          {country.name.common}
        </h2>
        <img
          className="size-full object-cover rounded"
          src={country.flags.svg}
          alt=""
        />
      </li>
      {showModal &&
        createPortal(
          <ModalContent
            country={country}
            closeModal={() => setShowModal(!showModal)}
          />,
          document.body
        )}
    </>
  );
}
