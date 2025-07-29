"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface GallerySection {
  title: string;
  description?: string;
  images: string[];
}

interface GalleryProps {
  sections: GallerySection[];
}

export const Gallery = ({ sections }: GalleryProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section className="bg-[#F5F5F5] text-black py-16 px-5 sm:px-20">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-gray-600 max-w-3xl">{section.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: imageIndex * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setExpandedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${section.title} ${imageIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      {section.title} #{imageIndex + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {expandedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setExpandedImage(null)}
        >
          <motion.img
            src={expandedImage}
            alt="Expanded view"
            className="max-w-full max-h-full rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
};
