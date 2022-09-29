import React from 'react'
import PropTypes from 'prop-types'

export function ContactsList({items, deleteContacts}) {
const elements = items.map(({name, number, id}) => {
    return <li key={id}>{name} : {number} <span onClick={() => deleteContacts(id)}>X</span></li>
})
return (
    
    <ul>{elements}</ul>
 )

}

ContactsList.propTypes = {
    items: PropTypes.array.isRequired,
    deleteContacts: PropTypes.func.isRequired
}