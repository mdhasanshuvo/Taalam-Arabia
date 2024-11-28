import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { Modal } from 'react-daisyui'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaVolumeUp } from 'react-icons/fa'; 
import { Helmet } from 'react-helmet';

const Lessons = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const vocabularies = useLoaderData();
    const [selectedWord, setSelectedWord] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Function to pronounce the word
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        console.log(word);
        utterance.lang = 'ar-SA';
        window.speechSynthesis.speak(utterance);
    };

    const getCardColor = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-100 border-green-300';
            case 'medium':
                return 'bg-yellow-100 border-yellow-300';
            case 'hard':
                return 'bg-red-100 border-red-300';
            default:
                return 'bg-gray-100 border-gray-300';
        }
    };

    return (
        <div>

            <Helmet>
                <title>Lesson-{id} | Taalam Arabia</title>
            </Helmet>

            <Navbar />

            <main className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Lesson {id}
                </h1>

                {/* Vocabulary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vocabularies.map((word) => (
                        <div
                            key={word.id}
                            className={`p-6 border rounded-lg shadow hover:shadow-lg transition-all ${getCardColor(word.difficulty)}`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{word.word}</h3>
                            <p className="text-gray-600"><strong>Meaning:</strong> {word.meaning}</p>
                            <p className="text-gray-600"><strong>Pronunciation:</strong> {word.pronunciation}</p>
                            <p className="text-gray-600"><strong>Part of Speech:</strong> {word.part_of_speech}</p>

                            {/* Add Sound Icon for Pronunciation */}
                            <button
                                className="mt-4 flex items-center gap-2 text-gray-600 hover:text-gray-800"
                                onClick={() => pronounceWord(word.pronunciation)}
                            // Pronounce the word on icon click
                            >
                                <FaVolumeUp className="text-xl" />
                                Pronounce
                            </button>

                            <button
                                className="mt-4 btn btn-primary"
                                onClick={() => {
                                    setSelectedWord(word);
                                    setModalOpen(true);
                                }}
                            >
                                When to Say
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal for Word Details */}
                {selectedWord && (
                    <Modal open={modalOpen} onClickBackdrop={() => setModalOpen(false)}>
                        <Modal.Header className="font-bold text-lg modal-box">{selectedWord.word}</Modal.Header>
                        <Modal.Body className='space-y-2'>
                            <p><strong>Meaning:</strong> {selectedWord.meaning}</p>
                            <p><strong>When to Say:</strong> {selectedWord.when_to_say}</p>
                            <p><strong>Example:</strong> {selectedWord.example}</p>
                        </Modal.Body>
                        <Modal.Actions className='pt-3'>
                            <button
                                className="btn"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                        </Modal.Actions>
                    </Modal>
                )}

                {/* Back to Lessons Button */}
                <div className="text-center mt-8">
                    <button
                        className="btn btn-neutral"
                        onClick={() => navigate('/learning')}
                    >
                        Back to Lessons
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Lessons;
