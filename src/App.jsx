import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { getMovieSearch } from "./api";
import Modal from "./Components/Modal";
import background from "./assets/2.jpg";

const App = () => {
  const [getInput, setInput] = useState("movie");
  const [getMovie, setMovie] = useState(null);
  const [getId, setId] = useState("");
  const [getDefaultMovie, setDefaultMovie] = useState("movie");

  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    getMovieSearch(getInput).then((e) => {
      setMovie(
        e.map((e) => {
          return (
            <div
              key={e.imdbID}
              className="card w-72 bg-slate-700 text-slate-100  "
            >
              <figure>
                <img className="w-fit" src={e.Poster} alt={e.Title} />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end pb-2">
                  <div className="badge badge-outline">{e.Type}</div>
                  <div className="badge badge-outline">{e.Year}</div>
                </div>
                <h2 className="card-title">
                  {e.Title}
                  <div className="badge badge-secondary">
                    {e.Year < year() - 2 ? "OLD" : "NEW"}
                  </div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div>
                    <button
                      className="btn glass"
                      onClick={() => {
                        setId(e.imdbID);
                        window.my_modal_4.showModal();
                      }}
                    >
                      Click
                    </button>
                    <dialog
                      id="my_modal_4"
                      className="modal text-slate-800 ring "
                    >
                      <Modal id={getId} />
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      );
    });
  }, [getId, getInput]);

  return (
    <div
      className="bg-fixed bg-bottom bg-cover overflow-auto scroll-smooth "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="container flex flex-col mx-auto relative top-20">
        <input
          className="input w-full max-w-xs mx-auto  mb-5"
          type="text"
          placeholder="Search"
          onKeyUp={handleInput}
        />
        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
          {getMovie}
        </div>
      </div>
    </div>
  );
};

export default App;
