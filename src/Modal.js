import './FormStyle.css';
export default function Modal({isVisible,errorMassage=null}){
    if(isVisible){
        return(
                <div id="modal">
                    <div id="modal-content">
                    <h1 style={{color:errorMassage ?"red":"green"}} >
                        {errorMassage!=null?errorMassage:"the form has been submited successfly"}
                    </h1>
                    </div> 
                </div>
            )
    }else{
        <></>
    }  
}