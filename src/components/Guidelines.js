import React from "react";
import "./Guidelines.scss";

const Guidelines = () => {
    return (
        <div className="content">
            <div className="content-section">
                <div className="content-title">
                    Make concrete assertions that portray an evidenced claim.
                </div>
                <div className="content-info">
                    Avoid “I think…” or “I believe…” statements because they
                    introduce uncertainty. If something is truly uncertain,
                    don’t claim it, else be confident in its representation.
                </div>
                <div className="content-info">
                    DIFF: In other papers, it’s important to distinguish between
                    claims and predictions; however, in CS, predictions are
                    still made like claims, just with another phrase that
                    indicates that it’s just a prediction (this means there are
                    little opinions in CS papers).
                </div>
            </div>
            <div className="content-section">
                <div className="content-title">
                    In research papers, write in an “[A]IMRaD” structure.
                </div>
                <div className="content-info">
                    This format allows people to draw the most important
                    conclusions from the paper without having to read the entire
                    thing. It also separates the paper in sections for people
                    with different reasons for reading it (GMU Writing Center, 1:00 - 2:00).
                </div>
                <div className="content-info">
                    DIFF: There’s no need for a fleshed out conclusion in a CS
                    paper because we don’t need to repeat any points from the
                    discussion section that is directly before this; whereas in
                    some other fields, the conclusion is the source of most key
                    takeaways. Similar to some of the scholarly articles that we
                    read in class for our research papers, such as The Kite
                    Runner, the articles were mainly based on psychology
                    concepts, and looking through those conclusions, we saw that
                    they exhibited this different trait when compared to CS
                    papers. Within authorship, STEM fields tend to prefer
                    co-authorship while other fields prefer single authorship.
                    There are different perspectives and values taken into
                    consideration with college writing (CS Research and Writing Guide, 1). 
                </div>
            </div>
            <div className="content-section">
                <div className="content-title">
                    Write simple sentences that do not distract the reader.
                </div>
                <div className="content-info">
                    Do not use figurative or literary language in your paper
                    because they distract from the main point you’re trying to
                    make. Communication comes before fanciness.
                </div>
                <div className="content-info">
                    DIFF: Fancy or descriptive language doesn’t add to the
                    essence of the paper and only serves to confuse. In other
                    fields, this language may be needed to emphasize an appeal
                    through ethos or pathos, but CS papers should strictly rely
                    on logos.
                </div>
            </div>
        </div>
    );
};

export default Guidelines;
