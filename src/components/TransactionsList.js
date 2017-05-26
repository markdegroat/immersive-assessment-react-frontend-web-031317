import React from 'react'
import Transaction from './Transaction'

class TransactionsList extends React.Component {

  render(){
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Posted At
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Category
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Amount
              </h3>
            </th>
          </tr>


          {
          this.props.transactions.map(transaction => {
            // if(transaction.category === this.props.searchTerm){
            if(transaction.category.indexOf(this.props.searchTerm)!== -1 || transaction.description.indexOf(this.props.searchTerm)!== -1 ){
              return <Transaction transaction={transaction} />
            }

          }, this)
        }

        </tbody>
      </table>
    )
  }

}



export default TransactionsList
