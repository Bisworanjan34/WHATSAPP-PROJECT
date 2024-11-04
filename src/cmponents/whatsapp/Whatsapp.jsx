import React, { useContext, useEffect, useRef, useState } from 'react'
import './Whatsapp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faBarcode, faBars, faCamera, faChartSimple, faContactBook, faPhone, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faMeta, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Whatsappusers from './whatsappusers/Whatsappusers'
import data from '../../data/whatsappdata/whatsappdata'
// import Searchitem from '../searchitem/Searchitem'
import Whatsappchart from './whatsappchart/Whatsappchart'
import { WhatsappLoginContext } from './whatsappLogin/whatsappLoginContext/WhatsappLoginContext'
import { Navigate, useNavigate } from 'react-router-dom'
import audiochart from '../../audio/audio10.mp3'
const Whatsapp = () => {
let settingRef=useRef()
let navigate=useNavigate()
let toggleRef=useRef()
let whatsappchartref=useRef()
let audiochartRef=useRef()
// let wtspuserRef=useRef()
    let [setting,setSetting]=useState(false)
    let [searchValue,setSearchvalue]=useState('')
    let [whatsappdata,setwhatsappdata]=useState(data)
    let [selectedUser, setSelectedUser] = useState(0);
    let [cata,setCata]=useState(data)
    let [bgcolor,setBgcolor]=useState('')
    let [chart,setChart]=useState('')
    const [chartData, setChartData] = useState({});
    let {whatsappLogin,setWhatsappLogin}=useContext(WhatsappLoginContext)
let chartfun = (e) => {
  setChart(e.target.value);
};

// let handleChart = (e) => {
//   e.preventDefault();
//   setChartData((prevData) => [...prevData, chart]); // update the chartData state array
//   setChart(''); // clear the input field
// };
// let handleChart = (e) => {
//     e.preventDefault();
//     const currentUser = whatsappdata[selectedUser];
//     setChartData((prevData) => ({
//       ...prevData,
//       [currentUser.title]: [...(prevData[currentUser.title] || []), chart],
//     }));
//     setChart('');
//   };
const handleChart = (e) => {
    e.preventDefault();
    const currentUser = whatsappdata[selectedUser];
    setChartData((prevData) => {
      const newData = { ...prevData };
      if (!newData[currentUser.title]) {
        newData[currentUser.title] = [];
      }
      newData[currentUser.title].push(chart);
      return newData;
    });
    setChart('');
  };

  

  let singleuser = (index) => {
    setSelectedUser(index);
  };
    let barfun = () => {
        setSetting(!setting);
       
      }
     useEffect(()=>{
        settingRef.current.style.transform = setting ? 'translate(0)' : 'translate(6.8rem)';
        console.log('hello whatsapp setting bar');
     },[setting])
      let handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue !== '') {
          let newSearchItem = whatsappdata.filter((s) => {
            return s.title.toLowerCase().includes(searchValue.toLowerCase());
          });
          setwhatsappdata(newSearchItem);
        } else {
          setwhatsappdata(data); // show all users when search input is empty
        }
      };
      
     let catafun=(e)=>{
        if(e.target.value=='all'){
            setwhatsappdata(data)
            setBgcolor('')
        }
        else if(e.target.value=='unread'){
            let unreadfilter=cata.filter((f)=>{
                return f.status == 'unread'
            })
            setwhatsappdata(unreadfilter)
            setBgcolor('rgb(254, 213, 213)')
        }
        else if(e.target.value=='favourite'){
            let favouritefilter=cata.filter((f)=>{
                return f.status == 'favourite'
            })
            setwhatsappdata(favouritefilter)
            setBgcolor('rgb(187, 255, 249)')
        }
     }
     useEffect(() => {
        if (whatsappdata.length > 0) {
          setSelectedUser(0);
        }
      }, [whatsappdata]);
    
    let togglefun=()=>{
        toggleRef.current.classList.toggle('active')
        whatsappchartref.current.classList.toggle('activechart')
        audiochartRef.current.play()
        
    }
    //   useEffect(() => {
      
    //   }, [barfun]);
    return (
        <div className='whatsapp-div'>

            <div className="whatsapp-container">

                <div className="super-nav">
                    <div className="whatsapp-nav">
                        <div className="logo">
                        <FontAwesomeIcon icon={faWhatsapp} className='fs-2  icon' />
                            <b>WhatsApp</b>
                        </div>
                        <div className="nav-items">

                            <p><FontAwesomeIcon icon={faBarcode} /></p>
                            <p><FontAwesomeIcon icon={faCamera} /></p>
                            <p className='bars-setting'><FontAwesomeIcon icon={faBars} onClick={barfun} /></p>
                            <div className="settings" ref={settingRef}>
                                <p>Newgroup</p>
                                <p>payment</p>
                                <p>webcode</p>
                                <p>setting</p>
                                <p onClick={()=>{
                                    setWhatsappLogin(false)
                                    Navigate('/whatsapp')
                                }}>Logout</p>
                            </div>
                        </div>
                    </div>
                    <div className="meta-search">
                        {/* <FontAwesomeIcon icon={faMeta}/> */}
                        <div className="meta-ball"></div>
                        <form onKeyUp={handleSubmit}>
                        <input type="text" placeholder='Ask Meta Ai or Search' className=' meta-input' 
                        onChange={(e)=>setSearchvalue(e.target.value)} value={searchValue}
                        />
                    </form>
                    </div>
                    <div className="whatsapp-cata">
                        <button onClick={catafun} value={'all'}>All</button>
                        <button onClick={catafun} value={'unread'}>Unread</button>
                        <button onClick={catafun} value={'favourite'}>Favourites</button>
                        <button onClick={catafun} value={'group'}>Groups</button>
                    </div>
                </div>
                <div className="whatsapp-user-div" >
                    {
                        whatsappdata.length>0&& whatsappdata.map((w,i) => {
                            return (
                                <div key={i}  className={selectedUser === i ? "selected-user" : ""}
                                onClick={() => singleuser(i)}
                                style={{background:bgcolor}}
                    >
                                    <Whatsappusers
                                        title={w.title}
                                        image={w.img}
                                        msg={w.mssg}
                                        time={w.time}
                                        count={chartData[w.title] ? chartData[w.title].length : 0} 
                                        chartData={chartData[w.title]} 

                                    />
                                </div>
                            )
                        })
                    }
                    <div className="extra-div text-center">
                        <h1 className='fs-5'>Thanks for using whatsapp</h1>
                        <FontAwesomeIcon icon={faWhatsapp} className='fs-1' />
                    </div>
                </div>
                {/* ------------------whatsapp footer div---------- */}

                <div className="whatsapp-footer">
                    <div className="charts">
                        <div className="footer-icons">
                            <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        <h5 className='ms-1'>Charts</h5>
                    </div>
                    <div className="update">
                        <div className="footer-icons">
                            <FontAwesomeIcon icon={faUpload} />
                        </div>
                        <h5>Updates</h5>
                    </div>
                    <div className="communites">
                        <div className="footer-icons">
                            <FontAwesomeIcon icon={faContactBook} />
                        </div>
                        <h5>Contact</h5>
                    </div>
                    <div className="calls">
                        <div className="footer-icons">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <h5 className='ms-1'>Calls</h5>
                    </div>
                </div>


            </div>
{/* -------------------------whatsapp chart----------------------------- */}
            <div className="whatsappchart-div " ref={whatsappchartref}>
                <div className="title">
                    <div className='d-flex'>
                    <p className=''>Chart</p>
                    <div className='toggle-div 'ref={toggleRef} 
                    onClick={togglefun}
                    >
                    <div className="toggle"></div>
                    </div>
                    <audio src={audiochart} ref={audiochartRef}></audio>
                    </div>

                    <div className="userchart-div m-3 overflow-auto ">
                    <Whatsappchart 
                        title={whatsappdata[selectedUser]?.title} 
                        chartData={chartData[whatsappdata[selectedUser]?.title]} 
                      />

                    </div>
                </div>
                <div className="userchart-input">
                    <form action="" onSubmit={handleChart}>
                        <input type="text" value={chart} onChange={chartfun} placeholder='Type a message .....' />
                    </form>
                </div>
            </div>

         
        </div>
    )
}

export default Whatsapp
