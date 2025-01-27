import Sidebar from '../components/Sidebar';

export default function References() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10">
        <h1 className="text-4xl font-bold">References</h1>
        <p className="mt-4 text-lg">Here are some testimonials from clients and colleagues...</p>
      </div>
    </div>
  );
}
