import React from 'react'

const Table = (props) => {
    try {
        let getHeader = function () {
            console.log(props);
            let keys = Object.keys(props.data[0]);
            let tHeader = keys.map((key) => {
                return <th key={key}>{key.toUpperCase()}</th>
            })
            return tHeader;
        }

        let getRowData = function () {

        }

        let getRowsData = function () {

        }

// <tbody>
//     {this.getRowsData()}
// </tbody>

        return (
            <div>
                <table>
                    <thead>
                    <tr>{getHeader()}</tr>
                    </thead>
                    <tbody></tbody>
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


// import React, {Component} from 'react'
//
// class Table extends Component {
//     constructor(props) {
//         super(props);
//         this.getHeader = this.getHeader.bind(this);
//         this.getRowsData = this.getRowsData.bind(this);
//         this.getRowData = this.getRowData.bind(this);
//     }
//
//     getHeader = function(){
//         let keys = Object.keys(this.props.data[0]);
//         let tHeader = keys.map((key) => {
//             return <th key={key}>{key}</th>
//         })
//         return tHeader;
//     }
//
//     getRowData = function(){
//
//     }
//
//     getRowsData = function(){
//
//     }
//
// // <tbody>
// //     {this.getRowsData()}
// // </tbody>
//
//     render() {
//         return (
//             <div>
//                 <table>
//                     <thead>
//                     <tr>{this.getHeader()}</tr>
//                     </thead>
//                     <tbody></tbody>
//                 </table>
//             </div>
//         );
//     }
// }
//
// export default Table