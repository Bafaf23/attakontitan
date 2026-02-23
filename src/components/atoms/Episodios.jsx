"use client";

import { faTv, faCalendarAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function EpisodeCard({ episode, number, airDate, director }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-blue-400">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold">
            {number}
          </div>
          <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {episode}
          </h3>
        </div>
        <span className="text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">
          EP-{number.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Icon icon={faCalendarAlt} className="w-3 text-slate-400" />
          <span>
            Lanzamiento: <span className="font-medium">{airDate}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faFilm} className="w-3 text-slate-400" />
          <span className="italic">
            Dirigido por:{" "}
            <span className="not-italic font-medium">{director}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
