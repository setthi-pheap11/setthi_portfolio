import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Pheap Setthi</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/whoami">Who Am I</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/references">References</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/contactme">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
