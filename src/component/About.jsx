import React, { useState } from "react"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"


export default function About(props){
    console.log(props)



    const [date, setDate] = useState("")
    return(

        
        <div>
            <h3 className=""></h3>
            {/* <h2>Ran</h2> {props.title}
            <h3>Our MISSION is to welcome, engaged, and committed to
                 innovation and excellence in education, research,
                  creative activity, and community partnerships. 
                  It dares to be different and draws on its diversity to transform the 
                  individual, strengthen society and enrich the world.</h3>
                  <form>
            <label htmlFor="date">Date</label>
            <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={date}
                              onChange={(value) => setDate(value)}
                              options={{ calenderLocale: "ne", valueLocale: "en" }} />
        </form> */}
        <div>
            {/* <button className="btn btn-primary ">
                hey{props.tag}

            </button> */}
        </div>
        </div>

        
    )
}