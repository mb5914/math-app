
import { FC, useEffect, useState } from 'react'
import QuestionService from '../../services/QuestionService'

const vragen: string[] = [
    "1a", "1b", "2a", "2b", "2c", "3a", "3b"
]

const students: string[] = [
    "Piet", "Kees", "Henk", "Anita"
]

const App: FC = () => {
    const user: string = 'Piet'
    const [questions, setQuestions] = useState<any>([]);

    useEffect(() => {
        retrieveQuestions()
    }, []);

    const retrieveQuestions = () => {
        QuestionService.getAll()
            .then((response: any) => {
                setQuestions(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return questions && questions.length > 0 ? (
        <div className="App">
            <div style={{ border: '2px solid black', paddingLeft: 20, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}><h6>Ingelogd als: {user}</h6></div>
            <h3>Hoofdstuk 1</h3>

            <table >
                <thead>
                    <tr>
                        <th colSpan={4} style={{ width: "30%" }}>Vraag</th>
                        <th colSpan={4} style={{ width: "30%" }}>Ik ben klaar met:</th>
                        <th colSpan={4} style={{ width: "100%", flexWrap: 'wrap' }}>Hulp vragen aan:</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((item: any) =>
                        <tr >
                            <td colSpan={4}>
                                {item.name}
                            </td>
                            <td colSpan={4}>
                                <div>
                                    <input type="checkbox" />
                                </div>
                            </td>

                            <td colSpan={4} style={{ padding: 10 }}>
                                <div>
                                    {students.map(item => <a style={{ marginRight: 15 }}>{item}</a>)}
                                </div>

                            </td>
                        </tr>
                    )}

                </tbody>

            </table>
        </div>
    ) : <a>Loading...</a>;
}

export default App;