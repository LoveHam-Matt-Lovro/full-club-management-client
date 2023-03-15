import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { handleDragStart, handleDragOver, handleDragEnd } from "./dragHandlers"
import { useSelection } from "../../Hooks/useSelection";
import { useSelectionDNDKIT } from "../../Hooks/useSelectionDNDKIT";

function DragAndDrop({ data, gameId }) {
    const [selection, setSelection] = useSelectionDNDKIT(`${process.env.REACT_APP_API_URL}/games/${gameId}/selection`)
    const [items, setItems] = useState(data);

    const firstNames = Object.keys(selection).map((key) => {
        return selection[key].map((player) => player.firstName)
    })

    return (
        <div className="App">
            <pre>{JSON.stringify(firstNames, null, 2)}</pre>

            <DndContext
                collisionDetection={closestCenter}
                onDragStart={(e) => handleDragStart(e)}
                onDragOver={(e) => handleDragOver(e, setSelection, selection)}
                onDragEnd={(e) => handleDragEnd(e, setSelection, selection)}
            >
                <div style={{ display: "flex", border: "1px solid black", justifyContent: "space-around", width: "600px" }}>
                    {Object.keys(selection).map((key) => {
                        const a = selection[key]

                        return (
                            <Container
                                key={key}
                                id={key}
                                items={selection[key]}
                                title={key}
                            />
                        );

                    })}
                </div>
            </DndContext>
        </div>
    );


}

export default DragAndDrop;
