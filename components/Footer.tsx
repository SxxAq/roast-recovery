import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/sxxaq"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-red-500 transition-colors duration-300"
          >
            SxxAq
          </Link>
        </div>
        <Link
          href="https://github.com/SxxAq/roast-recovery"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors duration-300"
        >
          GitHub Repository
        </Link>
      </div>
    </footer>
  );
}
