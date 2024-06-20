import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { emailRegex, validationMessages } from '../../../utils/Admin/Validation';
import { emailRequest } from '../../../actions/Admin/EmailAction';
import { useDispatch, useSelector } from 'react-redux';
import Relevantz from '../../../assets/Admin/Images/Relevantz.png';
import '../../../Styles/Admin/Loginpage.css';

function Email() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const isSuccessemail = useSelector((state) => state.email.isSuccessemail);

    const email = useSelector((state) => state.email.email);
    
    console.log("Emaildd",email);
   
    useEffect(() => {
        if (isSuccessemail) {
            setTimeout(() => {
                navigate('/forgotpassword', { state: { email:email } });
            }, 2000);
        }
    }, [isSuccessemail, navigate]); 

    const onSubmit = (data) => {
        dispatch(emailRequest(data));
    };

    return (
        <div className='login-app'>
            <div className='login-container'>
                <div className="loginform-container">
                    <div className="login-header">
                        <img src={Relevantz} alt="Logo" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register('email', {
                                    required: validationMessages.email.required,
                                    pattern: {
                                        value: emailRegex,
                                        message: validationMessages.email.pattern
                                    }
                                })}
                                type='text'
                                placeholder='Email'
                             
                            />
                        </div>
                        <p className='errormessgae'>{errors.email?.message}</p>
                        <div className='button-login'>
                            <button className='btn'>Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Email;