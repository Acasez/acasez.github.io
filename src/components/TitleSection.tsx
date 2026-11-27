interface TitleSectionProps {
  title: string;
  subtitle: string;
  extraLine?: string;
  topBorder: boolean;
}

export default function TitleSection({
  title,
  subtitle,
  extraLine,
  topBorder,
}: TitleSectionProps) {
  return (
    <>
      <div
        className={`relative my-1 flex flex-col gap-1 bg-gray-100 py-2 text-center
   ${topBorder ? "before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-linear-to-r before:from-red-100 before:via-red-500 before:to-red-100" : ""}`}
      >
        <h1 className="text-4xl font-bold">{title} </h1>
        <h2 className="text-xl">{subtitle} </h2>
        {extraLine && <h3>{extraLine} </h3>}
      </div>
    </>
  );
}
