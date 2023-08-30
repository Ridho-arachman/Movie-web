import { useEffect, useState } from "react";
import { getMovieById } from "../api";

const Modal = ({ id }) => {
  const [getMovie, setMovie] = useState();
  useEffect(() => {
    getMovieById(id).then((e) => {
      return setMovie(
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl overflow-scroll"
        >
          <div className="card bg-base-100 lg:flex lg:flex-row">
            <div>
              <h2 className="font-bold text-2xl mb-3 text-center">{e.Title}</h2>
              <figure>
                <div className="relative">
                  <img
                    src={e.Poster}
                    alt={e.Title}
                    className="min-w-fit relative"
                  />
                  <h4 className="bg-slate-600 text-white border-2 border-yellow-500 w-10 h-9 absolute top-0 right-0   text-center pt-1 font-bold">
                    {e.imdbRating}
                  </h4>
                </div>
              </figure>
            </div>
            <div className="card-body">
              <p>
                <ul className="text-lg font-medium font-mono">
                  <li>Country : {e.Country}</li>
                  <li>Language : {e.Language}</li>
                  <li>Genre : {e.Genre}</li>
                  <li>Type : {e.Type}</li>
                  <li>Actors : {e.Actors}</li>
                  <li>Writer : {e.Writer}</li>
                  <li>Director : {e.Director}</li>
                  <li>Awards : {e.Awards}</li>
                  <li>
                    Metascore : {e.Metascore}, imdbRating : {e.imdbRating},
                    imdbVotes : {e.imdbVotes}
                  </li>
                  <li>Budget: {e.BoxOffice}</li>
                  <li>Released :{e.Released}</li>
                  <li>Runtime :{e.Runtime}</li>
                  <li>
                    <div className="collapse bg-base-200">
                      <input type="checkbox" />
                      <div className="collapse-title text-xl font-bold">
                        Synopsis
                      </div>
                      <small className="absolute top-3 right-5">
                        Click Here
                      </small>
                      <div className="collapse-content">
                        <p>{e.Plot}</p>
                        <br />
                      </div>
                    </div>
                  </li>
                </ul>
              </p>
              <div className=" modal-action justify-end">
                <button className="btn btn-primary">Close</button>
              </div>
            </div>
          </div>
        </form>
      );
    });
  }, [id]);
  return <>{getMovie}</>;
};

export default Modal;
