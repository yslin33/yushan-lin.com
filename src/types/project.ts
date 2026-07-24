import type { ImageMetadata } from "astro";

export interface ProjectImage {
  src: string | ImageMetadata;
  alt: string;
  // Editorial standard: use a short noun phrase that identifies the image, avoids body-text repetition, and ends with a period.
  caption?: string;
  title?: string;
  lightboxPresentation?: "standard" | "technical";
}

export interface ProjectFigureGroupData {
  layout?: "single" | "two" | "three";
  images: ProjectImage[];
  equalHeight?: boolean;
  individualCaptions?: boolean;
  stackOnMobile?: boolean;
  // Apply the same concise editorial caption standard to the complete figure group.
  caption?: string;
  includeInGallery?: boolean;
}

export const getProjectImageSrc = (image: ProjectImage) =>
  typeof image.src === "string" ? image.src : image.src.src;

export const collectProjectGalleryImages = (
  groups: ProjectFigureGroupData[],
) => groups
  .filter((group) => group.includeInGallery !== false)
  .flatMap((group) => group.images);
