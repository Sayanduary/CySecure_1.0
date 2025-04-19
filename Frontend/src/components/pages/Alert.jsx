import React from 'react'
import { useForm } from "react-hook-form"

function Alert() {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setTimeout(() => {
      reset()
    }, 1000);
    
    // Add your logic here (API call, alert, etc.)
  }

  return (
    <>
    <div className='h-[100vh] flex  justify-center items-center  w-full flex-col  '>
      <div className='bg-gray-200/15 w-1/3 p-9 flex justify-center items-center flex-col gap-10 rounded-sm'>
    <h1 className='text-white text-4xl font-bold'>Package <span className='text-green-500'>Analysis</span> </h1>
      <form onSubmit={handleSubmit(onSubmit) } className='flex flex-col w-full gap-6 '>
        <input
          type="text"
          placeholder='Enter Your Protocol'
          {...register("protocol", { required: true })}
          className='bg-white rounded-sm p-3'
        />
        {errors.protocol && <span className='text-white'>This field is required</span>}

        <input
          type="text"
          placeholder='Enter Your Src IP'
          {...register("Src", { required: true })}
          className='bg-white rounded-sm p-3'
        />
        {errors.Src && <span className='text-white'>This field is required</span>}

        <input
          type="text"
          placeholder='Enter Your DST IP'
          {...register("Dst", { required: true })}
          className='bg-white rounded-sm p-3'
        />
        {errors.Dst && <span className='text-white'>This field is required</span>}

        <input
          type="text"
          placeholder='Enter Your Suspicious'
          {...register("Suspicious", { required: true })}
          className='bg-white rounded-sm p-3'
        />
        {errors.Suspicious && <span className='text-white'>This field is required</span>}

        {/* Correct self-closing submit input */}
        <input type='submit' value="Submit" className='bg-[#00a63d] p-4 text-xl rounded-sm cursor-pointer' />
      </form>
      </div>
      </div>
    </>
  )
}

export default Alert
