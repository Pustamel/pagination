import React, {useState} from 'react';
import './App.css';
import {testData} from "./utils";
import {Pagination} from "./Pagination/Pagination";

function App() {
    const [count, setCount] = useState([0, 5])

    const getUsers = () => {
        const paginationUser = []
        for (let i = count[0]; i < count[1]; i++) {
            if (testData[i]) {
                paginationUser?.push(testData[i])
            }
        }
        return paginationUser?.map((item) => <React.Fragment key={item.id}>
            <div className="users">
                <div>{item.name}</div>
                <div>status:{item.status}</div>
            </div>
        </React.Fragment>)
    }

    const setCurrentPage = (page: number) => {
        setCount([1 + (page - 1) * 5, 5 + (page - 1) * 5])
    }

    return (
        <div className="App">
            List Users:
            {getUsers()}
            <Pagination setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default App;
