const About = () => {
    return (
        <section className="py-20  bg-gradient-to-b from-base-200 to-base-100 text-base-content">
            <div className="container mx-auto text-center max-w-3xl px-4 space-y-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">About </h2>
                <p className="text-sm md:text-lg mb-6">
                    Lingo Bingo’s mission is to make learning Arabic vocabulary simple, engaging, and accessible.
                    Through easy-to-follow lessons and interactive features, users can discover and master new words every day,
                    improving their language skills at their own pace.
                </p>
                <button className="btn btn-primary btn-wide text-white">Start Your Journey</button>
            </div>
        </section>
    );
};

export default About;
