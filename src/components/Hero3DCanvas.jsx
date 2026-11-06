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
    camera.position.z = 4.3;

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

    // Outer Gyroscope Ring 1 - Champagne Gold (#D6AD60)
    const ring1Geo = new THREE.TorusGeometry(1.65, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xD6AD60,
      metalness: 0.85,
      roughness: 0.25,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    // Outer Gyroscope Ring 2 - Cream Gold (#F5E6C8)
    const ring2Geo = new THREE.TorusGeometry(1.42, 0.018, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xF5E6C8,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    scene.add(ring2);

    // Inner Wireframe Dodecahedron - Champagne Gold (#D6AD60)
    const dodecaGeo = new THREE.DodecahedronGeometry(1.05, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: 0xD6AD60,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    scene.add(dodecaMesh);

    // Inner Solid Faceted Core
    const innerGeo = new THREE.OctahedronGeometry(0.65, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xC59A49,
      metalness: 0.8,
      roughness: 0.3,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Node Vertex Points - Cream Gold
    const nodePointsGeo = new THREE.DodecahedronGeometry(1.05, 0);
    const nodePointsMat = new THREE.PointsMaterial({
      color: 0xF5E6C8,
      size: 0.07,
      transparent: true,
      opacity: 0.9,
    });
    const nodePoints = new THREE.Points(nodePointsGeo, nodePointsMat);
    scene.add(nodePoints);

    // --- 3D FLOATING & FLYING ELEMENTS ("Udane Wale" 3D Satellites & Crystals) ---
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    const satellites = [];
    const satelliteCount = 6;
    const shardGeometries = [
      new THREE.OctahedronGeometry(0.16, 0),
      new THREE.TetrahedronGeometry(0.18, 0),
      new THREE.IcosahedronGeometry(0.14, 0),
      new THREE.BoxGeometry(0.18, 0.18, 0.18),
      new THREE.OctahedronGeometry(0.2, 0),
      new THREE.TetrahedronGeometry(0.15, 0),
    ];

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xD6AD60,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const creamMat = new THREE.MeshStandardMaterial({
      color: 0xF5E6C8,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });

    for (let i = 0; i < satelliteCount; i++) {
      const geo = shardGeometries[i % shardGeometries.length];
      const mat = i % 2 === 0 ? goldMat : creamMat;
      const mesh = new THREE.Mesh(geo, mat);

      // Add a subtle wireframe outline for high-tech architectural floating look
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const wireMesh = new THREE.Mesh(geo, wireMat);
      mesh.add(wireMesh);

      // Random orbital parameters
      const orbitRadius = 1.9 + Math.random() * 0.7;
      const speed = 0.5 + Math.random() * 0.7;
      const angleOffset = (i / satelliteCount) * Math.PI * 2;
      const verticalAmp = 0.4 + Math.random() * 0.5;
      const rotSpeedX = (Math.random() - 0.5) * 2;
      const rotSpeedY = (Math.random() - 0.5) * 2;

      satellites.push({
        mesh,
        orbitRadius,
        speed,
        angleOffset,
        verticalAmp,
        rotSpeedX,
        rotSpeedY,
      });

      floatingGroup.add(mesh);
    }

    // Orbiting Champagne Gold Particle Stardust Field (180 micro-particles)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const isCream = Math.random() > 0.5;
      colors[i * 3] = isCream ? 0.96 : 0.84;
      colors[i * 3 + 1] = isCream ? 0.90 : 0.68;
      colors[i * 3 + 2] = isCream ? 0.78 : 0.38;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Lighting (Warm champagne gold studio lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xD6AD60, 2.6, 20);
    goldKeyLight.position.set(4, 4, 3);
    scene.add(goldKeyLight);

    const creamRimLight = new THREE.PointLight(0xF5E6C8, 1.8, 20);
    creamRimLight.position.set(-4, -3, 2);
    scene.add(creamRimLight);

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

      // --- ANIMATE FLYING / FLOATING SATELLITES ("Udane Wale" 3D Elements) ---
      satellites.forEach((sat, idx) => {
        const angle = elapsedTime * sat.speed + sat.angleOffset;
        const x = Math.cos(angle) * sat.orbitRadius;
        const z = Math.sin(angle) * sat.orbitRadius;
        const y = Math.sin(elapsedTime * 1.5 + idx) * sat.verticalAmp;

        sat.mesh.position.set(x, y, z);
        sat.mesh.rotation.x += sat.rotSpeedX * 0.02;
        sat.mesh.rotation.y += sat.rotSpeedY * 0.02;
      });

      floatingGroup.rotation.y = mouseX * 0.3;
      floatingGroup.rotation.x = mouseY * 0.2;

      particleField.rotation.y = elapsedTime * 0.08 + mouseX * 0.15;
      particleField.rotation.x = elapsedTime * 0.05;

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
      shardGeometries.forEach((g) => g.dispose());
      goldMat.dispose();
      creamMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] cursor-grab active:cursor-grabbing"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-mono tracking-wider text-[#D6AD60] bg-[#111416]/90 border border-[#D6AD60]/30 backdrop-blur-md pointer-events-none shadow-md flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D6AD60] animate-ping" />
        <span>3D LEVITATING ORBIT SYSTEM</span>
      </div>
    </div>
  );
}
