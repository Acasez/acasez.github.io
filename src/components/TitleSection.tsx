interface TitleSectionProps {
  title: string;
  subtitle: string;
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <>
      <div>
        <h1>{title} </h1>
        <h2>{subtitle} </h2>
      </div>
    </>
  );
}
