import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./BenchContainer";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { handleDragStart, handleDragOver, handleDragEnd } from "./dragHandlers"
import { useSelection } from "../../Hooks/useSelection";
import { useSelectionDNDKIT } from "../../Hooks/useSelectionDNDKIT";
import { StyledCard } from "../styled/StyledCard";


import GameAreaContainer from "./GameAreaContainer";


function DragAndDrop({ data, gameId }) {
    const [selection, setSelection] = useSelectionDNDKIT(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)
    const [items, setItems] = useState(data);

    const firstNames = Object.keys(selection).map((key) => {
        return selection[key].map((player) => player.firstName)
    })

    return (
        <div className="App">


            <DndContext
                collisionDetection={closestCenter}
                onDragStart={(e) => handleDragStart(e)}
                onDragOver={(e) => handleDragOver(e, setSelection, selection)}
                onDragEnd={(e) => handleDragEnd(e, setSelection, selection)}
            >
                <div style={{ display: "flex", border: "1px solid black", justifyContent: "space-around", width: "600px" }}>



                    <main style={{ display: "flex", border: "1px solid black", justifyContent: "space-around", width: "600px", flexDirection: "column" }}>
                        {Object.keys(selection).filter(key => key === "bench").map((key) => {
                            return (
                                <Container
                                    id={key}
                                    items={selection[key]}
                                    title={key}
                                />
                            )
                        })}

                    </main>



                    <div selection style={{ display: "flex", border: "1px solid black", justifyContent: "flex-start", width: "600px", flexDirection: "column", }}>
                        {Object.keys(selection).filter(key => key !== "bench").map((key) => {
                            return (
                                <GameAreaContainer
                                    id={key}
                                    items={selection[key]}
                                    title={key}

                                />
                            )
                        })}

                    </div>
                </div>
            </DndContext>
        </div>
    );


}

export default DragAndDrop;
