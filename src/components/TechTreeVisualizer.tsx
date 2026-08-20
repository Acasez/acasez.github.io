import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";

interface TechTreeProps {
  title: string;
  jsonPath: string;
}

const networkOptions = {
  layout: { randomSeed: 42 },
  groups: {
    Tribes: { color: { background: "#99ff33" } },
    Kingdoms: { color: { background: "#00cc99" } },
    Empires: { color: { background: "#ff6600" } },
    Nations: { color: { background: "#cc33ff" } },
    Magic: { color: { background: "#00ffff" } },
    Wonder: { color: { background: "#ffcc66" } },
  },
  nodes: {
    shape: "box",
    color: {
      background: "#3498db",
      border: "#2980b9",
      highlight: { background: "#5dade2", border: "#3498db" },
    },
    font: { size: 10, color: "#000" },
    shapeProperties: { borderDashes: false },
  },
  edges: {
    color: "#777",
    width: 2,
    arrows: { to: { enabled: true, scaleFactor: 0.5 } },
    smooth: { enabled: true, type: "straightCross", roundness: 0.5 },
  },
  physics: { enabled: false },
  interaction: { dragNodes: false, zoomView: true, dragView: true },
};

export default function TechTreeVisualizer({ jsonPath, title }: TechTreeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let network: Network | null = null;
    let cancelled = false;

    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${jsonPath}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        network = new Network(
          container,
          { nodes: new DataSet(data.nodes), edges: new DataSet(data.edges) },
          networkOptions,
        );
        network.fit();
        setError(null);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? String(err));
      });

    return () => {
      cancelled = true; // ignore late-arriving fetch results
      network?.destroy(); // required: vis.js throws if a container keeps a live network
    };
  }, [jsonPath]);

  return (
    <>
      <h1>{title}</h1>
      <div ref={containerRef} className="tech-tree-container" />
      {error && <p role="alert">Failed to load tech tree: {error}</p>}
    </>
  );
}
