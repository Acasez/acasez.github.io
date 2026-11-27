interface ListProps {
  listHeader: string;
  listContent: string[];
}

export default function List({ listHeader, listContent }: ListProps) {
  return (
    <div className="flex flex-col gap-2 ml-5 mt-5 w-full">
      <h3 className="text-3xl text-striking mt-2">{listHeader}:</h3>
      <ul>
        {listContent.map((listEntry) => (
          <li
            className="before:content-['✓_'] before:text-green-500 before:font-bold text-xl"
            key={listEntry}
          >
            {listEntry}
          </li>
        ))}
      </ul>
    </div>
  );
}
