import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';

interface ShareBarProps {
  url: string;
  title: string;
  description: string;
}

const ShareBar: React.FC<ShareBarProps> = ({ url, title, description }) => {
  const [showCopied, setShowCopied] = useState(false);

  const shareData = {
    title,
    text: description,
    url,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      console.log('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="border-t border-gray-700 pt-8 mt-12">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Compartir artículo</h3>
        
        <div className="flex items-center gap-3">
          {/* Botón nativo de compartir */}
          {navigator.share && (
            <motion.button
              onClick={handleShare}
              className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Compartir"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          )}

          {/* Twitter */}
          <motion.button
            onClick={handleTwitterShare}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Compartir en Twitter"
          >
            <Twitter className="w-5 h-5" />
          </motion.button>

          {/* LinkedIn */}
          <motion.button
            onClick={handleLinkedInShare}
            className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Compartir en LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.button>

          {/* Copiar URL */}
          <motion.button
            onClick={handleCopyUrl}
            className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Copiar URL"
          >
            <AnimatePresence mode="wait">
              {showCopied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="text-green-400"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <LinkIcon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mensaje de confirmación */}
      <AnimatePresence>
        {showCopied && (
          <motion.div
            className="mt-4 p-3 bg-green-600/20 border border-green-600/30 rounded-lg text-green-400 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ✓ URL copiada al portapapeles
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareBar;
