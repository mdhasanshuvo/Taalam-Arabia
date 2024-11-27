import banner from "../assets/Langu.png"

const Banner = () => {
    return (
        <div className="carousel w-full flex container mx-auto mt-10 mb-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner}
                    className="object-contain mx-auto" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://kalimah-center.com/wp-content/uploads/2024/07/What-are-Arabic-Basics.png"
                    className="w-full object-contain" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://media.licdn.com/dms/image/C4D12AQH3tq3kEL4FxA/article-cover_image-shrink_600_2000/0/1642685495734?e=2147483647&v=beta&t=iwUMxFIcAHhDKOhxezdq2tp4kXBARusQkHgLjMFjWXU"
                    className="w-full object-contain" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
