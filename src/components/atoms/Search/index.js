import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
// import { FormGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.scss'

const Search = ({ ...props }) => {
    return (
        <InputGroup>
            <FormControl className='search__input' {...props} />
            <InputGroup.Append>
                <Button style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, borderLeft: 'none', borderColor: '#adadad' }} variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup.Append>
        </InputGroup>
        // <FormGroup>
        //     <Input type='text' placeholder='Search' className='search__input' {...props} />
        // </FormGroup>
    )
}

export default Search
