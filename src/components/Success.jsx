import CountUp from 'react-countup';

const Success = () => {
    return (
        <section className="py-10 bg-lime-600 text-white">
            <div className="container mx-auto text-center max-w-5xl px-4">
                <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {/* User Count */}
                    <div className="stat">
                        <div className="stat-title text-black font-medium">Users</div>
                        <div className="stat-value">
                            <CountUp start={0} end={1250} duration={2.5} separator="," />
                        </div>
                    </div>

                    {/* Lesson Count */}
                    <div className="stat">
                        <div className="stat-title text-black font-medium">Lessons</div>
                        <div className="stat-value">
                            <CountUp start={0} end={45} duration={2.5} separator="," />
                        </div>
                    </div>

                    {/* Vocabulary Count */}
                    <div className="stat">
                        <div className="stat-title text-black font-medium">Vocabulary</div>
                        <div className="stat-value">
                            <CountUp start={0} end={1200} duration={2.5} separator="," />
                        </div>
                    </div>

                    {/* Tutorial Count */}
                    <div className="stat">
                        <div className="stat-title text-black font-medium">Tutorials</div>
                        <div className="stat-value">
                            <CountUp start={0} end={35} duration={2.5} separator="," />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;
