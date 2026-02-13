import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-900">404</h2>
        <p className="text-gray-600 mt-3">
          La página que buscás no existe.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

