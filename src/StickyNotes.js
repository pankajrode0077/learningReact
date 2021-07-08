import React, { useState } from "react";
import "./App.css";
import stickyNotes from "./assets/stickyNotes/stickyNotes.png";
import ReactStickies from 'react-stickies';

function StickyNotes(props) {
    const [notes,setNote]= useState([])

     const onChange =(notes)=> {
        setNote(notes);
      }
    return (<>
        {props.expanded ?
            <div className="sidenavs sticky-note">
                <ReactStickies
                    notes={notes}
                    isResizable={true}
                    onChange={onChange}
                />
                {/* <img alt="sticky notes" className="sticky-note"
                    src={stickyNotes}>
                </img> */}
            </div> : <p>Sticky Notes</p>
        }
    </>);
}

export default StickyNotes;
