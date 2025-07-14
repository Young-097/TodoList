import { useState } from "react";

const filter = [
    {id: 0, label: "전체보기"},
    {id: 1, label: "완료된 항목 숨기기"},
    {id: 2, label: "완료된 항목만 보기"},
]

function Filter ({filterId, setFilterId}) {
    
    return(
        <>
            <select
            value={filterId} 
            onChange={(e)=>{setFilterId(Number(e.target.value))}}>
                {filter.map((el)=> 
                <option
                key={el.id}
                value={el.id}>
                    {el.label}
                    </option>
            )}
            </select>
        </>
    )
}

export default Filter;