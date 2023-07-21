import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.vecteezy.com/system/resources/previews/024/402/539/original/happy-owner-and-pet-concept-flat-cartoon-character-with-man-playing-with-his-dog-dog-training-animal-and-human-illustration-design-for-decoration-cover-website-poster-free-vector.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Dog traning center</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">viwe more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;