import { useState, useEffect } from 'react';
import StoryCard from "../../components/cards/StoryCard";
import MenuBar from "../../components/menuBar/MenuBar";

export default function Home() {
    interface Tale { id: string, title: string, synopsis: string, image: string }

    const tales: Tale[] = [
        {id: '1', title: 'A Pequena Sereia', synopsis: 'Ariel, uma jovem sereia curiosa, faz um acordo com a bruxa Úrsula para se tornar humana e viver na terra. Agora, ela precisa conquistar o amor do príncipe Eric antes que o tempo acabe.', image: 'pequenaSereia.jpg'},
        {id: '2', title: 'Cinderela', synopsis: 'Cinderela, uma jovem maltratada por sua madrasta, tem sua vida transformada ao receber a ajuda mágica de uma fada madrinha. Com um vestido encantado, ela vai ao baile e conquista o coração do príncipe.', image: 'cinderela.jpg'},
        {id: '3', title: 'Pinóquio', synopsis: 'Pinóquio, um boneco de madeira criado por Gepeto, ganha vida e embarca em uma jornada para se tornar um menino de verdade. Guiado pelo Grilo Falante, ele aprende valiosas lições sobre coragem, honestidade e o amor.', image: 'pinoquio.jpeg'},
        {id: '4', title: 'Rapunzel', synopsis: 'Rapunzel, uma princesa com longos cabelos mágicos, vive trancada em uma torre por uma bruxa. Quando um corajoso ladrão a encontra, ela embarca em uma aventura para descobrir o mundo e seu verdadeiro destino.', image: 'rapunzel.jpeg'},
        {id: '5', title: 'João e Maria', synopsis: 'João e Maria, perdidos na floresta, encontram uma casa feita de doces, mas logo descobrem que pertence a uma bruxa malvada. Para escapar, os irmãos precisam usar sua inteligência e coragem.', image: 'joaoemaria.jpg'},
        {id: '6', title: 'Peter Pan', synopsis: 'Peter Pan, o menino que nunca cresce, leva Wendy e seus irmãos para a mágica Terra do Nunca. Lá, eles vivem aventuras incríveis, enfrentando piratas e conhecendo seres fantásticos enquanto descobrem o poder da imaginação.', image: 'peterpan.jpg'},
        {id: '7', title: 'Branca de Neve', synopsis: 'Branca de Neve é uma princesa bondosa, cuja beleza provoca o ciúme de sua madrasta. Ela foge para a floresta e faz amizade com sete anões que a protegem do mal.', image: 'brancadeneve.jpg'},
        {id: '8', title: 'Aladdin', synopsis: 'Aladdin encontra uma lâmpada mágica com um gênio dentro que pode realizar seus desejos. Ele embarca em uma aventura cheia de magia, amor e perigo.', image: 'aladdin.jpg'},
        {id: '9', title: 'A Bela Adormecida', synopsis: 'Após ser amaldiçoada por uma fada malvada, a princesa Aurora cai em um sono profundo. Somente um beijo de amor verdadeiro poderá despertá-la de seu sono eterno.', image: 'belaadormecida.jpg'},
        {id: '10', title: 'O Rei Leão', synopsis: 'Simba, um jovem leão, precisa superar a perda de seu pai e enfrentar seu tio traiçoeiro para recuperar o trono e se tornar o verdadeiro rei da savana.', image: 'reileao.jpg'},
        {id: '11', title: 'Mogli, o Menino Lobo', synopsis: 'Criado por lobos, o menino Mogli enfrenta perigos na selva enquanto aprende sobre amizade, coragem e a importância de encontrar seu lugar no mundo.', image: 'mogli.jpg'},
        {id: '12', title: 'Hércules', synopsis: 'Hércules, filho de Zeus, precisa provar que é um verdadeiro herói para retornar ao Olimpo. Ao lado de seus amigos, ele enfrenta monstros e vilões em uma jornada épica.', image: 'hercules.jpg'}
    ];

    // Estado para controlar a página atual e quantas histórias mostrar por página
    const [currentPage, setCurrentPage] = useState(1);
    const storiesPerPage = 6;

    // Estado para controlar a transição de visibilidade
    const [visible, setVisible] = useState(false);

    // Calcula os índices de início e fim das histórias para exibição
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = tales.slice(indexOfFirstStory, indexOfLastStory);

    // Função para mudar de página com transição de fade
    const paginate = (pageNumber: number) => {
        setVisible(false); // Inicia a transição de fade-out
        setTimeout(() => {
            setCurrentPage(pageNumber); // Muda a página
            setVisible(true); // Inicia a transição de fade-in
        }, 300); // Tempo da transição
    };

    // Número total de páginas
    const totalPages = Math.ceil(tales.length / storiesPerPage);

    // useEffect para iniciar a animação de fade-in ao carregar a tela
    useEffect(() => {
        setTimeout(() => {
            setVisible(true); // Adiciona um pequeno atraso para o fade-in
        }, 100); // Inicia com um atraso de 100ms
    }, []);

    return (
        <>
            <MenuBar />
            <div className="mt-24 min-h-screen flex items-center justify-center">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl p-4 transition-opacity duration-300 ${
                        visible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {currentStories.map((tale) => (
                        <StoryCard
                            key={tale.id}
                            id={tale.id}
                            image={tale.image}
                            title={tale.title}
                            synopsis={tale.synopsis}
                        />
                    ))}
                </div>
            </div>
            
            {/* Componente de Paginação */}
            <div className="flex justify-center mt-3 mb-4">
                <ul className="flex space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 rounded ${
                                    currentPage === index + 1
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
