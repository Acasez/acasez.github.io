import CustomTome from "../components/CustomTome";
import TomeUnlock from "../components/TomeUnlock";

export default function AOW4Tomes() {
  return (
    <>
      <div>Age of Tomes 4</div>
      <CustomTome
        name="Tome of Spirits"
        subtitle="Astral/Dark - Communicate with the Lost"
        tier={1}
        description="Communicate and work with spirits of those lost. Focus on protection
        against magic and effects that happen when units die. The Tome of
        Spirits is an early Astral/Dark tome to produce defensive armies and
        supercharge your research."
        tomeImageLocation={"images/AOW4/TomeOfSpirits.png"}
      />
      <TomeUnlock
        name="Ancestral Site"
        tier={1}
        type="Tile Improvement, Structure"
        unitTier={2}
        description="Ancestral sites help you connect to your ancestors and gain more knowledge
      thought lost."
        tags={["Counts as Knowledge Post", "+3 Knowledge per Tome", "+5 Mana"]}
      />
    </>
  );
}
