import React from 'react'

function CheckBox() {
  return (
    <>
    <div>
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Gender</h3>
<ul class="flex ">
    <li class="w-1/4 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </input>
            <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
        </div>
    </li>
    <li class="w-1/4 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            
            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
            <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
        </div>
    </li>
    </ul>
    </div>
   
    </>
  )
}

export default CheckBox