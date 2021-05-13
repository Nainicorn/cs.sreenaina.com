import React from "react";

const Coding = () => {
    return (
        <div className="content coding">
            <div className="content-section">
                <div className="content-title">Title</div>
                <div className="content-info">
                    Bad Code example
                    <div className="image">
                        <img src="./images/bad-example.jpg" alt="Bad Example" />
                    </div>
                </div>
                <div className="content-info">
                    Good Code example
                    <div className="image">
                        <img src="./images/good-example1.jpg" alt="Good Example 1" />
                    </div>
                    <div className="image">
                        <img src="./images/good-example2.jpg" alt="Good Example 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coding;
