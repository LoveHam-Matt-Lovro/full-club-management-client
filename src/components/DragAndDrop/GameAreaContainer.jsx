import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { StyledGameArea } from "../styled/StyledGameArea";

export default function GameAreaContainer({ id, items, title }) {
    const { setNodeRef } = useDroppable({ id });
    const color = items.length > 0 ? "#f5fff5" : "#fff5f5";
    return (
        <StyledGameArea id={id} className='p-3' align="center">

            <SortableContext id={id} items={items} strategy={horizontalListSortingStrategy}>
                <div ref={setNodeRef} style={{ display: "flex", flexWrap: "wrap" }}>
                    {items.map((id) => (
                        <SortableItem id={id} />
                    ))}
                </div>
            </SortableContext>
        </StyledGameArea>
    );
}
