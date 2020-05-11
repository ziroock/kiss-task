import React from 'react'
import './Table.css'

//TODO: Add more functionality (descending sort) ??? (if time)

const Table = (props) => {
    try {
        const table_keys = Object.keys(props.data[0]);
        const table_data = props.data;

        let state_config = null;
        const [state, setState] = React.useState(state_config);

        if(state !== null) {
            table_data.sort( (a, b) => {
                if(a[state] < b[state]) {
                    return -1;
                }
                else if (a[state] > b[state]) {
                    return 1;
                }
            });
        }

        let getHeader = function () {
            let table_header = table_keys.map( (key) => {
                return (<th key={key}>
                    <div onClick={() => setState(key)} className="button">
                        {key.toUpperCase()}
                    </div>
                </th>
                );
            })
            return table_header;
        }

        let getRowsData = function () {
            //for each row
            let rows_data = table_data.map((row, index) => {
                return <tr key={index}>{
                    //for each key
                    table_keys.map( (key) => {
                        return <td key={row[key]}>{row[key]}</td>;
                    })
                }</tr>;
            })
            return rows_data;
        }

        return (
                <table>
                    <caption> People Information Table</caption>
                    <thead>
                        <tr>{getHeader()}</tr>
                    </thead>
                    <tbody>
                        {getRowsData()}
                    </tbody>
                </table>
        );

    } catch(err) {
        return (
          <div>{err.message}</div>
        );
        console.log(err.message)
    }
}

export default Table