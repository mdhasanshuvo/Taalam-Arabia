import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Success = () => {
    const [inView, setInView] = useState(false); 
    const sectionRef = useRef(null); 

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true); 
                    observer.disconnect(); 
                }
            },
            {
                threshold: 0.1, 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-10 bg-indigo-500 text-white">
            <div className="container mx-auto text-center max-w-5xl px-4">
                <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {/* User Count */}
                    <div className="stat">
                        <div className="stat-title font-bold text-slate-200">Users</div>
                        <div className="stat-value">
                            {inView && (
                                <CountUp start={0} end={1250} duration={2.5} separator="," />
                            )}
                        </div>
                    </div>

                    {/* Lesson Count */}
                    <div className="stat">
                        <div className="stat-title font-bold text-slate-200">Lessons</div>
                        <div className="stat-value">
                            {inView && (
                                <CountUp start={0} end={10} duration={2.5} separator="," />
                            )}
                        </div>
                    </div>

                    {/* Vocabulary Count */}
                    <div className="stat">
                        <div className="stat-title font-bold text-slate-200">Vocabulary</div>
                        <div className="stat-value">
                            {inView && (
                                <CountUp start={0} end={100} duration={2.5} separator="," />
                            )}
                        </div>
                    </div>

                    {/* Tutorial Count */}
                    <div className="stat">
                        <div className="stat-title font-bold text-slate-200">Tutorials</div>
                        <div className="stat-value">
                            {inView && (
                                <CountUp start={0} end={6} duration={2.5} separator="," />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;
