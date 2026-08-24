import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import "../CSS/TechTreeVisualizer.css";

interface TechTreeProps {
  title: string;
  jsonPath: string;
  defaultZoom: number;
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
  zoom: {
    min: 0.1, // Minimum zoom level
    max: 0.4, // Maximum zoom level
  },
};

export default function TechTreeVisualizer({
  jsonPath,
  title,
  defaultZoom,
}: TechTreeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const networkRef = useRef<Network | null>(null);

  const resetView = () => {
    if (!networkRef.current) return;
    networkRef.current.fit();
    networkRef.current.moveTo({
      scale: defaultZoom,
      animation: false,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${jsonPath}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        const network = new Network(
          container,
          { nodes: new DataSet(data.nodes), edges: new DataSet(data.edges) },
          networkOptions,
        );

        networkRef.current = network; // Store the network instance in the ref
        network.fit();
        network.moveTo({
          scale: defaultZoom,
          animation: false,
        });
        setError(null);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? String(err));
      });

    return () => {
      cancelled = true;
      networkRef.current?.destroy();
    };
  }, [defaultZoom, jsonPath]);

  return (
    <>
      <h1>{title}</h1>
      <button onClick={resetView} className="reset-button">
        Reset View
      </button>
      <div ref={containerRef} className="tech-tree-container" />
      {error && <p role="alert">Failed to load tech tree: {error}</p>}
    </>
  );
}
