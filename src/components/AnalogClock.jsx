import React, { useState, useEffect } from 'react'

const AnalogClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourRotation = (hours * 30) + (minutes * 0.5)
  const minuteRotation = (minutes * 6) + (seconds * 0.1)
  const secondRotation = seconds * 6

  return (
    <div className="clock-container">
      <h3 className="text-center mb-3">Current Time</h3>
      <div className="analog-clock">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="clock-number" style={{ '--n': i }}>
            <span>{i === 0 ? 12 : i}</span>
          </div>
        ))}
        <div className="hour-hand clock-hand" style={{ transform: `rotate(${hourRotation}deg)` }} />
        <div className="minute-hand clock-hand" style={{ transform: `rotate(${minuteRotation}deg)` }} />
        <div className="second-hand clock-hand" style={{ transform: `rotate(${secondRotation}deg)` }} />
        <div className="clock-center" />
      </div>
      <div className="text-center mt-3">
        <h4>{time.toLocaleTimeString()}</h4>
        <p className="text-muted">{time.toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default AnalogClock;
