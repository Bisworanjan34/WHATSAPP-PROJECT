import React from 'react'
import './Whatsappchart.css'
import Whatsapp from '../Whatsapp'
import Whatsappusers from '../whatsappusers/Whatsappusers'
const Whatsappchart = ({title,chartData}) => {
  return (
    <div className='whatsappchart-comp'>
    
      <h5>Name: {title} </h5>
      <div className="livechart " >
     
      <ul className=' list-unstyled'>
      {Array.isArray(chartData) && chartData.length > 0 && (
            chartData.map((data, index) => {
              return (
                <div key={index}>
                  <li
                    className='border my-2 rounded mx-2'
                    style={{
                      fontSize: '15px',
                      padding: '8px 20px',
                      border: '2px solid green',
                      background: 'white',
                      display: 'inline-block',
                    }}
                  >
                    {data}
                  </li>
                </div>
              );
            })
          )}

      </ul>


      </div>
    </div>
  )
}

export default Whatsappchart
