import React from "react";
import styles from "./Login.module.css";
import { useToast,Button,PinInput,HStack,PinInputField } from '@chakra-ui/react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleUsername } from "../features/Cart/Cart";

const Login = () => {
    const name='Shivani Chauhan'
  const dispatch = useDispatch()
    const [status,setStatus] = useState(false)
    function ToastExample() {
        const toast = useToast()
        return (
          <button
        className={styles.otp_btn}

            onClick={
                
                () =>{
                    
              toast({
                title: 'OTP sent successfully',
                description: "Your OTP is 1876.",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
              })
                setStatus(true)
             
            }
        }>
    SEND ME OTP      
          </button>
        )
      }
 
   
     
  return (
    
      <div className={styles.container}>
        <div className={styles.img_left}>
          <img
            className={styles.image}
            src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          />
        </div>
        <div className={styles.img_right}>
          <div className={styles.hi_image}>
            <img src="https://media.sugarcosmetics.com/upload/Hi!.png" />
          </div>
          <div className={styles.logininput}>
            <h3>Login/Sign Up Using Phone</h3>
          </div>
          
        {!status?  <div className={styles.input_box}>  <div className={styles.input_num}>+91</div>
            <div><input className={styles.input_item} type="text" /></div>
          </div> : <div style={{border:'1px solid gray', borderRadius:'10px', padding:'5px'}}>
          <HStack>
  <PinInput defaultValue=''>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack></div>
             }
          <div className={styles.text}>

            Registering for this site allows you to
            access your order status and history. Just fill in the above
            fields, and we'll get a new account set up for you in no time. We
            will only ask you for information necessary to make the purchase
            process faster and easier.

          </div>
          <div>
       {!status?    <ToastExample/>:<Link to='/' ><button className={styles.otp_btn} onClick={()=>{dispatch(toggleUsername(name))
    }}>VALIDATE OTP</button></Link>}
        </div>
            <hr className={styles.dotted_line}/>
      </div>
    </div>
    
  );
};

export default Login;