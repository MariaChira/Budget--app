import React from "react"
import Table from "react-bootstrap/Table"

const TableComponent = () => {

  
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
          <th>Income Name</th>
          <th>Month</th>
          <th>Year</th>
          <th>Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ea</td>
            <td>4000</td>
            <td>4000x12</td>
            <td>4000/21</td>
          </tr>
          <tr>
            <td>El</td>
            <td>5000</td>
            <td>5000x12</td>
            <td>5000/21</td>
          </tr>
          <tr>
            <td>Bonusuri</td>
            <td>2000</td>
            <td>2000x12</td>
            <td>2000/21</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent
