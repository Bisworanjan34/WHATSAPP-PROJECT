import React from 'react'
import './Whatsappusers.css'
import biswo from '../../../images/profile-2.jpg'
const Whatsappusers = ({title,image,msg,time,count,chartData}) => {
  // const chartLength = chartData && chartData[title] && chartData[title].length;
  // const lastSubmittedTime = chartData && chartData[title] && chartData[title][chartLength - 1] && chartData[title][chartLength - 1].time;


  return (
    <div className='whatsapp-users'>
      <div className="whatsapp-user-img">
        <img src={image} alt="" />
      </div>
      <div className="whatsapp-info">
        <h5>{title}</h5>
        <p>{msg}</p>
      </div>
      <div className="whatsapp-user-msg-time">
      <h3>{time}</h3>

        <div className="whatsapp-msg-count">
        {/* <p>{chartData && Object.keys(chartData).length}</p> */}
        <p>{count}</p>



        </div>

      </div>
     
    </div>
  )
}

export default Whatsappusers
