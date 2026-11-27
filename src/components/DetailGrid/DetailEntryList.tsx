import type { DetailEntry } from '../../types/portfolio'
import { DetailGrid, DetailItem } from './DetailGrid'

type DetailEntryListProps = {
  entries: DetailEntry[]
}

/** Renders title / meta / description entries (achievements, certifications) in a DetailGrid. */
function DetailEntryList({ entries }: DetailEntryListProps) {
  return (
    <DetailGrid>
      {entries.map((entry, index) => (
        // Index is part of the key because placeholder entries can share a title
        <DetailItem key={`${entry.title}-${index}`} title={entry.title}>
          <p>{entry.meta}</p>
          <p>{entry.description}</p>
        </DetailItem>
      ))}
    </DetailGrid>
  )
}

export default DetailEntryList
