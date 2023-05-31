import Square from '../svgs/Square'
import { useState } from 'react'
import Check from '../svgs/Check'
import './Checkbox.css'

const Checkbox = () => {

    const [isClicked, setIsClicked] = useState(false)


  return (
    <div className="taskCheck" onClick={() => {isClicked ? setIsClicked(false) : setIsClicked(true)}}>
    <Square />
    {isClicked && <Check />}
  </div>
  )
}

export default Checkbox
