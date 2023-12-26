import React, { useState } from "react";
const Child = ({ data, setData }) => {


    const handler = (id) => {


        let updatedData = []
        for (let t of data) {

            if (t.id != id) {
                updatedData.push({ ...t })
            }
            else {
                let k = { ...t }
                k.status = "completed"
                updatedData.push(k)
            }
        }
        setData(updatedData)
    }




    return (<>
        <div>
            <h1>child component</h1>
            {
                data.map((row) => {
                    return (<>
                        <ul>
                            <li>{row.title}
                                {/* <button key={row.id} onClick={()=>handler(row.id)} >{row.id}complete</button> */}

                                {row.status == "not completed" && <button key={row.id} onClick={() => handler(row.id)} >{row.id}complete</button>
                                }


                            </li>
                        </ul>
                    </>)

                })
            }
        </div>



    </>)
}
export default Child
