
import { FC, useState } from 'react'
// import List from '../List/List'


const vragen: string[] = [
    "1a", "1b", "2a", "2b", "2c", "3a", "3b"
]

const students: string[] = [
    "Piet", "Kees", "Henk", "Anita"
]

const App: FC = () => {
    const [selected, setSelected] = useState<string>("")
    return (
        <div className="App">
            <h3>Hoofdstuk 1</h3>

            <table >
                <thead>
                    <tr>

                        <th>Vraag</th>
                        <th>Klaar</th>
                        <th>Hulp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {vragen.map((item) =>
                        <tr>
                            <td>
                                {item}
                            </td>
                            <td>
                                <div>
                                    <input type="checkbox" />
                                </div>
                            </td>

                            <td>             
                                <select value={selected} onChange={e => setSelected(e.target.value)}>
                                    {students.map((student) => (
                                        <option value={student}>{student}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    )}



                </tbody>

            </table>
        </div>
    );
}

export default App;