// techController.ts
import { useState, useEffect } from 'react';
import { TechText } from './TechModel';

export function useTechStack() {
  const [selectedTech, setSelectedTech] = useState('');
  const [shuffledTech, setShuffledTech] = useState<string[]>([]);

	function shuffleTech() {
		const shuffled = [...TechText].filter((tech) => tech.text !== selectedTech).sort(() => Math.random() - 0.5);
		const shuffledText = shuffled.map((tech) => tech.text);
		setShuffledTech(shuffledText);
		setSelectedTech(shuffledText[0]);
	}

  useEffect(() => {
    shuffleTech();
  }, []);

  return { selectedTech, shuffledTech, shuffleTech };
}
