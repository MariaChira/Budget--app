import React from "react"
import Table from "react-bootstrap/Table"

const TableComponent = () => {

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {/* {data.map(th => (console.log(th)))} */}
          {/* {data.map(th => <th key={th} style={{ textTransform: 'uppercase' }}>{th}</th>)} */}
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody> */}
      </Table>
    </div>
  )
}

export default TableComponent
