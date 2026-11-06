import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported:", e);
      return;
    }

    // Outer Gyroscope Rings (Architectural Mechanical Computing)
    const ring1Geo = new THREE.TorusGeometry(1.65, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Amber Gold
      metalness: 0.85,
      roughness: 0.25,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.4, 0.018, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8, // Titanium Silver
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    scene.add(ring2);

    // Inner Wireframe Dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(1.05, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    scene.add(dodecaMesh);

    // Inner Solid Faceted Core
    const innerGeo = new THREE.OctahedronGeometry(0.65, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.8,
      roughness: 0.3,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Node Vertex Points
    const nodePointsGeo = new THREE.DodecahedronGeometry(1.05, 0);
    const nodePointsMat = new THREE.PointsMaterial({
      color: 0xfde68a,
      size: 0.08,
      transparent: true,
      opacity: 0.95,
    });
    const nodePoints = new THREE.Points(nodePointsGeo, nodePointsMat);
    scene.add(nodePoints);

    // Orbiting Golden / Silver Stardust Field
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Warm Amber (0.98, 0.75, 0.2) to Titanium White (0.9, 0.9, 0.95)
      const isWarm = Math.random() > 0.4;
      colors[i * 3] = isWarm ? 0.98 : 0.88;
      colors[i * 3 + 1] = isWarm ? 0.75 : 0.88;
      colors[i * 3 + 2] = isWarm ? 0.25 : 0.92;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Studio Quality Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.PointLight(0xf59e0b, 2.5, 20);
    warmKeyLight.position.set(4, 4, 3);
    scene.add(warmKeyLight);

    const silverRimLight = new THREE.PointLight(0xe4e4e7, 1.8, 20);
    silverRimLight.position.set(-4, -3, 2);
    scene.add(silverRimLight);

    // Mouse Tracking for Smooth 3D Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.5;
      targetY = (y / rect.height) * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!mount || !renderer) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Gyroscope Ring Rotations
      ring1.rotation.x = elapsedTime * 0.35 + mouseY * 0.4;
      ring1.rotation.y = elapsedTime * 0.4 + mouseX * 0.4;

      ring2.rotation.x = -elapsedTime * 0.4 - mouseY * 0.3;
      ring2.rotation.z = elapsedTime * 0.3 + mouseX * 0.3;

      dodecaMesh.rotation.x = elapsedTime * 0.2 + mouseY * 0.2;
      dodecaMesh.rotation.y = elapsedTime * 0.25 + mouseX * 0.2;

      nodePoints.rotation.x = dodecaMesh.rotation.x;
      nodePoints.rotation.y = dodecaMesh.rotation.y;

      innerMesh.rotation.x = -elapsedTime * 0.5;
      innerMesh.rotation.y = -elapsedTime * 0.6;

      particleField.rotation.y = elapsedTime * 0.08 + mouseX * 0.15;
      particleField.rotation.x = elapsedTime * 0.05;

      // Subtle breath
      const s = 1 + Math.sin(elapsedTime * 2.2) * 0.04;
      innerMesh.scale.set(s, s, s);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      dodecaGeo.dispose();
      dodecaMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodePointsGeo.dispose();
      nodePointsMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] cursor-grab active:cursor-grabbing"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-amber-300 bg-carbon-900/90 border border-amber-500/30 backdrop-blur-md pointer-events-none shadow-md">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping mr-2"></span>
        3D GYROSCOPE SYSTEM
      </div>
    </div>
  );
}
