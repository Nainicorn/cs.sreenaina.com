import React from "react";

const Coding = () => {
  return (
    <div className="content coding">
      <div className="content-section">
        <div className="content-title">Writing in Code</div>
        <div className="content-info">
          In general, knowing how to write code is the process of creating
          step-by-step guidelines that tell a computer what to do and how to do
          it
        </div>
      </div>
      <div className="content-section">
        <div className="content-title">Why is Coding also Writing?</div>
        <div className="content-info">
          In writing, there are many different styles and levels of writing. As
          someone interested in both literature and computers, the idea of
          coding as writing is an interesting point.
        </div>
        <div className="content-info">
          Software is very goal oriented: code is written to accomplish some
          purpose; this is similar to how writing is also seen to have a purpose
          beyond just words, and rather to expand on or bring something new to
          the universe that is writing.
        </div>
        <div className="content-info">
          Code has different languages that people take months or even years to
          master, just like different styles of writing or a language itself.
        </div>
      </div>
      <div className="content-section">
        <div className="content-title">Code Comments</div>
        <div className="content-info">
          Supposed to be useful for the readers, not the computer // Don’t
          include any formalities that confuse the comment
        </div>
        <div className="content-info">
          Don’t use verbose syntax or formatting that doesn’t directly help the
          explanation of the code // Explain as much as possible by using
          lightweight syntax: shorter and cleaner commenting structure
        </div>
      </div>
      <div className="content-section">
        <div className="content-title">Clean and Comprehensible Code</div>
        <div className="content-info">
          Have the problem solved before you write the code
        </div>
        <div className="content-info">
          Speed and efficiency comes after readability // Use universal
          conventions to improve readability // Efficiency is more important in
          certan use-cases such as algorithms, OS, and hardware interfacing
        </div>
        <div className="content-info">
          Upkeep: You are not the only one that updates the code you wrote, so
          make sure colleagues can follow it // Work with coworkers and
          groupmates, not against them; merge styles to fit the majority style
          instead of splintering to individual styles
        </div>
      </div>
      <div className="content-section">
        <div className="content-title">Let's go over an example...</div>
        <div className="content-info">
        <div className="content-info">Nested Structure Comparison Prompt</div>
          Complete the
          function/method to return true/True when its argument is an array that
          has the same nesting structures and corresponding length of nested
          arrays as the first array.
        </div>
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
