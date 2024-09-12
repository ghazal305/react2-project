import { useState } from 'react';
import './FormStyle.css';
import Modal from './Modal';

export default function LoanForm(){
    const[errorMassage,setErrorMassage]=useState(null);
    const[showModal,setShowModal]=useState(false);
    const[loanInput,setLoanInput]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        salaryRange:'',
    });

    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMassage(null)
        const{age,phoneNumber}=loanInput;
        if(age<18 || age>100){
            setErrorMassage("this age is not allowed")
        }else if(phoneNumber.length<10||phoneNumber.length>12){
            setErrorMassage("phone number is incorrect")
        }
        setShowModal(true)

    }

    const btnIsDisabled = loanInput.name ==="" || loanInput.phoneNumber ==="" ||loanInput.age ==="" ;
    function handleBtnClick (){
        if(showModal){
            setShowModal(false)
        }
    }

    return(
        <div 
        onClick={handleBtnClick}
        className="flex "
        style={{flexDirection:"column"}}
         >
            <form id='loan-form' className="flex"
             style={{flexDirection:"column"}}>
                <h1> requesting a loan</h1>
                <hr></hr>
                <label> name </label>
                <input value={loanInput.name} onChange={(event)=>{
                        setLoanInput({...loanInput , name:event.target.value})
                    }}
                />

                <label> Phone Number </label>
                <input value={loanInput.phoneNumber} onChange={(event)=>{
                        setLoanInput({...loanInput , phoneNumber:event.target.value})
                    }}
                />

                <label> age </label>
                <input value={loanInput.age} onChange={(event)=>{
                        setLoanInput({...loanInput , age:event.target.value})
                    }}
                />

                <label> are you an employee ?  </label>
                <input type='checkbox' checked={loanInput.isEmployee} onChange={(event)=>{
                        setLoanInput({...loanInput , isEmployee:event.target.checked})
                    }} 
                />

                <label> salary </label>
                    <select value={loanInput.salaryRange} onChange={(event)=>{
                            setLoanInput({...loanInput , salaryRange:event.target.value})
                        }} 
                    >
                        <option>less than 500$</option>
                        <option> btween 500$ and 2000$</option>
                        <option> above 2000$</option>
                    </select>
                
                <button 
                    className={btnIsDisabled ? "disable":""}
                    onClick={handleFormSubmit}
                    disabled ={btnIsDisabled}
                    id='submit-loan-btn'
                    >submit </button>
            </form>
            <Modal errorMassage={errorMassage} isVisible={showModal} />
        </div>
    );
}