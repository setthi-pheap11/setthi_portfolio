import Sidebar from '../components/Sidebar';

export default function Skills() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10">
        <h1 className="text-4xl font-bold">My Skills</h1>
        <ul className="mt-4">
          <li>- JavaScript (React, Next.js)</li>
          <li>- Go (Golang, Fiber)</li>
          <li>- Swift (UIKit)</li>
          <li>- Firebase, PostgreSQL</li>
          <li>- Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
