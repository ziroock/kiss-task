import React from 'react'

//TODO: Figure Out Sorting!
//TODO: Make the table a little prettier!


const Table = (props) => {
    try {
        const table_keys = Object.keys(props.data[0]);
        const table_data = props.data;
        let getHeader = function () {
            let table_header = table_keys.map( (col_name) => {
                return <th key={col_name}>{col_name.toUpperCase()}</th>;
            })
            return table_header;
        }

        let getRowsData = function () {
            let tester = table_data.map((row, index) => {
                //console.log(key);
                return <tr key={index}>{
                    table_keys.map( (col) => {
                        //console.log(row[key]);
                        return <td key={row[col]}>{row[col]}</td>;
                    })
                }</tr>;
            })
            return tester;
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

// let tester = table_data.map((row, index) => {
//     //console.log(key);
//     return <tr key={index}>{
//         table_keys.map((key) => {
//             console.log(row[key]);
//             return <td key={row[key]}>{row[key]}</td>;
//         })
//     }</tr>;
// })