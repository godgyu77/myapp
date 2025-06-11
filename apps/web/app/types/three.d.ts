import { Mesh } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      boxGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: any;
  }
} 