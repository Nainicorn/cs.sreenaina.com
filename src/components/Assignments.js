import React from "react";

const Assignments = () => {
return (
    <div className="content">
    <div className="content-section">
        <div className="content-title">General CS Assignments/Papers</div>
        <div className="content-info">
        Lab report, Descriptions of Code, Project write-ups, Code and code commenting
    </div>
    </div>
    <div className="content-section">
    <div className="content-title">Sample syllabi - CS 795: Deep Learning at GMU</div>
        <div className="content-info">
        In the class CS 795, Professor Rangwala has students complete optional and mandatory reading assignments that pertain to the topics covered during lectures. Students engage directly with concepts that are relevant to the subfield of deep learning, and read about deep learning neural networks like VGGNet, GoogleNet, and ResNet, NLP, Recommender Systems, and bioinformatics. 
        <div className="image">
            <img src="./images/syllabus.png" alt="Syllabus" />
        </div>
    </div>
    <div className="content-info">
    Through the use of scientific research articles on the topics explored in this class, students are given the opportunity to apply critical analysis and comprehensive techniques to better understand the course material. Additionally, students learn how to implement deep learning which leads to the importance of writing as a source of efficiency in Computer Science. By giving students the necessary mindset to analyze technical papers and to develop efficient and presentable code, this class helps them develop important practices that are useful throughout their academic careers as they write within the field of Computer Science.  
    </div>
    </div>
    <div className="content-section">
    <div className="content-title">Sample assignments - Northeastern University Proposed Plan</div>
        <div className="content-info">
        Since writing is often limited in disciplines such as computer science, the professors proposed small assignments that mainly focused on design, question-based, or analytical writing that connected directly to students’ core assignments. Specifically, the main methods that they ended up incorporating were based on lab settings, peer-review models, and detailed reports. 
    </div>
    <div className="content-info">
    Through the use of scientific research articles on the topics explored in this class, students are given the opportunity to apply critical analysis and comprehensive techniques to better understand the course material. Additionally, students learn how to implement deep learning which leads to the importance of writing as a source of efficiency in Computer Science. By giving students the necessary mindset to analyze technical papers and to develop efficient and presentable code, this class helps them develop important practices that are useful throughout their academic careers as they write within the field of Computer Science. 
    </div>
    </div>
    <div className="content-section">
    <div className="content-title">Paper Critique and Summary: Organized Structure</div>
        <div className="content-info">
        1. Introduce the author and summarize the major points of the research paper in the introduction of your essay.
    </div>
    <div className="content-info">
    2. The thesis sentence should indicate how you’ll organize the critique.
    </div>
    <div className="content-info">
    3. The body should describe a major point that you want to critique objectively, i.e. no critique just yet.
    </div>
    <div className="content-info">
    4. Then, start introducing your own interpretation of the work.
    </div>
    <div className="content-info">
    5. The conclusion should contain an overall interpretation, connections of separate topics into one point, and all the critiques of the work (good and bad).
    </div>
    <div className="content-title">Paper Critique and Summary: Explanation</div>
    <div className="content-info">
    The article summarizes major points of the research question in the introduction, and it does so in a clear and concise manner, stating (in reference to other studies) that “... the source of their [LSTMs] impressive performance and their shortcomings remain poorly understood”.
    </div>
    <div className="content-info">
    The thesis sentence reveals an answer to the research question which effectively sets up the content and format of the rest of the paper. This is done so specifically when the author states that “... [their] analysis reveals the existence of cells that robustly identify interpretable, high-level patterns such as line lengths, brackets and quotes”.
    </div>
    <div className="content-info">
    The “Related Work” subsection of the paper discusses the work of similar studies, and contextualizes RNNs with the initial claim to provide an “empirical exploration of the predictions of LSTMs and their learned representations on real-world data” (Anguelov, 1). 
    </div>
    <div className="content-info">
    The experimental setup section introduces the ED, in which the author begins to delineate the extent and interpretation of their work. 
    </div>
    <div className="content-info">
    The author uses the conclusion to reference an overall interpretation of the study, stating that they “... used character-level language models as an interpretable test bed for analyzing the predictions, representations training dynamics, and error types present in RNNs”. Next, the author consolidates separate topics that are discussed in their paper, claiming that their “qualitative visualization experiments, cell activation statistics and comparisons to finite horizon n-gram models demonstrate that these networks learn powerful, and often interpretable long-range interactions on real-world data.” Finally, the author critiques the limitations of their study, detailing the interpretable categories for cross entropy loss, and discussing how scaling up the model almost entirely eliminates n-gram error. 
    <div className="content-info">
        <div className="image">
            <img src="./images/example.png" alt="Example" />
        </div>
    </div>
    </div>
    </div>
    </div>
);
};

export default Assignments;
