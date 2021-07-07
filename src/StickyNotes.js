import React from "react";
import "./App.css";
import stickyNotes from "./assets/stickyNotes/stickyNotes.png";

function StickyNotes(props) {
    return (<>
                {props.expanded ?
                        <div className="App">
                            <img alt="sticky notes"
                                height="200px"
                                width="250px"
                                src={stickyNotes}>
                            </img>
                        </div> : <div>Sticky Notes</div>
                }
            </>);
}

export default StickyNotes;
