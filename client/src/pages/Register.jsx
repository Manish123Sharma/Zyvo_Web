import React from 'react';
import './styles/Register.css';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [dob, setDOB] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [heightUnit, setHwightUnit] = useState('');
    const [weightUnit, setWeightUnit] = useState('');

    return (
        <div className="signup-container">
            <div className="signup-left">
                <h1 className='signup-heading'>
                    Zyvo
                </h1>
            </div>
        </div>
    );
}

export default Register;
