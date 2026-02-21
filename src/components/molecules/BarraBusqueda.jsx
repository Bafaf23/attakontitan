import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function BarradeBusqueda({ className }) {
  return (
    <div className={`flex items-center p-1 relative w-2/3`}>
      <Input
        className={`${className}`}
        type={"text"}
        placeholder={"Busca un personaje..."}
      />
      <button
        className="absolute right-4 cursor-pointer text-slate-100 hover:text-blue-500 transition-colors"
        type="submit"
      >
        <Icon icon={faSearch} />
      </button>
    </div>
  );
}
