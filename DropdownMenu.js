import React from 'react'
import DropDownItem from "./DropdownItem"
/*can import an image here by following this: import img from "link to image"*/


export const DropdownMenu = () => {
  return (
    <div className='dropdown'>
        <DropDownItem>
           <h4>item one</h4> 
           <p>This is a paragraph
           </p>
        </DropDownItem>
        <DropDownItem>
           <h4>item two</h4>
            <li><a href='#'>Item one</a></li>
            <li><a href='#'>Item two</a></li>
            <li><a href='#'>Item three</a></li>
            <li><a href='#'>Item four</a></li>
            <li><a href='#'>Item five</a></li>
        </DropDownItem>
        <DropDownItem>
           <h4>item three</h4>
                <div className='support'>
                    <p>This is another paragraph</p>
                </div> 
        </DropDownItem>
    </div>
  )
}
