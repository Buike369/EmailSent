import React ,{useState}from 'react'
import "./style/home.css"
import backgroundImageDiv from "./img/imgBack.jpg"
import back1 from "./img/machine.jpg"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'
import validator from 'validator';

const Home = ()=> {
  const [inputs,setInputs]=useState({
    name:"",
    state:"",
    mobileNumber:"",
    email:"",
    residentialAddress:"",
    interest:"",
    city:''

  })
  const [check,setCheck]=useState(false)
  const [check1,setCheck1]=useState(false)
  const [check2,setCheck2]=useState(false)
    const [agreement, setAgreement] = useState(false);
    const [message,setMessage]=useState("")
     

    const pickSelection =()=>{
    setCheck(true)
     setCheck1(false)
      setCheck2(false)
  }

  const changeHandle =(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value,pickSelection}))
  }
const handleChange = (event) => {
    setAgreement(event.target.checked);
  }

  const postInfo =(e)=>{
e.preventDefault()
    if((inputs.firstName.length === 0) || (inputs.lastName.length === 0) || (inputs.mobileNumber.length === 0) || (inputs.interest.length === 0) || (inputs.address.length === 0) || (inputs.email.length === 0)){
      console.log("field must not be empty")
    }else if(validator.isEmail(inputs.email) === false){
console.log("invalid Email")
    }else{

      axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
        setMessage("Successfully submitted Your form")
      }).catch((err)=>{
       console.log(err)
      })
    } 
  }

 
  return (
    <div>
      <div className="headerLogoDiv">
        <div className="headerLogo" >
          <div className="ppc">
          <a href="/" className="forMe">
       <div className="LogoP "><p className="LogoN">TSYEF</p></div>
        <p className="LogoSubT">Empowering the future</p>
        </a>
        </div>
        </div>

      </div>

    <div style={{backgroundImage:`url(${backgroundImageDiv})`, backgroundRepeat:"no-repeat",  backgroundSize: "100% 100%",width:"100%"}} className='mainDivH'>
      <div className='pip'>
      <div className="pathFile">
<div className="heroText">

  <div  className='widthPar'>
    <p className="heroTextY">Empowering Youths for Success and Sustainability</p>
     <p className="investIn">Facilitate Skill Development and Access to Machinery and Equipment</p>
  </div>

    <div className='widthPar'>
      <div className='spaceBar'>
      <div className='formDiv'>
      <form >
        <div>
            <div className="regDiv">Registration</div>
        </div>
        <label className="labelName">Name</label>
        <div><input type="text" placeholder="name" name="name" className='inputCheck' onChange={changeHandle}/></div>
       
         <label className="labelName">Mobile Number</label>
        <div><input type="number" placeholder="mobile number" name="mobileNumber" className='inputCheck' onChange={changeHandle} style={{color:"#000"}} min="0" max={5}/></div>
         
           <label className="labelName">Email</label>
        <div><input type="email" placeholder="email" name="email" className='inputCheck' onChange={changeHandle} /></div>
          <label className="labelName">Residential Address</label>
        <div><input type="text" placeholder="address" name="residentialAddress"  className='inputCheck' onChange={changeHandle} style={{color:"#000"}}/></div>
        <label className="labelName">City</label>
        <div><input type="text" placeholder="city" name ="city" className='inputCheck' onChange={changeHandle}/></div>
         <label className="labelName">State</label>
        <div><input type="text" placeholder="state" name ="state" className='inputCheck' onChange={changeHandle}/></div>
        <label className="labelName">Interest</label>
        <div className="filesDiv">
          <div>
          <input type="checkbox" id="training" name="interest" value="training" onChange={changeHandle} />
          <label  htmlFor="training" className="loansD">Training</label>
          </div>

          <div>
          <input type="checkbox" id="loan" name="interest" value="loan" onChange={changeHandle} />
           <label  htmlFor="loan" className="loansD">Loan</label>
          </div>

          <div>
          <input type="checkbox" id="grants" name="interest" value="grant" onChange={changeHandle}  />
           <label  htmlFor="grants" className="loansD">Grants</label>
          </div>
        </div>
        <div>
          <input type="checkbox" name="agreement"  onChange={handleChange}/>
          <label  htmlFor="agree" className="agree">
            By clicking here I give my consent for <span></span>TSYEF to contact me for marketing purposes. You can opt out at any time. For further details please see our Marketing and Communication Policy Statement.
          </label>
        </div>

        <div className='submit1'><button disabled={!agreement} className="submit" onClick={postInfo}  style={{backgroundColor:!agreement ?"gray":"#5a3881"}}>Submit</button></div>

        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        </div>

        
         <div style={{backgroundImage:`url(${back1})`, backgroundRepeat:"no-repeat",  backgroundSize: "100% 100%",width:"100%",height:"450px",position:'relative'}} className="uma">
          <div className="ppLink"></div>
                    <div style={{position:"absolute",left:'0',right:"0",top:"0",bottom:"0"}}className='pinkL'>
          <div className="pathFile" >
          <div style={{}}>
              <p className="OBjy">Objective of TSYEF</p>
              <div className="spaceBar">
              <div className="OBJDiv">
                <div className="skillDiv">
                  <p className="facility">Facilitate Skill Development</p>
                  <p className="tap">Offer comprehensive training programs and workshops to enhance the skill sets of aspiring young entrepreneurs, empowering them with practical knowledge and expertise.</p> 
                </div>
                <div className="skillDiv">
               <p className="facility">Provide Access to Machinery and Equipment</p>
               <p className="tap"> Establish partnerships and collaborations with industry leaders to make advanced machinery and equipment accessible to our beneficiaries, reducing barriers to entry for their ventures</p>
                </div>
              </div>
                <div  className="OBJDiv">
                <div  className="skillDiv">
                  <p className="facility">Foster Mentorship and Guidance</p>
                  <p className="tap" >Pair youths with experienced mentors who can offer valuable insights, guidance, and support throughout their entrepreneurial journey, aiding them in overcoming challenges and seizing opportunities.</p> 
                </div>
                <div  className="skillDiv">
               <p className="facility">Promote Talent Recognition</p>
               <p className="tap">Organize events, showcases, and promotional activities to bring hidden talents into the limelight, fostering a nurturing ecosystem that celebrates creativity and uniqueness.</p>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
        </div>

       
        <div className='footerDidV'>
          <div className='pathFile'>
            <div>
              <ul className="footerIconsUl">
               <li><a href=""><FontAwesomeIcon icon={faFacebook} className="iconSize " /></a></li>
               <li><a href=""><FontAwesomeIcon icon={faTwitter} className="iconSize" /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faLinkedin} className="iconSize" /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faTelegram} className="iconSize" /></a></li>
              </ul>
              </div>
            <p className="pli">TSYEF (Today's Selfless Youths Empowerment Foundation) is a dynamic and socially driven enterprise committed to empowering youths, aged 18 to 45 years, to pursue and sustain their goals successfully. Our primary objective is to equip young individuals with essential skills, cutting-edge machinery, and state-of-the-art equipment to ensure their journey towards self-reliance and prosperity.</p>
            {/* <p>Our primary target market includes youths aged 18 to 45 years with an entrepreneurial spirit, a passion for creativity, and a desire to achieve self-reliance. We will focus on both urban and rural areas, ensuring inclusivity and equal opportunities for all.</p> */}
          <p className="pli">

We believe that empowering youths with skills, machinery, and opportunities is the key to unlocking their potential and creating a brighter future for all. By focusing on sustainable development, mentorship, and talent recognition, we are committed to being a catalyst for positive change and fostering a new generation of successful and socially responsible entrepreneurs.


</p>
<p  className="pli">Join us on this transformative journey to make a lasting impact on the lives of youths and the communities they serve. Together, we can empower dreams and build a better tomorrow.
</p>
<p className="copyRight">©  2023  TSYEF</p>
          </div>
        </div>
        

    </div>
  )
}

export default Home