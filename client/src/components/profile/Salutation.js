import React, { Component } from 'react'


/** 
 * Salutation renders a salutation in a given format.
 * @param {string} source - The base salutation (in full English) 
 * @param {string} format - The format you want the salutation 
 *    returned in; currently supports `short`.  The `short` format
 *    will replace words like "Associate" with "Assoc."
 */
class Salutation extends Component {
  render() {
    var sal = this.props.source || ''
    if (this.props.format === 'short') {
      console.log(sal)
      sal = sal.replace(/\bAssociate\b/, 'Assoc.')
      sal = sal.replace(/\bDeputy\b/, 'Dep.')

      sal = sal.replace(/\bProfessor\b/, 'Prof.')

      sal = sal.replace(/\bEmeritus\b/, 'Em.')
    }
    return (
      <span className={this.props.className}>{sal}</span>
    )
  }
}

export default Salutation