import React, { Component } from 'react'

const TableHeader = () => { // Simple component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Job</th>
        <th>Age</th>
      </tr>
    </thead>
  )
}

const TableBody = () => { // Simple component
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Brown</td>
        <td>Janitor</td>
        <td>34</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>O'Harrill</td>
        <td>Bouncer</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Brian</td>
        <td>Aspiring actress</td>
        <td>28</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Rodman</td>
        <td>Bartender</td>
        <td>27</td>
      </tr>
    </tbody>
  )
}

class Table extends Component { // Class component
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table