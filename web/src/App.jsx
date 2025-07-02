import './App.css'
function App() {
  return(
    <div>
      <div className='topic'>
        <p>INTEQC MOOC</p>
      </div>
      <div>
        <img src= "" alt="" className='pic'/>
      </div>
      <div className='info'>
        <p>พัฒนาฝีมือไปพร้อมกันกับ INTEQC MOOC</p>
          <div className='list'>
            <p className='l1'>เรียนฟรี</p>
            <p className='l1'>เรียนได้ทุกที่ ทุกเวลา</p>
            <p className='l1'>พร้อมรับ Certificate</p>
          </div>
      </div>
      <div className='Nav'>
          <li>
            <p className='liNav'>บุคคลทั่วไป1</p>
            <p className='liNav'>บุคคลทั่วไป2</p>
            <p className='liNav'>บุคคลทั่วไป3</p>
          </li>
      </div>
      <div className='logo_ticker'>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <footer className='footer'>
        &copy; {new Date().getFullYear()} INTEQC MOOC. All rights reserved.
      </footer>
    </div>
  )
}
export default App