import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface ToastState {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
}

const initialState: ToastState = {
    message: '',
};

export const toastMessageSlice = createSlice({
    name: 'toastMessage',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<ToastState>) => {
            state.message = action.payload.message;
            let bgColor = '#5D804F';
            let textColor = '#fff';

            switch (action.payload.type) {
                case 'success':
                    bgColor = '#5D804F';
                    break;
                case 'error':
                    bgColor = '#CB4340';
                    break;
                case 'info':
                    bgColor = '#1D5F77';
                    break;
                case 'warning':
                    bgColor = '#FDF3E4';
                    textColor = '#231528';
                    break;
                default:
                    bgColor = '#5D804F';
                    break;
            }

            toast(action.payload.message, {
                hideProgressBar: true,
                autoClose: 5000,
                position: 'top-right',
                style: {
                    backgroundColor: bgColor,
                    color: textColor,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '14px',
                },
            });
        },
    },
});

export const { addMessage } = toastMessageSlice.actions;

export default toastMessageSlice.reducer;
