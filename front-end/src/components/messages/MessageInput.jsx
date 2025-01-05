
import React from 'react';
import { BsSend } from 'react-icons/bs';

function MessageInput() {
  return (
    <div>
      <form action="" className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-white"
          >
            <BsSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;


























// import React from 'react'
// import {BsSend} from "react-icons/bs"

// function MessageInput() {
//   return (
//     <div>
//      <form action="" className='px-4 my-3'>
//         <div className='w-full   '>
//             <input type="text"
//             className=' border text-m rouded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' 
//             placeholder='send a message'/>
//             <button type='sumbit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//      </form>
//     </div>
//   )
// }

// export default MessageInput