import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmails=createAsyncThunk("emails/fetchEmails", async()=>{
    const res=await fetch("https://flipkart-email-mock.vercel.app/");
    const data=await res.json();
    console.log('data=', data);
    return data?.list;
})

export const fetchEmail=createAsyncThunk("/emails/fetchEmail", async(id)=>{
    const res=await fetch(`https://flipkart-email-mock.vercel.app/?id=${id}`);
    const data=await res.json();
    console.log('detail data=', data);
    return data;
})

const emailsSlice=createSlice({
    name: 'emails',
    initialState: {
        list: [],
        selectedEmail: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchEmails.pending, (state, action)=>{
            state.loading=true;
            state.list=action.null;
        })
        .addCase(fetchEmails.fulfilled, (state, action)=>{
            state.loading=false;
            state.list=action.payload;
        })
        .addCase(fetchEmails.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
        .addCase(fetchEmail.pending, (state, action)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchEmail.fulfilled, (state, action)=>{
            state.loading=false;
            state.selectedEmail=action.payload;
        })
        .addCase(fetchEmail.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default emailsSlice.reducer;
