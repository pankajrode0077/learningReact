import React from "react";
import "./App.css";
import stickyNotes from "./assets/stickyNotes/stickyNotes.png";

function StickyNotes(props) {
    return (<>
                {props.expanded ?
                        <div className="sidenavs">
                            <img alt="sticky notes" className="sticky-note"
                                src={stickyNotes}>
                            </img>
                        </div> : <p>Sticky Notes</p>
                }
            </>);
}

export default StickyNotes;
