
const Sidebar = ({ questions, selectedQuestionId, onQuestionClick } ) => {
    return (
        <>
            <div className="sidebar">
                <h2 style = {{"text-align": "center"}}>Questions</h2>
                <ul>
                    {questions.map(question => (
                    <li  key={question.id}>
                        <a href={`#${question.id}`} onClick = {() => onQuestionClick(question.id)}>{question.title}</a>
                    </li>
                    ))}
                </ul>
                </div>
        </>    
    )
}

export default Sidebar;