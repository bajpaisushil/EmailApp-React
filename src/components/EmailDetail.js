import React from 'react'
import { useSelector } from 'react-redux'

function EmailDetail() {
    const {selectedEmail, loading, error, list}=useSelector((state)=> state.emails);
    console.log('selectedEmail==', selectedEmail);
    const filteredMail=list?.filter((ls)=> ls?.id==selectedEmail?.id);
    console.log('filteredMail=', filteredMail);
    if(!selectedEmail){
        return <div className='text-center'>Select an email to view its detail...</div>
    }
  return (
    <div className='p-10 '>
        {/* <h2 className='w-[60%] text-2xl'>{selectedEmail?.subject}</h2> */}
        <div className='border-2 p-6 rounded-2xl bg-white'>
        <div className='flex justify-between'>
        <div className='flex flex-col my-2'>
        <p className='text-2xl'>{filteredMail[0]?.subject}</p>
        <p>{new Date(filteredMail[0]?.date).toLocaleDateString()}</p>
        </div>
        <p className='bg-pink-600 h-fit text-white px-2 py-1 rounded-3xl'>Mark as favorite</p>
        </div>
        <div dangerouslySetInnerHTML={{__html: selectedEmail?.body}}></div>
        </div>
    </div>
  )
}

export default EmailDetail
