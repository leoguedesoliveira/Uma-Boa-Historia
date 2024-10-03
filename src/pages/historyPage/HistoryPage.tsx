import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from '../../components/menuBar/MenuBar';
import { motion } from 'framer-motion';

interface Story {
  id: number;
  title: string;
  content: string;
}

const StoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.BASE_URL}/assets/stories.json`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar as histórias.');
          }
          return response.json();
        })
        .then((data: Story[]) => {
          const selectedStory = data.find((s: Story) => s.id === parseInt(id));
          if (selectedStory) {
            setStory(selectedStory);
          } else {
            setError('História não encontrada.');
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError('ID inválido.');
    }
  }, [id]);

  // Configuração da animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 0.6
      }
    }
  };

  if (error) {
    return (
      <>
        <MenuBar />
        <div className="pt-24">{error}</div> {/* Adiciona padding-top */}
      </>
    );
  }

  if (!story) {
    return (
      <>
        <MenuBar />
        <div className="pt-24">Carregando...</div> {/* Adiciona padding-top */}
      </>
    );
  }

  return (
    <>
      <MenuBar />
      <motion.div 
        className="pt-24 min-h-screen flex flex-col items-center px-4 md:px-8" // Ajusta padding-top
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-mali font-bold text-gray-700 mb-6 text-center" // Aumenta o texto no desktop
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {story.title}
        </motion.h1>
        
        <motion.div 
          className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 p-4 md:p-6 bg-white rounded-lg shadow-md" // Aumenta a largura do conteúdo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {story.content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default StoryPage;
