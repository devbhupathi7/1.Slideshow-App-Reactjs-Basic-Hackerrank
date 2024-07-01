// import React from 'react';

// function Slides({slides}) {

//     return (
//         <div>
//             <div id="navigation" className="text-center">
//                 <button data-testid="button-restart" className="small outlined">Restart</button>
//                 <button data-testid="button-prev" className="small">Prev</button>
//                 <button data-testid="button-next" className="small">Next</button>
//             </div>
//             <div id="slide" className="card text-center">
//                 <h1 data-testid="title">Slide Title Here</h1>
//                 <p data-testid="text">Slide Text Here</p>
//             </div>
//         </div>
//     );

// }

// export default Slides;


// Importing React and the useState hook
import React, { useState } from 'react';

// Functional component Slides, which receives slides as a prop
function Slides({ slides }) {
    // State to keep track of the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle the Restart button click
    const handleRestart = () => {
        setCurrentIndex(0);
    };

    // Function to handle the Prev button click
    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    // Function to handle the Next button click
    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, slides.length - 1));
    };

    // Render the component
    return (
        <div>
            {/* Navigation buttons */}
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    // Restart button click handler
                    onClick={handleRestart}
                    // Disable Restart button if on the first slide
                    disabled={currentIndex === 0}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    // Prev button click handler
                    onClick={handlePrev}
                    // Disable Prev button if on the first slide
                    disabled={currentIndex === 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    // Next button click handler
                    onClick={handleNext}
                    // Disable Next button if on the last slide
                    disabled={currentIndex === slides.length - 1}
                >
                    Next
                </button>
            </div>
            {/* Slide content */}
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[currentIndex].text}</p>
            </div>
        </div>
    );
}

export default Slides;
