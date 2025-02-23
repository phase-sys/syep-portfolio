import fs from 'fs';
import path from 'path';

export interface ICollection {
  href: string
  title: string
  description: string
  collectionData: ImageMeta[]
}

export interface ImageMeta {
  id: number
  src: string
  alt: string
}

// Function
const BASE_DIR = 'public/images';
const BASE_URL = 'images';

const generateImageCollection = (subDir: string, altPrefix: string) => {
  try {
    const fullPath = path.join(process.cwd(), BASE_DIR, subDir);
    return fs.readdirSync(fullPath)
      .sort()
      .map((filename, index) => ({
        id: index + 1,
        src: `/${BASE_URL}/${subDir}/${filename}`,
        alt: `${altPrefix} ${index + 1}`,
      }));
  } catch (error) {
    console.error(`Failed to read images from ${subDir}:`, error);
    return [];
  }
};

// Collections
export const projects_nstp = {
  href:'/nstp',
  title: 'Project: NSTP',
  description:
    'A collection of projects completed under the National Service Training Program (NSTP) of the Philippines, focusing on community development, civic responsibility, and nation-building through service-oriented initiatives.',
  collectionData: generateImageCollection('projects/nstp', 'Project'),
};

export const arts = {
  href: '/arts',
  title: 'Arts',
  description:
    'A collection of creative works highlighting my passion for visual arts, from graphic design and branding to immersive storytelling through imagery.',
  collectionData: generateImageCollection('arts', 'Art'),
};

export const layout = {
  href: '/layout',
  title: 'Layout',
  description:
    'A showcase of expertly crafted layouts blending structure and creativity—featuring designs that balance form, function, and visual harmony across digital and print media.',
  collectionData: generateImageCollection('layout', 'Layout'),
};
