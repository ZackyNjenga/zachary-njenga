import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";

const Grid = () => {
    return (
        <section>
            <BentoGrid>
                {[{ title: 'Title1', description: 'Description1'}].map((
                    item, i) =>(
                    <BentoGridItem/>))}
            </BentoGrid>
        </section>
    )
}
export default Grid
