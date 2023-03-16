import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { StyledCard } from "../styled/StyledCard";
import { StyledBenchContainer } from "../styled/StyledBenchContainer";

export default function BenchContainer({ id, items, title }) {
    const { setNodeRef } = useDroppable({ id });
    const color = items.length > 0 ? "#f5fff5" : "#fff5f5";
    return (
        <StyledBenchContainer id={id} >
            <h2>{title}</h2>
            <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
                <div ref={setNodeRef}>
                    {items.map((id) => (
                        <SortableItem id={id} />
                    ))}
                </div>
            </SortableContext>
        </StyledBenchContainer>
    );
}
