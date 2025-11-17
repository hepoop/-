// FIX: Import React for type usage to resolve 'Cannot find namespace React' error.
import type * as React from 'react';

export interface Product {
  name: string;
  link: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  estimatedTime: string;
  steps: Step[];
  materials: string[];
  warnings: string[];
  recommendedProducts: Product[];
}

export type Category = 'Manchas' | 'Mascotas' | 'Plantas' | 'Tecnología' | 'Cocina' | 'Salud' | 'Reparaciones' | 'Otro';

export interface Testimonial {
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategoryConfidence {
    category: Category;
    score: number;
    reason?: string;
}
  
// New Types for enhanced features
export interface QueryItem {
    id: string;
    query: string;
    categories: Category[];
    timestamp: number;
}

export interface ImageMeta {
    name: string;
    size: number;
    type: string;
    previewUrl: string;
}
  
export interface SolutionRequest {
    query: string;
    categories: Category[];
    imageMeta?: ImageMeta;
}


// Types for new AI Modules section
export type ModuleCategory = 'Hogar y Limpieza' | 'Tecnología y Gadgets' | 'Cocina y Alimentos' | 'Plantas y Bricolaje' | 'Creatividad y Utilidades';

export interface AIModule {
    id: string;
    name: string;
    description: string;
    icon: React.FC<{className?: string}>;
    category: ModuleCategory;
    isImplemented: boolean;
    acceptsImage: boolean;
    placeholder?: string;
    title: string;
}