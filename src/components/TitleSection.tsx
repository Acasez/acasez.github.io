interface TitleSectionProps {
  title: string;
  subtitle: string;
  extraLine?: string;
}

export default function TitleSection({
  title,
  subtitle,
  extraLine,
}: TitleSectionProps) {
  return (
    <>
      <div className="mb-0.5 bg-gray-200 relative justify-center flex flex-col">
        <h1 className="text-2xl">{title} </h1>
        <h2 className="text-lg">{subtitle} </h2>
        {extraLine && <h3>{extraLine} </h3>}
      </div>
    </>
  );
}
