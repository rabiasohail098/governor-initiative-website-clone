import React from 'react'

const Result = () => {
  return (
    <div >
     
        <form action="Result">
        <div className='border border-gray-200 shadow-lg shadow-gray-400  ml-[30%] w-[40%] p-6 mt-7 mb-7'>
        <div className='flex flex-col w-[100%]  mt-[6%] mb-[20px]'>
            <h1 className='text-[25px] font-extrabold text-center text-blue-900'>Grand Entrance Exam Result</h1>
            </div>
        <div className='flex flex-col w-[100%]  mb-[20px]'>
            <label htmlFor="Registration Number">Registration Number*</label>
            <input type="text" placeholder='Registration Number' className='border border-slate-400 p-[10px] bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="CNIC or B-Form Number">CNIC or B-Form Number*</label>
            <input type="text" placeholder='CNIC or B-Form Number' className='border border-slate-400 p-[10px] bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[25%]  mt-[6%] mb-[20px]'>
            <button className='bg-blue-800 font-bold text-white p-[10px]'>SUBMIT</button>
            </div>
            </div>
        </form>
       
    </div>
    
  )
}

export default Result