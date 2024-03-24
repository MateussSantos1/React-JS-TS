import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Função que altera os valores
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Evento que dispara a função
        window.addEventListener('resize', handleResize);

        // Chama a função uma vez para definir os valores iniciais
        handleResize();

        // Limpeza de memória
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Este array vazio garante que o useEffect só seja executado uma vez durante o ciclo de vida do componente

    // Retorne o tamanho da janela
    return windowSize;
}
