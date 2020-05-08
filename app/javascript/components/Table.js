import React from 'react'

//TODO: Add more functionality ??? (if time)
//TODO: Make the table a little prettier!

const Table = (props) => {
    try {
        const table_keys = Object.keys(props.data[0]);
        const table_data = props.data;

        //onClicck():  https://reactjs.org/docs/handling-events.html
        //useState: https://reactjs.org/docs/hooks-reference.html
        const [state, setState] = React.useState(null);

        if(state !== null) {
            table_data.sort( (a, b) => {
                if(a[state] < b[state]) {
                    return -1;
                }
                else if (a[state] > b[state]) {
                    return 1;
                }
                return 0;
            });
        }

        let getHeader = function () {
            let table_header = table_keys.map( (key) => {
                return (<th key={key}>
                    <button onClick={() => setState(key)}> </button>
                    {key.toUpperCase()}
                </th>);
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
            <div>
                <table>
                    <thead>
                        <tr>{getHeader()}</tr>
                    </thead>
                    <tbody>
                        {getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }catch(err){
        return (
          <div></div>
        );
        console.log(err.message)
    }
}

export default Table