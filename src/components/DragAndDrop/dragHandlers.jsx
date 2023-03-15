import { arrayMove } from "@dnd-kit/sortable";
function findContainer(id, items) {
    if (id in items) {
        return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
}

export function handleDragStart(event) {
    const { active } = event;
    const { id } = active;
}

export function handleDragOver(event, hook, items) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id, items);
    const overContainer = findContainer(overId, items);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
        return;
    }

    hook((prev) => {
        const activeItems = prev[activeContainer];
        const overItems = prev[overContainer];

        // Find the indexes for the items
        const activeIndex = activeItems.indexOf(id);
        const overIndex = overItems.indexOf(overId);

        //console.log dragged item




        let newIndex;


        const newItems = {
            // Copy the items from the previous state
            ...prev,
            [activeContainer]: [...prev[activeContainer].filter((item) => item !== active.id)],
        };

        newItems[overContainer] = [
            // Copy the items from the previous state
            ...prev[overContainer].slice(0, newIndex),
            // Add the dragged item
            items[activeContainer][activeIndex],
            // //
            // ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ];

        console.log(newItems);
        return newItems;
    });
}

export function handleDragEnd(event, hook, items) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id, items);
    const overContainer = findContainer(overId, items);

    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
        return;
    }

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
        hook((items) => ({
            ...items,
            [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
        }));

        // const a = { ...items, [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex) }
        // alert(JSON.stringify(a));
    }


}
