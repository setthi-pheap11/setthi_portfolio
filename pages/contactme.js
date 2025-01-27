import Sidebar from '../components/Sidebar';

export default function ContactMe() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
}
