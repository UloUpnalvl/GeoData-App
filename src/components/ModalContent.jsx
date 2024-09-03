export default function ModalContent({ country, closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 bg-slate-900/95  size-full flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-7 bg-gray-100 min-w-[500px] "
      >
        <button
          onClick={closeModal}
          className="absolute cursor-pointer  top-1 rounded right-1 size-8 bg-red-700 hover:bg-red-900"
        >
          X
        </button>
        <h2 className="text-2xl mb-4">
          Here is {country.name.common}'s information
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Language(s)</span> :{" "}
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Capital</span>: {country.capital[0]}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Population</span>:{" "}
          {country.population}
        </p>
      </div>
    </div>
  );
}
