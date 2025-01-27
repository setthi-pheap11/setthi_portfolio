import Sidebar from '../components/Sidebar';

export default function WhoAmI() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10">
        <h1 className="text-4xl font-bold">Who Am I?</h1>
        <p className="mt-4 text-lg">I am a software developer with experience in web and mobile app development...</p>
      </div>
    </div>
  );
}
