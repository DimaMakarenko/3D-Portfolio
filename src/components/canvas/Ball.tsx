import { ReactElement, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Loader } from '../Loader';

interface BallProps {
  imageUrl: string;
}

export const Ball = ({ imageUrl }: BallProps): ReactElement => {
  const [texture] = useTexture([imageUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={texture} flatShading />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
