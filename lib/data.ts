import fs from 'fs';
import path from 'path';

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
  title: 'Project_NSTP',
  description:
    'A collection of projects completed under the National Service Training Program (NSTP) of the Philippines, focusing on community development, civic responsibility, and nation-building through service-oriented initiatives.',
  collectionData: generateImageCollection('projects/nstp', 'Project'),
};

export const arts = {
  title: 'Arts',
  description:
    'A collection of creative works highlighting my passion for visual arts, from graphic design and branding to immersive storytelling through imagery.',
  collectionData: generateImageCollection('arts', 'Art'),
};
