import { useEffect, useState } from 'react';

const FeaturedWordsSection = () => {
  const [featuredWords, setFeaturedWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lessonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomLessonNumber = lessonNumbers[Math.floor(Math.random() * lessonNumbers.length)];

    fetch(`/lesson-${randomLessonNumber}.json`)
      .then((res) => res.json())
      .then((data) => {
        const randomWords = [];
        while (randomWords.length < 6) {
          const randomIndex = Math.floor(Math.random() * data.length);
          if (!randomWords.includes(data[randomIndex])) {
            randomWords.push(data[randomIndex]);
          }
        }
        setFeaturedWords(randomWords);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Words</h2>

        {loading && <p className="text-lg text-gray-500">Loading...</p>} {/* Show loading */}
        {error && <p className="text-lg text-red-500">{error}</p>} {/* Show error */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWords.map((word) => (
            <div key={word.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <span className="text-4xl text-indigo-600">{word.word}</span>
              </div>
              <div className="text-gray-600 mb-4 space-y-1">
                <p className="text-lg">Pronunciation: <strong>{word.pronunciation}</strong></p>
                <p className="text-sm">Part of Speech: {word.part_of_speech}</p>
                <p className="text-sm">
                  Difficulty: {word.difficulty}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-500 italic">{word.meaning}</p>
                <p className="text-sm text-gray-400 mt-2">When to say: {word.when_to_say}</p>
                <p className="text-sm text-gray-400 mt-2">Example: " {word.example}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWordsSection;
