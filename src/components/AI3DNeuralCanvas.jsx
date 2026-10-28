import { useEffect, useRef } from "react";

export default function AI3DNeuralCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const isLightMode = () =>
      document.documentElement.dataset.theme === "light";

    // Mouse coordinates in 3D rotation space
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    // Generate 3D Neural Nodes on a Sphere + Inner AI Core
    const NODE_COUNT = 52;
    const RADIUS = Math.min(width, height) * 0.38;
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      // Golden spiral distribution for uniform sphere surface
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = i < 8 ? RADIUS * 0.45 : RADIUS * (0.85 + Math.random() * 0.25);
      nodes.push({
        origX: r * Math.sin(phi) * Math.cos(theta),
        origY: r * Math.sin(phi) * Math.sin(theta),
        origZ: r * Math.cos(phi),
        x: 0,
        y: 0,
        z: 0,
        projX: 0,
        projY: 0,
        scale: 0,
        baseSize: i < 8 ? 3.5 : 2 + Math.random() * 2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Synapse Data Packets flowing between nodes
    const packets = [];
    for (let i = 0; i < 16; i++) {
      packets.push({
        sourceIdx: Math.floor(Math.random() * NODE_COUNT),
        targetIdx: Math.floor(Math.random() * NODE_COUNT),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - width / 2;
      const clientY = e.clientY - rect.top - height / 2;
      mouseX = clientX / (width / 2);
      mouseY = clientY / (height / 2);
      targetRotationY = mouseX * 0.85;
      targetRotationX = -mouseY * 0.85;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 450;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let angleAuto = 0;

    const render = () => {
      angleAuto += 0.007;

      // Smooth lerp rotation toward mouse orientation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const totalRotY = angleAuto + rotationY;
      const totalRotX = rotationX;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      ctx.clearRect(0, 0, width, height);

      const light = isLightMode();
      const nodeColor1 = light ? "#6d28d9" : "#a855f7"; // Violet
      const nodeColor2 = light ? "#0284c7" : "#38bdf8"; // Cyan
      const lineColorBase = light ? "rgba(99, 102, 241, " : "rgba(168, 85, 247, ";
      const packetColor = light ? "#0284c7" : "#22d3ee";

      const FOV = 400;
      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Project 3D Nodes to 2D
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Rotate Y
        let x1 = n.origX * cosY - n.origZ * sinY;
        let z1 = n.origZ * cosY + n.origX * sinY;

        // Rotate X
        let y1 = n.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + n.origY * sinX;

        n.x = x1;
        n.y = y1;
        n.z = z2;

        const distance = FOV + z2;
        n.scale = Math.max(0.2, FOV / Math.max(10, distance));
        n.projX = centerX + x1 * n.scale;
        n.projY = centerY + y1 * n.scale;
      }

      // Sort nodes by Z for proper depth rendering
      const sortedIndices = [...Array(nodes.length).keys()].sort(
        (a, b) => nodes[a].z - nodes[b].z
      );

      // 2. Render Synaptic Interconnection Lines
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < RADIUS * 0.72) {
            const avgScale = (nodes[i].scale + nodes[j].scale) * 0.5;
            const alpha = Math.max(
              0.04,
              (1 - dist / (RADIUS * 0.72)) * (0.28 * avgScale)
            );

            ctx.strokeStyle = `${lineColorBase}${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].projX, nodes[i].projY);
            ctx.lineTo(nodes[j].projX, nodes[j].projY);
            ctx.stroke();
          }
        }
      }

      // 3. Render Synapse Data Packets (AI Transmission)
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.sourceIdx = Math.floor(Math.random() * NODE_COUNT);
          p.targetIdx = Math.floor(Math.random() * NODE_COUNT);
        }

        const n1 = nodes[p.sourceIdx];
        const n2 = nodes[p.targetIdx];
        if (!n1 || !n2) continue;

        const px = n1.projX + (n2.projX - n1.projX) * p.progress;
        const py = n1.projY + (n2.projY - n1.projY) * p.progress;
        const pScale = (n1.scale + n2.scale) * 0.5;

        ctx.fillStyle = packetColor;
        ctx.beginPath();
        ctx.arc(px, py, 2.2 * pScale, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Render 3D Neural Nodes with Glow
      for (let k = 0; k < sortedIndices.length; k++) {
        const idx = sortedIndices[k];
        const n = nodes[idx];
        const radius = Math.max(1, n.baseSize * n.scale);

        // Alpha based on depth Z
        const alpha = Math.min(1, Math.max(0.3, (n.z + RADIUS) / (2 * RADIUS)));

        ctx.save();
        ctx.globalAlpha = alpha;

        // Alternate colors for AI multi-layer effect
        ctx.fillStyle = idx % 2 === 0 ? nodeColor1 : nodeColor2;
        ctx.shadowColor = idx % 2 === 0 ? nodeColor1 : nodeColor2;
        ctx.shadowBlur = 10 * n.scale;

        ctx.beginPath();
        ctx.arc(n.projX, n.projY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Draw Center AI Core Pulse
      ctx.save();
      const pulseSize = 14 + Math.sin(angleAuto * 3) * 3;
      ctx.fillStyle = light ? "rgba(99, 102, 241, 0.15)" : "rgba(56, 189, 248, 0.18)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`ai-3d-canvas-wrapper ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="ai-3d-canvas" />
      <div className="ai-3d-hologram-pill">
        <span className="ai-pulse-dot" />
        <span>3D AI/ML Neural Mesh</span>
      </div>
    </div>
  );
}
