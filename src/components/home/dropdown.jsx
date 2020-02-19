import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SortDropdwon = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="sort-by-box" caret>

      </DropdownToggle>
      <DropdownMenu className="dropdown-text">
        <DropdownItem>Relevance</DropdownItem>
        <DropdownItem>Distance</DropdownItem>
        <DropdownItem>Size</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default SortDropdwon;
