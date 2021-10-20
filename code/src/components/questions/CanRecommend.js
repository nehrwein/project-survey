import React from "react"
import RangeSlider from "../inputTypes/RangeSlider"

const Recommendation = ({
  recommend, 
  setRecommend,
  onStepChange
}) => {
  return(
    <form>
      <label>How likely is it, that you would recommend the portfolio to a friend or colleague?  
        <RangeSlider
          value={recommend}
          setValue={setRecommend}
          min={1}
          max={5}
        />
        <button onClick={onStepChange}>Next question</button>
      </label>
    </form>
  )
}

export default Recommendation