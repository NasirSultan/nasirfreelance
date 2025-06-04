import { Link } from 'react-router-dom';

export default function PostList() {
  return (
    <div className="mx-auto mt-10 max-w-full text-center text-gray-700 text-xl">
      <p>Sorry, there are no posts at the moment.</p>
     <div  className="flex justify-center m-14">

 <Link
        to="/AIagent"

  className="flex items-center justify-center gap-2 border border-purple-700 text-purple-700 hover:bg-purple-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-sm transition duration-300"
  style={{ width: '200px' }}  // example fixed width inline style
>


     Ai Agent 
      </Link>

     </div>
    </div>
  );
}
