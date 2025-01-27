import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          Hi, I'm Pheap Setthi, a passionate developer with skills in modern web technologies.
        </p>
      </div>
    </div>
  );
}
