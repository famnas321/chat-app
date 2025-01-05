import React from 'react'

function CheckBox( {onCheckboxChange,selectedGender}) {
  return (
    <>
    <div>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Gender</h3>
<ul className="flex ">
    <li className="w-1/4 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input 
            checked={selectedGender==="Male"}
            onChange={()=>onCheckboxChange("Male")}
            id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </input>
            <label  className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
    selectedGender === "Female" ? "selected" : ""
  }`}>Male</label>
        </div>
    </li>
    <li className="w-1/4 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            
            <input
            checked={selectedGender==="Female"}
            onChange={()=> onCheckboxChange("Female")}
            id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
            <label    className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
    selectedGender === "Female" ? "selected" : ""
  }`}>Female</label>
        </div>
    </li>
    </ul>
    </div>
   
    </>
  )
}

export default CheckBox