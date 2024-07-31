import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmails } from '../features/email/emailsSlice';
import EmailItem from './EmailItem';

function EmailList() {
    const dispatch=useDispatch();
    const {list, loading, error}=useSelector((state)=> state.emails);
    console.log('listlist=', list);
    useEffect(()=>{
        dispatch(fetchEmails());
    }, [dispatch])
    if(loading){
        return <div className='text-center'>Loading...</div>
    }
    if(error){
        return <div className='text-center text-red-500'>Error: {error}</div>
    }
  return (
    <div className='border-r overflow-auto h-full'>
        {
            list?.map((email)=>(
                <EmailItem email={email} key={email?.id} />
            ))
        }
    </div>
  )
}

export default EmailList
